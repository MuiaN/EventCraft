import { type TicketType } from '../../types/event';
import { formatCurrency } from '../../lib/currency';

interface TicketCardProps {
  ticket: TicketType;
  onSelect: (ticket: TicketType) => void;
}

export function TicketCard({ ticket, onSelect }: TicketCardProps) {
  return (
    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold">{ticket.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{ticket.description}</p>
        </div>
        <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
          {formatCurrency(ticket.price)}
        </span>
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {ticket.quantity} tickets available
        </span>
        <button
          onClick={() => onSelect(ticket)}
          className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 
                   transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={ticket.quantity === 0}
        >
          {ticket.quantity === 0 ? 'Sold Out' : 'Select'}
        </button>
      </div>
    </div>
  );
}