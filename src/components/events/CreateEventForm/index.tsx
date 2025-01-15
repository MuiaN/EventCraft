import { useState, type ChangeEvent } from 'react';
import { type Event, type EventCategory, type TicketType } from '../../../types/event';
import { BasicInfo } from './BasicInfo';
import { TicketTypes } from './TicketTypes';

const DEFAULT_TICKET: TicketType = {
  id: '',
  name: '',
  price: 0,
  quantity: 1,
  description: '',
};

export function CreateEventForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '' as EventCategory,
    location: '',
    startDate: '',
    endDate: '',
    imageUrl: '',
  });

  const [tickets, setTickets] = useState<TicketType[]>([{ ...DEFAULT_TICKET }]);

  const handleBasicInfoChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTicket = () => {
    setTickets((prev) => [...prev, { ...DEFAULT_TICKET }]);
  };

  const handleRemoveTicket = (index: number) => {
    setTickets((prev) => prev.filter((_, i) => i !== index));
  };

  const handleTicketChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTickets((prev) =>
      prev.map((ticket, i) =>
        i === index
          ? {
              ...ticket,
              [name]: name === 'price' || name === 'quantity' ? Number(value) : value,
            }
          : ticket
      )
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', { ...formData, tickets });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-8">
      <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-6">Event Details</h2>
        <BasicInfo {...formData} onChange={handleBasicInfoChange} />
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg p-6">
        <TicketTypes
          tickets={tickets}
          onAddTicket={handleAddTicket}
          onRemoveTicket={handleRemoveTicket}
          onTicketChange={handleTicketChange}
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 
                   transition-colors focus:ring-2 focus:ring-primary-500"
        >
          Create Event
        </button>
      </div>
    </form>
  );
}