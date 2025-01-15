import { DashboardLayout } from '../../../components/layouts/DashboardLayout';
import { Search, ChevronDown, ChevronRight, Mail, Phone, Users } from 'lucide-react';
import { mockEvents } from '../../../data/mockEvents';
import { useState } from 'react';
import { formatDate } from '../../../lib/date';

// Mock attendees data grouped by events
const attendeesByEvent = {
  '1': [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+254 712 345 678',
      ticketType: 'VIP',
      purchaseDate: '2024-02-15',
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+254 723 456 789',
      ticketType: 'Regular',
      purchaseDate: '2024-02-16',
    },
  ],
  '2': [
    {
      id: '3',
      name: 'Alice Johnson',
      email: 'alice@example.com',
      phone: '+254 734 567 890',
      ticketType: 'VIP',
      purchaseDate: '2024-02-17',
    },
  ],
  '3': [
    {
      id: '4',
      name: 'Bob Wilson',
      email: 'bob@example.com',
      phone: '+254 745 678 901',
      ticketType: 'Early Bird',
      purchaseDate: '2024-02-18',
    },
  ],
};

export function OrganizerAttendees() {
  const [expandedEvents, setExpandedEvents] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleEvent = (eventId: string) => {
    setExpandedEvents(prev =>
      prev.includes(eventId)
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    );
  };

  const filterAttendees = (attendees: typeof attendeesByEvent[keyof typeof attendeesByEvent]) => {
    return attendees.filter(attendee =>
      attendee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      attendee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      attendee.phone.includes(searchTerm)
    );
  };

  return (
    <DashboardLayout type="organizer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Event Attendees</h1>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search attendees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 
                       bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>

        <div className="space-y-4">
          {mockEvents.map((event) => {
            const eventAttendees = attendeesByEvent[event.id] || [];
            const filteredAttendees = filterAttendees(eventAttendees);
            const isExpanded = expandedEvents.includes(event.id);

            if (searchTerm && filteredAttendees.length === 0) return null;

            return (
              <div
                key={event.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleEvent(event.id)}
                  className="w-full flex items-center justify-between p-4 hover:bg-gray-50 
                           dark:hover:bg-gray-750 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="text-left">
                      <h3 className="font-semibold">{event.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {formatDate(event.startDate)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Users className="w-5 h-5" />
                      <span>{eventAttendees.length} attendees</span>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="w-5 h-5" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="border-t border-gray-200 dark:border-gray-700">
                    {filteredAttendees.length === 0 ? (
                      <div className="p-4 text-center text-gray-600 dark:text-gray-400">
                        No attendees found
                      </div>
                    ) : (
                      <div className="divide-y divide-gray-200 dark:divide-gray-700">
                        {filteredAttendees.map((attendee) => (
                          <div
                            key={attendee.id}
                            className="p-4 hover:bg-gray-50 dark:hover:bg-gray-750"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium">{attendee.name}</h4>
                                <div className="mt-1 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                                  <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    {attendee.email}
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    {attendee.phone}
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <span className="inline-block px-2 py-1 text-xs font-medium 
                                             bg-primary-50 dark:bg-primary-900/20 
                                             text-primary-600 dark:text-primary-400 rounded-full">
                                  {attendee.ticketType}
                                </span>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                  Purchased: {new Date(attendee.purchaseDate).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}