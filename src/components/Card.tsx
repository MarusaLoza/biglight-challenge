import { h } from 'preact';
import { Button } from './Button';

interface CardProps {
  title: string;
  description: string;
  image?: string;
}

export const Card = ({ title, description, image }: CardProps) => {
  return (
    <div 
      style={{
        backgroundColor: 'var(--brand-surface-colour-page)', // Або var(--brand-surface-colour-secondary)
        borderColor: 'var(--brand-border-colour-primary)',
        borderRadius: 'var(--brand-border-radius-lg)',
        borderWidth: '1px',
        borderStyle: 'solid'
      }}
      className="overflow-hidden shadow-sm flex flex-col transition-all duration-300"
    >
      <div 
        style={{ backgroundColor: 'var(--brand-surface-colour-passive)' }}
        className="w-full h-48 overflow-hidden flex items-center justify-center"
      >
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center opacity-20">
             <span style={{ fontSize: '48px' }}>🏠</span>
             <p className="text-xs font-bold">No Image Available</p>
          </div>
        )}
      </div>

      <div className="p-[var(--brand-scale-600)] flex flex-col gap-[var(--brand-scale-300)]">
        <h3 
          style={{ 
            color: 'var(--brand-text-colour-headings)',
            fontFamily: 'var(--brand-font-font-family-headings)' 
          }}
          className="text-xl font-bold leading-tight"
        >
          {title}
        </h3>
        
        <p 
          style={{ 
            color: 'var(--brand-text-colour-body)',
            fontFamily: 'var(--brand-font-font-family-paragraph)' 
          }}
          className="opacity-80 text-sm leading-relaxed"
        >
          {description}
        </p>
        
        <div className="mt-[var(--brand-scale-400)]">
          <Button label="Explore More" />
        </div>
      </div>
    </div>
  );
};