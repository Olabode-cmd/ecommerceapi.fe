import { forwardRef } from 'react';
import { Search } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'search' | 'auth';
  error?: string;
  icon?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant = 'default', error, icon = false, className = '', ...props }, ref) => {
    const baseStyles = 'w-full py-3 rounded-lg border focus:outline-none focus:ring-2 transition-colors';
    const paddingStyles = icon ? 'pl-12 pr-4' : 'px-4';
    
    const variants = {
      default: 'border-gray-300 focus:ring-blue-500 focus:border-blue-500',
      search: 'border-gray-300 bg-white text-black placeholder-gray-500 focus:ring-blue-500',
      auth: 'border-gray-300 focus:ring-black focus:border-black'
    };

    const errorStyles = error ? 'border-red-500 focus:ring-red-500' : '';

    return (
      <div className="w-full relative">
        {icon && variant === 'search' && (
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        )}
        <input
          ref={ref}
          className={`${baseStyles} ${paddingStyles} ${variants[variant]} ${errorStyles} ${className}`}
          {...props}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;