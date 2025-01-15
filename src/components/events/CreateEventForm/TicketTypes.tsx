import { type ChangeEvent } from 'react';
import { Ticket, Plus, Trash2 } from 'lucide-react';
import { type TicketType } from '../../../types/event';

interface TicketTypesProps {
  tickets: TicketType[];
  onAddTicket: () => void;
  onRemoveTicket: (index: number) => void;
  onTicketChange: (index: number, e: ChangeEvent<HTMLInputElement>) => void;
}

export function TicketTypes({
  tickets,
  onAddTicket,
  onRemoveTicket,
  onTicketChange,
}: TicketTypesProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Ticket Types</h3>
        <button
          type="button"
          onClick={onAddTicket}
          className="flex items-center gap-2 px-4 py-2 text-sm bg-primary-600 text-white rounded-md 
                   hover:bg-primary-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Ticket Type
        </button>
      </div>

      <div className="space-y-4">
        {tickets.map((ticket, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg space-y-4"
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Ticket className="w-4 h-4" />
                Ticket Type {index + 1}
              </span>
              <button
                type="button"
                onClick={() => onRemoveTicket(index)}
                className="p-1 text-red-600 hover:bg-red-100 dark:hover:bg-red-900 rounded-full"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={ticket.name}
                  onChange={(e) => onTicketChange(index, e)}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 
                           bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500"
                  placeholder="e.g., Regular, VIP"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Price (KES)</label>
                <input
                  type="number"
                  name="price"
                  value={ticket.price}
                  onChange={(e) => onTicketChange(index, e)}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 
                           bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500"
                  min="0"
                  step="100"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={ticket.quantity}
                  onChange={(e) => onTicketChange(index, e)}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 
                           bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500"
                  min="1"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <input
                  type="text"
                  name="description"
                  value={ticket.description}
                  onChange={(e) => onTicketChange(index, e)}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 
                           bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500"
                  placeholder="What's included with this ticket?"
                  required
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}