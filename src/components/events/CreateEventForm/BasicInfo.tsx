import { type ChangeEvent } from 'react';
import { CalendarDays, MapPin, Type } from 'lucide-react';
import { EventCategory } from '../../../types/event';

interface BasicInfoProps {
  title: string;
  description: string;
  category: EventCategory;
  location: string;
  startDate: string;
  endDate: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export function BasicInfo({
  title,
  description,
  category,
  location,
  startDate,
  endDate,
  onChange,
}: BasicInfoProps) {
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
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">
          <span className="flex items-center gap-2">
            <Type className="w-4 h-4" />
            Event Title
          </span>
        </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={onChange}
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 
                   bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500"
          placeholder="Enter event title"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Description</label>
        <textarea
          name="description"
          value={description}
          onChange={onChange}
          rows={4}
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 
                   bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500"
          placeholder="Describe your event"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Category</label>
          <select
            name="category"
            value={category}
            onChange={onChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 
                     bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500"
            required
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Location
            </span>
          </label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={onChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 
                     bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500"
            placeholder="Event location"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            <span className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4" />
              Start Date & Time
            </span>
          </label>
          <input
            type="datetime-local"
            name="startDate"
            value={startDate}
            onChange={onChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 
                     bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            <span className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4" />
              End Date & Time
            </span>
          </label>
          <input
            type="datetime-local"
            name="endDate"
            value={endDate}
            onChange={onChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 
                     bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500"
            required
          />
        </div>
      </div>
    </div>
  );
}