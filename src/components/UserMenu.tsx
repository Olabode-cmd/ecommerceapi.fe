import { useState, useRef, useEffect } from 'react';
import { User, ShoppingCart, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useGetMe } from '../services/auth';
import Button from './ui/Button';

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { logout } = useAuth();
  const { data: userResponse } = useGetMe();
  
  const userName = userResponse?.data?.name || 'User';

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2"
      >
        <User className="w-5 h-5" />
        <span className="hidden md:block">{userName}</span>
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
          <div className="py-2">
            <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center space-x-2">
              <Settings className="w-4 h-4" />
              <span>Profile</span>
            </button>
            <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center space-x-2">
              <ShoppingCart className="w-4 h-4" />
              <span>Cart</span>
            </button>
            <hr className="my-1" />
            <button 
              onClick={logout}
              className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center space-x-2 text-red-600"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}