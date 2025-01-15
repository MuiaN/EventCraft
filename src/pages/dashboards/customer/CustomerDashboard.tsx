import { DashboardLayout } from '../../../components/layouts/DashboardLayout';
import { Link } from 'react-router-dom';
import { Ticket, Calendar, Star, ArrowRight, TrendingUp } from 'lucide-react';
import { mockEvents } from '../../../data/mockEvents';
import { formatDate } from '../../../lib/date';

// Mock stats for demonstration
const stats = {
  totalTickets: 4,
  upcomingEvents: 2,
  pastEvents: 1,
  totalSpent: 18000
};

export function CustomerDashboard() {
  const upcomingEvents = mockEvents.slice(0, 2); // Show only 2 upcoming events

  return (
    <DashboardLayout type="customer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
        
        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                <Ticket className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Tickets</p>
                <p className="text-2xl font-semibold">{stats.totalTickets}</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-full">
                <Calendar className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Upcoming Events</p>
                <p className="text-2xl font-semibold">{stats.upcomingEvents}</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                <Star className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Past Events</p>
                <p className="text-2xl font-semibold">{stats.pastEvents}</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-full">
                <TrendingUp className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Spent</p>
                <p className="text-2xl font-semibold">KES {stats.totalSpent.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Upcoming Events</h2>
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
                className="flex gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
              >
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">{event.title}</h3>
                  <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {formatDate(event.startDate)}
                    </div>
                    <div className="flex items-center gap-2">
                      <Ticket className="w-4 h-4" />
                      Regular Ticket
                    </div>
                  </div>
                  <Link
                    to={`/events/${event.id}`}
                    className="inline-block mt-2 text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-6">Quick Actions</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Link
              to="/events"
              className="flex items-center gap-3 p-4 border border-gray-200 dark:border-gray-700 
                       rounded-lg hover:border-primary-600 dark:hover:border-primary-400 
                       transition-colors group"
            >
              <div className="p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg 
                            group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30">
                <Ticket className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <p className="font-medium">Browse Events</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Discover new events
                </p>
              </div>
            </Link>

            <Link
              to="/dashboard/customer/tickets"
              className="flex items-center gap-3 p-4 border border-gray-200 dark:border-gray-700 
                       rounded-lg hover:border-primary-600 dark:hover:border-primary-400 
                       transition-colors group"
            >
              <div className="p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg 
                            group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30">
                <Calendar className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <p className="font-medium">My Tickets</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  View your tickets
                </p>
              </div>
            </Link>

            <Link
              to="/dashboard/customer/reviews"
              className="flex items-center gap-3 p-4 border border-gray-200 dark:border-gray-700 
                       rounded-lg hover:border-primary-600 dark:hover:border-primary-400 
                       transition-colors group"
            >
              <div className="p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg 
                            group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30">
                <Star className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <p className="font-medium">My Reviews</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Manage your reviews
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}