import { DashboardLayout } from '../../../components/layouts/DashboardLayout';
import { useAuthStore } from '../../../store/auth';
import { Mail, User, Building, Globe } from 'lucide-react';

export function OrganizerSettings() {
  const { user } = useAuthStore();

  return (
    <DashboardLayout type="organizer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-8">Account Settings</h1>
        
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-6">Personal Information</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    defaultValue={user?.name}
                    className="pl-10 w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                             bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    defaultValue={user?.email}
                    className="pl-10 w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                             bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-primary-600 text-white rounded-lg 
                         hover:bg-primary-700 focus:ring-2 focus:ring-primary-500"
              >
                Save Changes
              </button>
            </form>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-6">Organization Details</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Organization Name</label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Your organization name"
                    className="pl-10 w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                             bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Website</label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="url"
                    placeholder="https://example.com"
                    className="pl-10 w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                             bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-primary-600 text-white rounded-lg 
                         hover:bg-primary-700 focus:ring-2 focus:ring-primary-500"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}