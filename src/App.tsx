import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { EventsSection } from './components/events/EventsSection';
import { CreateEvent } from './pages/CreateEvent';
import { EventDetails } from './pages/EventDetails';
import { Login } from './pages/auth/Login';
import { SignUp } from './pages/auth/SignUp';
import { ForgotPassword } from './pages/auth/ForgotPassword';
import { CustomerDashboard } from './pages/dashboards/customer/CustomerDashboard';
import { CustomerTickets } from './pages/dashboards/customer/CustomerTickets';
import { CustomerReviews } from './pages/dashboards/customer/CustomerReviews';
import { CustomerSettings } from './pages/dashboards/customer/CustomerSettings';
import { OrganizerDashboard } from './pages/dashboards/organizer/OrganizerDashboard';
import { OrganizerEvents } from './pages/dashboards/organizer/OrganizerEvents';
import { OrganizerAttendees } from './pages/dashboards/organizer/OrganizerAttendees';
import { OrganizerAnalytics } from './pages/dashboards/organizer/OrganizerAnalytics';
import { OrganizerSettings } from './pages/dashboards/organizer/OrganizerSettings';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { useThemeStore } from './store/theme';
import { useEffect } from 'react';
import { mockEvents } from './data/mockEvents';

export function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <EventsSection events={mockEvents} />
            </main>
          } />
          
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          {/* Customer Dashboard Routes */}
          <Route
            path="/dashboard/customer"
            element={
              <ProtectedRoute userType="customer">
                <CustomerDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/customer/tickets"
            element={
              <ProtectedRoute userType="customer">
                <CustomerTickets />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/customer/reviews"
            element={
              <ProtectedRoute userType="customer">
                <CustomerReviews />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/customer/settings"
            element={
              <ProtectedRoute userType="customer">
                <CustomerSettings />
              </ProtectedRoute>
            }
          />
          
          {/* Organizer Dashboard Routes */}
          <Route
            path="/dashboard/organizer"
            element={
              <ProtectedRoute userType="organizer">
                <OrganizerDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/organizer/events"
            element={
              <ProtectedRoute userType="organizer">
                <OrganizerEvents />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/organizer/attendees"
            element={
              <ProtectedRoute userType="organizer">
                <OrganizerAttendees />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/organizer/analytics"
            element={
              <ProtectedRoute userType="organizer">
                <OrganizerAnalytics />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/organizer/settings"
            element={
              <ProtectedRoute userType="organizer">
                <OrganizerSettings />
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/create"
            element={
              <ProtectedRoute userType="organizer">
                <CreateEvent />
              </ProtectedRoute>
            }
          />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}