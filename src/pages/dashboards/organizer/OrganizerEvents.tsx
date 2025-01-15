import { DashboardLayout } from '../../../components/layouts/DashboardLayout';
import { mockEvents } from '../../../data/mockEvents';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users } from 'lucide-react';
import { formatDate } from '../../../lib/date';

export function OrganizerEvents() {
  return (
    <DashboardLayout type="organizer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">My Events</h1>
          <Link
            to="/create"
            className="px-4 py-2 bg-primary-600 text-white rounded-md 
                     hover:bg-primary-700 transition-colors"
          >
            Create Event
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden 
                       hover:shadow-md transition-shadow"
            >
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 
                                dark:bg-green-900/20 dark:text-green-400">
                    Active
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                
                <div className="space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {formatDate(event.startDate)}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {event.ticketTypes.reduce((sum, ticket) => sum + ticket.quantity, 0)} tickets total
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-sm">
                    <p className="font-medium">Revenue</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      KES {event.ticketTypes.reduce((sum, ticket) => 
                        sum + (ticket.price * ticket.quantity), 0
                      ).toLocaleString()}
                    </p>
                  </div>
                  <Link
                    to={`/events/${event.id}`}
                    className="px-4 py-2 text-primary-600 hover:text-primary-700 
                             font-medium transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}