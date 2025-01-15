import { CalendarDays, Search, CreditCard, Ticket } from 'lucide-react';

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[calc(100%-24px)] h-[2px] 
                              bg-gradient-to-r from-primary-600/50 to-primary-600/0" />
              )}
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full 
                              bg-primary-50 dark:bg-primary-900/20 mb-4 group-hover:scale-110 
                              transition-transform">
                  <step.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}