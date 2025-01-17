import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { DashboardLayout } from '../../../components/layouts/DashboardLayout';
import { mockEvents } from '../../../data/mockEvents';

export function CustomerDashboard() {
  const upcomingEvents = mockEvents.slice(0, 2);

  return (
    <DashboardLayout type="customer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
        
        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-primary-100 
                       dark:border-primary-900/50 shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Events</p>
                <p className="text-2xl font-semibold mt-1">2</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-primary-100 
                       dark:border-primary-900/50 shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Upcoming Events</p>
                <p className="text-2xl font-semibold mt-1">1</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-primary-100 
                       dark:border-primary-900/50 shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Tickets</p>
                <p className="text-2xl font-semibold mt-1">3</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-primary-100 
                       dark:border-primary-900/50 shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Reviews Given</p>
                <p className="text-2xl font-semibold mt-1">1</p>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border-2 border-primary-100 
                     dark:border-primary-900/50 shadow-card p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Upcoming Events</h2>
            <Link
              to="/dashboard/customer/tickets"
              className="flex items-center gap-2 text-primary-600 hover:text-primary-700"
            >
              View all tickets
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="flex gap-4 p-4 border-2 border-primary-100 dark:border-primary-900/50 
                         rounded-lg bg-white dark:bg-gray-800 shadow-card 
                         hover:shadow-card-hover hover:border-primary-200 
                         dark:hover:border-primary-800/50 transition-all duration-200"
              >
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{event.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{event.location}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {new Date(event.startDate).toLocaleDateString()}
                  </p>
                  <Link
                    to={`/events/${event.id}`}
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium mt-2 inline-block"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border-2 border-primary-100 
                     dark:border-primary-900/50 shadow-card p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Quick Actions</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Link
              to="/events"
              className="flex items-center gap-3 p-4 border-2 border-primary-100 
                       dark:border-primary-900/50 rounded-lg bg-white dark:bg-gray-800 
                       shadow-card hover:shadow-card-hover hover:border-primary-200 
                       dark:hover:border-primary-800/50 transition-all duration-200 group"
            >
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600">
                  Browse Events
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Discover new events
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600" />
            </Link>

            <Link
              to="/dashboard/customer/tickets"
              className="flex items-center gap-3 p-4 border-2 border-primary-100 
                       dark:border-primary-900/50 rounded-lg bg-white dark:bg-gray-800 
                       shadow-card hover:shadow-card-hover hover:border-primary-200 
                       dark:hover:border-primary-800/50 transition-all duration-200 group"
            >
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600">
                  My Tickets
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  View your tickets
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600" />
            </Link>

            <Link
              to="/dashboard/customer/reviews"
              className="flex items-center gap-3 p-4 border-2 border-primary-100 
                       dark:border-primary-900/50 rounded-lg bg-white dark:bg-gray-800 
                       shadow-card hover:shadow-card-hover hover:border-primary-200 
                       dark:hover:border-primary-800/50 transition-all duration-200 group"
            >
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600">
                  Write Review
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Share your experience
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600" />
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}