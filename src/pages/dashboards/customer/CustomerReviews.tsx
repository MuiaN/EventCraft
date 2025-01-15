import { DashboardLayout } from '../../../components/layouts/DashboardLayout';
import { Star, Calendar, ThumbsUp } from 'lucide-react';
import { mockEvents } from '../../../data/mockEvents';
import { formatDate } from '../../../lib/date';

// Mock reviews data
const reviews = [
  {
    eventId: '3',
    rating: 5,
    comment: 'Amazing event! The speakers were incredibly knowledgeable and the networking opportunities were fantastic.',
    date: '2024-01-20',
    likes: 12,
    status: 'published' as const
  }
];

export function CustomerReviews() {
  return (
    <DashboardLayout type="customer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-8">My Reviews</h1>

        <div className="space-y-6">
          {reviews.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                You haven't written any reviews yet.
              </p>
            </div>
          ) : (
            reviews.map(review => {
              const event = mockEvents.find(e => e.id === review.eventId);
              if (!event) return null;

              return (
                <div
                  key={`${event.id}-review`}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">{event.title}</h3>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < review.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300 dark:text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(review.date)}
                      </div>
                      <div className="flex items-center gap-2">
                        <ThumbsUp className="w-4 h-4" />
                        {review.likes} likes
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {review.comment}
                    </p>

                    <div className="flex justify-end gap-4">
                      <button
                        className="px-4 py-2 text-primary-600 hover:text-primary-700 
                                 font-medium transition-colors"
                      >
                        Edit Review
                      </button>
                      <button
                        className="px-4 py-2 text-red-600 hover:text-red-700 
                                 font-medium transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}