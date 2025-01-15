export type EventCategory = 
  | 'conference'
  | 'workshop'
  | 'concert'
  | 'festival'
  | 'ceremony'
  | 'sports'
  | 'networking'
  | 'other';

export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  category: EventCategory;
  organizer: {
    id: string;
    name: string;
  };
  ticketTypes: TicketType[];
  imageUrl: string;
}

export interface TicketType {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
}