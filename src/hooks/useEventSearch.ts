import { useState, useMemo } from 'react';
import { Event, EventCategory } from '../types/event';

export function useEventSearch(events: Event[]) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<EventCategory | ''>('');

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesSearch = search === '' || 
        event.title.toLowerCase().includes(search.toLowerCase()) ||
        event.description.toLowerCase().includes(search.toLowerCase()) ||
        event.location.toLowerCase().includes(search.toLowerCase());

      const matchesCategory = category === '' || event.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [events, search, category]);

  return {
    search,
    setSearch,
    category,
    setCategory,
    filteredEvents,
  };
}