import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Ticket,
  Star,
  Settings,
  Users,
  BarChart3,
  LogOut
} from 'lucide-react';
import { cn } from '../../lib/utils';

interface SidebarProps {
  type: 'customer' | 'organizer';
}

interface NavItem {
  label: string;
  icon: React.ElementType;
  href: string;
}

export function Sidebar({ type }: SidebarProps) {
  const location = useLocation();
  
  const customerNavItems: NavItem[] = [
    { label: 'Dashboard', icon: LayoutDashboard, href: '/dashboard/customer' },
    { label: 'My Tickets', icon: Ticket, href: '/dashboard/customer/tickets' },
    { label: 'My Reviews', icon: Star, href: '/dashboard/customer/reviews' },
    { label: 'Settings', icon: Settings, href: '/dashboard/customer/settings' },
  ];

  const organizerNavItems: NavItem[] = [
    { label: 'Dashboard', icon: LayoutDashboard, href: '/dashboard/organizer' },
    { label: 'Events', icon: Ticket, href: '/dashboard/organizer/events' },
    { label: 'Attendees', icon: Users, href: '/dashboard/organizer/attendees' },
    { label: 'Analytics', icon: BarChart3, href: '/dashboard/organizer/analytics' },
    { label: 'Settings', icon: Settings, href: '/dashboard/organizer/settings' },
  ];

  const navItems = type === 'customer' ? customerNavItems : organizerNavItems;

  return (
    <aside className="w-64 border-r border-gray-200 dark:border-gray-800">
      <div className="flex flex-col h-full">
        <nav className="flex-1 px-2 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                'flex items-center px-4 py-2 text-sm font-medium rounded-lg',
                'transition-colors duration-150 ease-in-out',
                location.pathname === item.href
                  ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
              )}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <button
            onClick={() => {/* TODO: Implement logout */}}
            className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-700 
                     dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Sign Out
          </button>
        </div>
      </div>
    </aside>
  );
}