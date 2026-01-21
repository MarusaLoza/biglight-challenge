import { h } from 'preact';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit";
}
export const Button = ({ label, onClick, type = "button" }: ButtonProps) => (
  <button 
    type={type}
    onClick={onClick}
    style={{
      backgroundColor: 'var(--brand-surface-colour-action-primary)',
      color: 'var(--brand-text-colour-action-onprimary)',
      borderRadius: 'var(--brand-border-radius-md)',
      fontFamily: 'var(--brand-font-font-family-paragraph)',
    }}
    className="w-full py-[var(--brand-scale-300)] transition-all font-bold hover:opacity-90 active:scale-95"
  >
    {label}
  </button>
);