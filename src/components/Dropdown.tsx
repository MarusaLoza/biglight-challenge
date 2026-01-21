import { useState } from 'preact/hooks';

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  label: string;
  options: Option[];
  onSelect?: (value: string) => void;
}

export const Dropdown = ({ label, options, onSelect }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const handleSelect = (option: Option) => {
    setSelected(option);
    setIsOpen(false);
    if (onSelect) onSelect(option.value);
  };

  return (
    <div className="w-full relative">
      <label 
        style={{ 
          color: 'var(--brand-text-colour-headings)', 
          fontFamily: 'var(--brand-font-font-family-headings)' 
        }}
        className="block text-sm mb-2 font-medium"
      >
        {label}
      </label>
      
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: 'var(--brand-surface-colour-page)',
          borderColor: 'var(--brand-border-colour-primary)',
          borderRadius: 'var(--brand-border-radius-sm)',
          fontFamily: 'var(--brand-font-font-family-paragraph)',
          borderWidth: '1px',
          borderStyle: 'solid'
        }}
        className="w-full flex justify-between items-center p-3 transition-all outline-none"
      >
        <span style={{ color: 'var(--brand-text-colour-body)' }}>
          {selected.label}
        </span>

        <svg 
          style={{ color: 'var(--brand-icon-colour-primary)' }}
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <ul 
          style={{
            backgroundColor: 'var(--brand-surface-colour-page)',
            borderColor: 'var(--brand-border-colour-primary)',
            borderRadius: 'var(--brand-border-radius-sm)',
            borderWidth: '1px',
            borderStyle: 'solid'
          }}
          className="absolute z-20 w-full mt-1 shadow-xl overflow-hidden list-none p-0"
        >
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className="p-3 cursor-pointer text-sm transition-colors flex items-center justify-between
                         hover:bg-[var(--brand-surface-colour-action-primary)] 
                         hover:text-[var(--brand-text-colour-action-onprimary)]"
              style={{ 
                color: 'var(--brand-text-colour-body)',
                fontFamily: 'var(--brand-font-font-family-paragraph)'
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};