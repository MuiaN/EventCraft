import { DashboardLayout } from '../../../components/layouts/DashboardLayout';
import { useAuthStore } from '../../../store/auth';
import { Mail, User, Phone, Bell, Shield, CreditCard } from 'lucide-react';

export function CustomerSettings() {
  const { user } = useAuthStore();

  return (
    <DashboardLayout type="customer">
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

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    placeholder="+254 7XX XXX XXX"
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

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-6">Payment Methods</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="font-medium">M-PESA</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Primary payment method</p>
                    </div>
                  </div>
                  <button className="text-primary-600 hover:text-primary-700">Edit</button>
                </div>
                <button
                  className="w-full py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-lg
                           text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-750"
                >
                  Add Payment Method
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-6">Notifications</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Bell className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Updates about your tickets and events
                      </p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                                  peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full 
                                  peer dark:bg-gray-700 peer-checked:after:translate-x-full 
                                  peer-checked:after:border-white after:content-[''] after:absolute 
                                  after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 
                                  after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
                                  dark:border-gray-600 peer-checked:bg-primary-600"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-6">Security</h2>
              <div className="space-y-4">
                <button
                  className="w-full flex items-center justify-between p-4 border border-gray-200 
                           dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-750"
                >
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="font-medium">Change Password</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Update your account password
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}