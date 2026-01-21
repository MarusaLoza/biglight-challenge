import { h } from 'preact';
import { Button } from './Button';
import { Input } from './Input';
import { Dropdown } from './Dropdown';

interface LoginDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginDrawer = ({ isOpen, onClose }: LoginDrawerProps) => {
  // Опції для нашого нового Dropdown
  const languageOptions = [
    { label: 'English', value: 'en' },
    { label: 'Ukrainian', value: 'ua' },
    { label: 'German', value: 'de' },
  ];

  return (
    <>
      {/* Overlay - затемнення фону */}
      <div 
        className={`fixed inset-0 bg-[var(--brand-surface-colour-overlay-background)] transition-opacity duration-300 z-[9998] 
        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={onClose}
      />
      
      {/* Drawer Panel */}
      <aside 
        style={{ 
          backgroundColor: 'var(--brand-surface-colour-page)',
          borderColor: 'var(--brand-border-colour-primary)',
          fontFamily: 'var(--brand-font-font-family-paragraph)'
        }}
        className={`fixed top-0 right-0 h-full w-full sm:max-w-[440px] z-[9999] shadow-2xl transition-transform duration-500 border-l flex flex-col
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        
        {/* Header - Кнопка закриття */}
        <div className="flex justify-end p-6">
          <button 
            onClick={onClose} 
            className="text-2xl p-2 hover:opacity-60 transition-opacity cursor-pointer"
            style={{ color: 'var(--brand-text-colour-body)' }}
          >
            ✕
          </button>
        </div>

        {/* Content Container */}
        <div className="px-8 sm:px-12 pb-12 flex-1 overflow-y-auto">
          
          {/* Welcome Text */}
          <div className="mb-10">
            <h1 
              style={{ 
                color: 'var(--brand-text-colour-headings)',
                fontFamily: 'var(--brand-font-font-family-headings)'
              }}
              className="text-4xl font-bold mb-3 tracking-tight"
            >
              Login
            </h1>
            <p 
              style={{ color: 'var(--brand-text-colour-body)' }}
              className="opacity-70 text-base"
            >
              Welcome back! Please enter your details to continue.
            </p>
          </div>

          {/* Form */}
          <form 
            className="flex flex-col gap-6" 
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Наш новий Dropdown */}
            <Dropdown 
              label="Preferred Language" 
              options={languageOptions} 
              onSelect={(val) => console.log('Language selected:', val)}
            />

            <Input 
              label="Email Address" 
              placeholder="name@company.com" 
              type="email" 
            />
            
            <div className="flex flex-col gap-2">
              <Input 
                label="Password" 
                type="password" 
                placeholder="••••••••" 
              />
              <a href="#" className="text-xs text-right opacity-60 hover:opacity-100 transition-opacity">
                Forgot password?
              </a>
            </div>

            <div className="mt-4">
              <Button label="Sign In" />
            </div>
          </form>

          {/* Footer inside Drawer */}
          <div className="mt-auto pt-10 text-center border-t border-gray-100 mt-10">
            <p className="text-sm opacity-60">
              Don't have an account? <span className="font-bold cursor-pointer underline">Sign Up</span>
            </p>
          </div>

        </div>
      </aside>
    </>
  );
};