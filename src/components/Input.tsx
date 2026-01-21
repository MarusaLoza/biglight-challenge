import type { JSX } from 'preact';

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: JSX.TargetedEvent<HTMLInputElement>) => void;
}

export const Input = ({ label, type = "text", placeholder, value, onChange }: InputProps) => (
  <div className="w-full">
    <label 
      style={{ 
        color: 'var(--brand-text-colour-body)',
        fontFamily: 'var(--brand-font-font-family-paragraph)'
      }}
      className="block text-sm mb-2 font-medium tracking-wide"
    >
      {label}
    </label>
    <input 
      type={type}
      value={value}
      onInput={onChange}
      placeholder={placeholder}
      /* Використовуємо style для критичних токенів */
      style={{
        backgroundColor: 'var(--brand-surface-colour-secondary)',
        borderColor: 'var(--brand-border-colour-primary)',
        borderRadius: 'var(--brand-border-radius-sm)',
        color: 'var(--brand-text-colour-body)',
        fontFamily: 'var(--brand-font-font-family-paragraph)',
        borderWidth: '1px'
      }}
      className="w-full p-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--brand-surface-colour-action-primary)] placeholder:opacity-40"
    />
  </div>
);