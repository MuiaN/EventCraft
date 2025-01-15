import { DashboardLayout } from '../../../components/layouts/DashboardLayout';
import { useState } from 'react';
import { Ticket, Calendar, MapPin, Filter } from 'lucide-react';
import { mockEvents } from '../../../data/mockEvents';
import { formatDate } from '../../../lib/date';

// Mock purchased tickets data with status
const purchasedTickets = [
  {
    eventId: '1',
    ticketType: 'Regular',
    purchaseDate: '2024-02-15',
    quantity: 2,
    status: 'upcoming' as const
  },
  {
    eventId: '2',
    ticketType: 'VIP',
    purchaseDate: '2024-02-16',
    quantity: 1,
    status: 'upcoming' as const
  },
  {
    eventId: '3',
    ticketType: 'Early Bird',
    purchaseDate: '2024-01-10',
    quantity: 1,
    status: 'ended' as const
  }
];

type TicketStatus = 'all' | 'upcoming' | 'ended';

export function CustomerTickets() {
  const [statusFilter, setStatusFilter] = useState<TicketStatus>('all');

  const filteredTickets = purchasedTickets.filter(ticket => 
    statusFilter === 'all' ? true : ticket.status === statusFilter
  );

  const tickets = mockEvents.filter(event => 
    filteredTickets.some(ticket => ticket.eventId === event.id)
  ).map(event => ({
    ...event,
    ticket: filteredTickets.find(ticket => ticket.eventId === event.id)!
  }));

  return (
    <DashboardLayout type="customer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">My Tickets</h1>
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as TicketStatus)}
              className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 
                       bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">All Tickets</option>
              <option value="upcoming">Upcoming Events</option>
              <option value="ended">Past Events</option>
            </select>
          </div>
        </div>
        
        {tickets.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No tickets found for the selected filter.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tickets.map(({ ticket, ...event }) => (
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
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      ticket.status === 'upcoming'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
                    }`}>
                      {ticket.status === 'upcoming' ? 'Upcoming' : 'Ended'}
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
                      {ticket.quantity}x {ticket.ticketType} Ticket{ticket.quantity !== 1 ? 's' : ''}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <button
                      className="w-full py-2 bg-primary-600 text-white rounded-md 
                               hover:bg-primary-700 transition-colors"
                    >
                      View Ticket Details
                    </button>
                    {ticket.status === 'ended' && (
                      <button
                        className="w-full py-2 border border-primary-600 text-primary-600 
                                 rounded-md hover:bg-primary-50 dark:hover:bg-primary-900/20 
                                 transition-colors"
                      >
                        Write a Review
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}