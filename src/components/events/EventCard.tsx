import { Link } from 'react-router-dom';
import { CalendarDays, MapPin } from 'lucide-react';
import { type Event } from '../../types/event';
import { cn } from '../../lib/utils';
import { formatDate } from '../../lib/date';

interface EventCardProps {
  event: Event;
  className?: string;
}

export function EventCard({ event, className }: EventCardProps) {
  return (
    <div className={cn(
      'bg-white dark:bg-gray-800 rounded-lg border-2 border-primary-100 dark:border-primary-900/50',
      'shadow-card hover:shadow-card-hover hover:border-primary-200 dark:hover:border-primary-800/50',
      'transition-all duration-200',
      className
    )}>
      <img 
        src={event.imageUrl} 
        alt={event.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
          {event.category}
        </span>
        <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">{event.title}</h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {event.description}
        </p>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <CalendarDays className="w-4 h-4 mr-2" />
            {formatDate(event.startDate)}
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <MapPin className="w-4 h-4 mr-2" />
            {event.location}
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-700 dark:text-gray-300">
            By {event.organizer.name}
          </div>
          <Link 
            to={`/events/${event.id}`}
            className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 
                     transition-colors shadow-sm hover:shadow"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}