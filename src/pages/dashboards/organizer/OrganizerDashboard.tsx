import { DashboardLayout } from '../../../components/layouts/DashboardLayout';
import { BarChart3, Calendar, Ticket, Users } from 'lucide-react';
import { mockEvents } from '../../../data/mockEvents';

export function OrganizerDashboard() {
  const events = mockEvents;
  const stats = {
    totalEvents: events.length,
    totalTickets: events.reduce((acc, event) => 
      acc + event.ticketTypes.reduce((sum, ticket) => sum + ticket.quantity, 0), 0
    ),
    totalRevenue: events.reduce((acc, event) => 
      acc + event.ticketTypes.reduce((sum, ticket) => sum + (ticket.price * ticket.quantity), 0), 0
    ),
    totalAttendees: 0,
  };

  return (
    <DashboardLayout type="organizer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <StatCard
            icon={Calendar}
            label="Total Events"
            value={stats.totalEvents.toString()}
          />
          <StatCard
            icon={Ticket}
            label="Total Tickets"
            value={stats.totalTickets.toString()}
          />
          <StatCard
            icon={Users}
            label="Total Attendees"
            value={stats.totalAttendees.toString()}
          />
          <StatCard
            icon={BarChart3}
            label="Total Revenue"
            value={`KES ${stats.totalRevenue.toLocaleString()}`}
          />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">My Events</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b dark:border-gray-700">
                    <th className="pb-3">Event</th>
                    <th className="pb-3">Date</th>
                    <th className="pb-3">Tickets Sold</th>
                    <th className="pb-3">Revenue</th>
                    <th className="pb-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event) => (
                    <tr key={event.id} className="border-b dark:border-gray-700">
                      <td className="py-4">{event.title}</td>
                      <td className="py-4">{new Date(event.startDate).toLocaleDateString()}</td>
                      <td className="py-4">0/100</td>
                      <td className="py-4">KES 0</td>
                      <td className="py-4">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
}

function StatCard({ icon: Icon, label, value }: StatCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        <Icon className="w-8 h-8 text-primary-600" />
      </div>
    </div>
  );
}