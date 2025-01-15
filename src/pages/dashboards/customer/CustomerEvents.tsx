import { DashboardLayout } from '../../../components/layouts/DashboardLayout';
import { Calendar, MapPin, Ticket } from 'lucide-react';
import { mockEvents } from '../../../data/mockEvents';
import { formatDate } from '../../../lib/date';

// Mock purchased tickets data
const purchasedTickets = [
  {
    eventId: '1',
    ticketType: 'Regular',
    purchaseDate: '2024-02-15',
    quantity: 2
  },
  {
    eventId: '2',
    ticketType: 'VIP',
    purchaseDate: '2024-02-16',
    quantity: 1
  }
];

export function CustomerEvents() {
  // Filter events to show only those the customer has tickets for
  const myEvents = mockEvents.filter(event => 
    purchasedTickets.some(ticket => ticket.eventId === event.id)
  );

  return (
    <DashboardLayout type="customer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-8">My Upcoming Events</h1>

        {myEvents.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              You haven't purchased any tickets yet.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {myEvents.map((event) => {
              const ticket = purchasedTickets.find(t => t.eventId === event.id);
              return (
                <div
                  key={event.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
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
                        Upcoming
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
                        <Ticket className="w-4 h-4" />
                        {ticket?.quantity}x {ticket?.ticketType} Ticket{ticket?.quantity !== 1 ? 's' : ''}
                      </div>
                    </div>

                    <button
                      className="w-full py-2 bg-primary-600 text-white rounded-md 
                               hover:bg-primary-700 transition-colors"
                    >
                      View Ticket Details
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}