import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ми йдемо на один рівень вгору з папки scripts, щоб знайти json
const TOKENS_PATH = path.join(__dirname, '../figma-tokens.json'); 
// Кладемо css у папку src, щоб Storybook його бачив
const OUTPUT_PATH = path.join(__dirname, '../src/tokens.css');;

try {
  const rawData = fs.readFileSync(TOKENS_PATH, 'utf8');
  const tokens = JSON.parse(rawData);

  const allValues = {};
  function collect(obj, prefix = '') {
    for (const key in obj) {
      const fullPath = prefix ? `${prefix}.${key}` : key;
      if (obj[key] && typeof obj[key] === 'object') {
        if (obj[key].value !== undefined) {
          allValues[fullPath] = obj[key].value;
          const parts = fullPath.split('.');
          const shortPath = parts.slice(1).join('.');
          if (shortPath) allValues[shortPath] = obj[key].value;
        } else {
          collect(obj[key], fullPath);
        }
      }
    }
  }
  Object.keys(tokens).forEach(k => collect(tokens[k], k));

  function resolve(val, seen = new Set()) {
    if (typeof val !== 'string' || !val.includes('{')) return val;
    const match = val.match(/{(.*)}/);
    if (!match) return val;
    const refPath = match[1];
    if (seen.has(refPath)) return val;
    seen.add(refPath);

    let foundValue = allValues[refPath] ?? allValues[`Primitives/Default.${refPath}`];
    return foundValue !== undefined ? resolve(foundValue, seen) : val;
  }

  function formatValue(value, type) {
    // Якщо це число і тип не колір/шрифт — додаємо px
    if (!isNaN(value) && value !== '' && type !== 'color' && type !== 'fontWeight') {
      return `${value}px`;
    }
    return value;
  }

  function generateVars(obj) {
    let css = '';
    function traverse(current, pathParts = []) {
      for (const key in current) {
        if (current[key]?.value !== undefined) {
          const resolvedValue = resolve(current[key].value);
          const finalValue = formatValue(resolvedValue, current[key].type);
          
          // ЗАМІНЮЄМО пробіли та слеші на дефіси
          const varName = [...pathParts, key]
            .join('-')
            .replace(/[\s\/]/g, '-')
            .toLowerCase();
          
          css += `  --brand-${varName}: ${finalValue};\n`;
        } else if (typeof current[key] === 'object' && key !== 'type') {
          traverse(current[key], [...pathParts, key]);
        }
      }
    }
    traverse(obj);
    return css;
  }

  const primitives = generateVars(tokens['Primitives/Default']);
  const brandA = generateVars({...tokens['Alias colours/BrandA'], ...tokens['Mapped/BrandA']});
  const brandB = generateVars({...tokens['Alias colours/BrandB'], ...tokens['Mapped/BrandB']});

  const cssContent = `/* AUTO-GENERATED. DO NOT EDIT. */
:root {
${primitives}
${brandA}
}

.theme-brand-b {
${brandB}
}
`;

  fs.writeFileSync(OUTPUT_PATH, cssContent);
  console.log('✅ Success! Clean tokens generated.');
} catch (err) {
  console.error('❌ Error:', err);
}