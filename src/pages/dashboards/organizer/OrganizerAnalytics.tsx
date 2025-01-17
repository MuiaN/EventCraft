import { DashboardLayout } from '../../../components/layouts/DashboardLayout';
import { BarChart, LineChart, AreaChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, Line, Area } from 'recharts';
import { ArrowUp, ArrowDown, TrendingUp, Users, Ticket, DollarSign } from 'lucide-react';
import { mockEvents } from '../../../data/mockEvents';

// Mock analytics data
const monthlyData = [
  { month: 'Jan', events: 2, attendees: 150, revenue: 45000 },
  { month: 'Feb', events: 3, attendees: 220, revenue: 65000 },
  { month: 'Mar', events: 4, attendees: 280, revenue: 85000 },
  { month: 'Apr', events: 3, attendees: 240, revenue: 72000 },
  { month: 'May', events: 5, attendees: 350, revenue: 105000 },
  { month: 'Jun', events: 6, attendees: 420, revenue: 126000 }
];

const categoryData = [
  { name: 'Conference', value: 35 },
  { name: 'Workshop', value: 25 },
  { name: 'Concert', value: 20 },
  { name: 'Festival', value: 15 },
  { name: 'Other', value: 5 }
];

export function OrganizerAnalytics() {
  // Calculate growth percentages
  const calculateGrowth = (current: number, previous: number) => {
    const growth = ((current - previous) / previous) * 100;
    return {
      value: Math.abs(growth).toFixed(1),
      isPositive: growth >= 0
    };
  };

  const currentMonth = monthlyData[monthlyData.length - 1];
  const previousMonth = monthlyData[monthlyData.length - 2];

  const revenueGrowth = calculateGrowth(currentMonth.revenue, previousMonth.revenue);
  const attendeesGrowth = calculateGrowth(currentMonth.attendees, previousMonth.attendees);
  const eventsGrowth = calculateGrowth(currentMonth.events, previousMonth.events);

  return (
    <DashboardLayout type="organizer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-8">Analytics</h1>
        
        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-primary-100 
                       dark:border-primary-900/50 shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Revenue</p>
                <p className="text-2xl font-semibold mt-1">
                  KES {currentMonth.revenue.toLocaleString()}
                </p>
                <div className="flex items-center mt-2">
                  {revenueGrowth.isPositive ? (
                    <ArrowUp className="w-4 h-4 text-green-500" />
                  ) : (
                    <ArrowDown className="w-4 h-4 text-red-500" />
                  )}
                  <span className={`text-sm ml-1 ${
                    revenueGrowth.isPositive ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {revenueGrowth.value}%
                  </span>
                  <span className="text-sm text-gray-500 ml-1">vs last month</span>
                </div>
              </div>
              <DollarSign className="w-12 h-12 text-primary-600 opacity-20" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-primary-100 
                       dark:border-primary-900/50 shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Attendees</p>
                <p className="text-2xl font-semibold mt-1">
                  {currentMonth.attendees.toLocaleString()}
                </p>
                <div className="flex items-center mt-2">
                  {attendeesGrowth.isPositive ? (
                    <ArrowUp className="w-4 h-4 text-green-500" />
                  ) : (
                    <ArrowDown className="w-4 h-4 text-red-500" />
                  )}
                  <span className={`text-sm ml-1 ${
                    attendeesGrowth.isPositive ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {attendeesGrowth.value}%
                  </span>
                  <span className="text-sm text-gray-500 ml-1">vs last month</span>
                </div>
              </div>
              <Users className="w-12 h-12 text-primary-600 opacity-20" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-primary-100 
                       dark:border-primary-900/50 shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Events</p>
                <p className="text-2xl font-semibold mt-1">{currentMonth.events}</p>
                <div className="flex items-center mt-2">
                  {eventsGrowth.isPositive ? (
                    <ArrowUp className="w-4 h-4 text-green-500" />
                  ) : (
                    <ArrowDown className="w-4 h-4 text-red-500" />
                  )}
                  <span className={`text-sm ml-1 ${
                    eventsGrowth.isPositive ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {eventsGrowth.value}%
                  </span>
                  <span className="text-sm text-gray-500 ml-1">vs last month</span>
                </div>
              </div>
              <Ticket className="w-12 h-12 text-primary-600 opacity-20" />
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          {/* Revenue Trend */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-primary-100 
                       dark:border-primary-900/50 shadow-card">
            <h2 className="text-lg font-semibold mb-6">Revenue Trend</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#0284c7" 
                    fill="#0284c7" 
                    fillOpacity={0.2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Event Categories */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-primary-100 
                       dark:border-primary-900/50 shadow-card">
            <h2 className="text-lg font-semibold mb-6">Event Categories</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#0284c7" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Attendance Trend */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-primary-100 
                     dark:border-primary-900/50 shadow-card">
          <h2 className="text-lg font-semibold mb-6">Attendance Trend</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="attendees" 
                  stroke="#0284c7" 
                  strokeWidth={2}
                  dot={{ fill: '#0284c7' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="events" 
                  stroke="#0ea5e9" 
                  strokeWidth={2}
                  dot={{ fill: '#0ea5e9' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}