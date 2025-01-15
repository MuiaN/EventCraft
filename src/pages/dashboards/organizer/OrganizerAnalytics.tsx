import { DashboardLayout } from '../../../components/layouts/DashboardLayout';
import { BarChart3, TrendingUp, Users, Calendar } from 'lucide-react';
import { mockEvents } from '../../../data/mockEvents';

export function OrganizerAnalytics() {
  return (
    <DashboardLayout type="organizer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-8">Analytics</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Conversion Rate</p>
                <p className="text-2xl font-semibold">68%</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-full">
                <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Avg. Attendance</p>
                <p className="text-2xl font-semibold">156</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                <Calendar className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Events This Month</p>
                <p className="text-2xl font-semibold">{mockEvents.length}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Revenue Breakdown</h2>
            <div className="h-64 flex items-center justify-center text-gray-500">
              Chart placeholder - Revenue over time
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Popular Event Categories</h2>
            <div className="h-64 flex items-center justify-center text-gray-500">
              Chart placeholder - Category distribution
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}