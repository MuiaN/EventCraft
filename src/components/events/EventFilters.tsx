import { Search, Filter } from 'lucide-react';
import { EventCategory } from '../../types/event';

interface EventFiltersProps {
  search: string;
  category: EventCategory | '';
  onSearchChange: (value: string) => void;
  onCategoryChange: (category: EventCategory | '') => void;
}

export function EventFilters({
  search,
  category,
  onSearchChange,
  onCategoryChange,
}: EventFiltersProps) {
  const categories: EventCategory[] = [
    'conference',
    'workshop',
    'concert',
    'festival',
    'ceremony',
    'sports',
    'networking',
    'other',
  ];

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search events..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                   bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500"
        />
      </div>

      <div className="flex items-center gap-4 overflow-x-auto pb-2">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4" />
          <span className="text-sm font-medium">Filter by:</span>
        </div>
        <button
          onClick={() => onCategoryChange('')}
          className={`px-3 py-1 rounded-full text-sm whitespace-nowrap transition-colors
                    ${category === '' 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
        >
          All Events
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-3 py-1 rounded-full text-sm whitespace-nowrap transition-colors
                      ${category === cat 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}