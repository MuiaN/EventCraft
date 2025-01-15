import { Link } from 'react-router-dom';
import { CalendarDays } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { AuthMenu } from './navigation/AuthMenu';

export function Navbar() {
  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <CalendarDays className="h-8 w-8 text-primary-600 dark:text-primary-400" />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
              EventCraft
            </span>
          </Link>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <AuthMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}