import { Event } from '../../types/event';
import { EventFilters } from './EventFilters';
import { EventGrid } from './EventGrid';
import { useEventSearch } from '../../hooks/useEventSearch';

interface EventsSectionProps {
  events: Event[];
}

export function EventsSection({ events }: EventsSectionProps) {
  const { search, setSearch, category, setCategory, filteredEvents } = useEventSearch(events);

  return (
    <div className="space-y-8">
      <EventFilters
        search={search}
        category={category}
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
      />
      
      {filteredEvents.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">
            No events found matching your criteria.
          </p>
        </div>
      ) : (
        <EventGrid events={filteredEvents} />
      )}
    </div>
  );
}