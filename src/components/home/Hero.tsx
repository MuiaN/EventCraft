import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Ticket, Star, Shield } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800 opacity-90" />
      <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Your Premier Event Platform in Kenya
            </h1>
            <p className="text-lg lg:text-xl text-white/90 max-w-lg">
              Join thousands of people discovering and attending the best events across Kenya. From tech conferences to music festivals, we've got you covered.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/signup"
                className="px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold 
                         hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/events"
                className="px-6 py-3 bg-primary-700 text-white rounded-lg font-semibold 
                         hover:bg-primary-800 transition-colors"
              >
                Browse Events
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-2 text-white/80">
                <Shield className="w-5 h-5" />
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Ticket className="w-5 h-5" />
                <span>Instant Tickets</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Star className="w-5 h-5" />
                <span>Verified Events</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Users className="w-5 h-5" />
                <span>10K+ Users</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/10 rounded-2xl blur-2xl" />
              <div className="relative bg-white/[0.05] backdrop-blur-xl rounded-xl p-6 space-y-6">
                <div className="flex items-center gap-4">
                  <Calendar className="w-8 h-8 text-white/90" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Upcoming Events</h3>
                    <p className="text-white/80">Discover events happening near you</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-8 h-8 text-white/90" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Multiple Locations</h3>
                    <p className="text-white/80">Events across major cities</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="w-8 h-8 text-white/90" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Community</h3>
                    <p className="text-white/80">Connect with event organizers</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <p className="text-sm opacity-80">Next Popular Event</p>
                      <p className="font-semibold mt-1">Tech Conference 2025</p>
                    </div>
                    <Link
                      to="/events/1"
                      className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 
                               transition-colors backdrop-blur-lg"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}