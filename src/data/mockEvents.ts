import { Event } from '../types/event';

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Tech Conference 2025',
    description: 'Join us for the biggest tech conference in East Africa, featuring leading experts in AI, blockchain, and cloud computing.',
    startDate: '2025-03-15T09:00:00Z',
    endDate: '2025-03-17T18:00:00Z',
    location: 'KICC, Nairobi',
    category: 'conference',
    organizer: {
      id: '1',
      name: 'Tech Kenya'
    },
    ticketTypes: [
      {
        id: '1',
        name: 'Regular',
        price: 5000,
        quantity: 200,
        description: 'Standard conference access'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    title: 'Nairobi Music Festival',
    description: 'Experience the best of African music with top artists from across the continent.',
    startDate: '2025-04-20T14:00:00Z',
    endDate: '2025-04-20T23:00:00Z',
    location: 'Uhuru Gardens, Nairobi',
    category: 'festival',
    organizer: {
      id: '2',
      name: 'Events Africa'
    },
    ticketTypes: [
      {
        id: '2',
        name: 'VIP',
        price: 10000,
        quantity: 100,
        description: 'VIP access with exclusive area'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    title: 'Business Networking Summit',
    description: 'Connect with business leaders and entrepreneurs from across East Africa.',
    startDate: '2025-05-10T08:00:00Z',
    endDate: '2025-05-10T17:00:00Z',
    location: 'Radisson Blu, Nairobi',
    category: 'networking',
    organizer: {
      id: '3',
      name: 'Business Kenya'
    },
    ticketTypes: [
      {
        id: '3',
        name: 'Early Bird',
        price: 3000,
        quantity: 150,
        description: 'Early bird registration'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80'
  }
];