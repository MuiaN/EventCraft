import { CreateEventForm } from '../components/events/CreateEventForm';

export function CreateEvent() {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Create New Event</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Fill in the details below to create your event
          </p>
        </div>
        <CreateEventForm />
      </div>
    </div>
  );
}