import { useParams } from 'react-router-dom';
import { CalendarDays, MapPin, User } from 'lucide-react';
import { type Event } from '../types/event';
import { TicketCard } from '../components/tickets/TicketCard';
import { formatDate } from '../lib/date';
import { mockEvents } from '../data/mockEvents';

const getEvent = (id: string): Event | undefined => {
  return mockEvents.find(event => event.id === id);
};

export function EventDetails() {
  const { id } = useParams<{ id: string }>();
  const event = getEvent(id!);

  if (!event) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400">
          The event you're looking for doesn't exist or has been removed.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-[400px] object-cover rounded-lg"
          />
          
          <div>
            <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                {formatDate(event.startDate)}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {event.location}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                By {event.organizer.name}
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
              {event.description}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Select Tickets</h2>
          {event.ticketTypes.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onSelect={(ticket) => {
                // TODO: Implement ticket selection
                console.log('Selected ticket:', ticket);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}