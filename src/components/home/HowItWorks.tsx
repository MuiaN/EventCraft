import { CalendarDays, Search, CreditCard, Ticket, Users, Star, Shield, Globe } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Find Events',
    description: 'Browse through a wide range of events happening across Kenya'
  },
  {
    icon: CreditCard,
    title: 'Book Tickets',
    description: 'Secure your spot with easy and safe payment options'
  },
  {
    icon: Ticket,
    title: 'Get Your Tickets',
    description: 'Receive your tickets instantly via email'
  },
  {
    icon: CalendarDays,
    title: 'Attend & Enjoy',
    description: 'Show up at the venue and have a great time'
  }
];

const features = [
  {
    icon: Shield,
    title: 'Secure Platform',
    description: 'Your payments and data are protected with bank-level security'
  },
  {
    icon: Users,
    title: 'Vibrant Community',
    description: 'Join thousands of event enthusiasts and organizers'
  },
  {
    icon: Star,
    title: 'Verified Events',
    description: 'All events are verified for authenticity and quality'
  },
  {
    icon: Globe,
    title: 'Nationwide Coverage',
    description: 'Events from all major cities across Kenya'
  }
];

export function HowItWorks() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Getting started with EventCraft is easy. Follow these simple steps to find and attend your next event.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[calc(100%-24px)] h-[2px] 
                              bg-gradient-to-r from-primary-600/50 to-primary-600/0" />
              )}
              
              <div className="relative">
                <div className="absolute -inset-4 bg-primary-100/50 dark:bg-primary-900/20 
                             rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 text-center 
                             border-2 border-primary-100 dark:border-primary-900/50 shadow-card 
                             group-hover:shadow-card-hover transition-all">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full 
                                bg-primary-50 dark:bg-primary-900/20 mb-4 group-hover:scale-110 
                                transition-transform">
                    <step.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-primary-100/50 dark:bg-primary-900/20 
                           rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 
                           border-2 border-primary-100 dark:border-primary-900/50 shadow-card 
                           group-hover:shadow-card-hover transition-all">
                <feature.icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}