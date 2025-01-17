import { type TicketType } from '../../types/event';
import { formatCurrency } from '../../lib/currency';

interface TicketCardProps {
  ticket: TicketType;
  onSelect: (ticket: TicketType) => void;
}

export function TicketCard({ ticket, onSelect }: TicketCardProps) {
  return (
    <div className="p-4 border-2 border-primary-100 dark:border-primary-900/50 rounded-lg 
                    bg-white dark:bg-gray-800 shadow-card hover:shadow-card-hover 
                    hover:border-primary-200 dark:hover:border-primary-800/50 
                    transition-all duration-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{ticket.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{ticket.description}</p>
        </div>
        <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
          {formatCurrency(ticket.price)}
        </span>
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {ticket.quantity} tickets available
        </span>
        <button
          onClick={() => onSelect(ticket)}
          className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 
                   transition-colors shadow-sm hover:shadow disabled:opacity-50 
                   disabled:cursor-not-allowed disabled:hover:shadow-none"
          disabled={ticket.quantity === 0}
        >
          {ticket.quantity === 0 ? 'Sold Out' : 'Select'}
        </button>
      </div>
    </div>
  );
}