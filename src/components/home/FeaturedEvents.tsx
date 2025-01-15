import { Link } from 'react-router-dom';
import { CalendarDays, MapPin } from 'lucide-react';
import { mockEvents } from '../../data/mockEvents';
import { formatDate } from '../../lib/date';

export function FeaturedEvents() {
  const featuredEvents = mockEvents.slice(0, 3);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Events</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover the most exciting events happening across Kenya. From tech conferences to music festivals, 
            there's something for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map((event) => (
            <Link
              key={event.id}
              to={`/events/${event.id}`}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm 
                       hover:shadow-md transition-shadow"
            >
              <div className="relative">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-sm font-medium bg-white/90 dark:bg-gray-900/90 
                                rounded-full backdrop-blur-sm">
                    {event.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 
                             dark:group-hover:text-primary-400 transition-colors">
                  {event.title}
                </h3>
                
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4" />
                    {formatDate(event.startDate)}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/events"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg 
                     font-semibold hover:bg-primary-700 transition-colors"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}