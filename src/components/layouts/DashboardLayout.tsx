import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';

interface DashboardLayoutProps {
  children: ReactNode;
  type: 'customer' | 'organizer';
}

export function DashboardLayout({ children, type }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar type={type} />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}