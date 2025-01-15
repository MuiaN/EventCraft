import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User } from 'lucide-react';
import { useAuthStore } from '../../store/auth';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<'customer' | 'organizer'>('customer');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // TODO: Replace with actual API call
      const mockUser = {
        id: '1',
        email,
        name,
        type: userType,
      } as const;

      setUser(mockUser);
      navigate(userType === 'organizer' ? '/dashboard/organizer' : '/dashboard/customer');
    } catch (err) {
      setError('Failed to create account');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Create an account</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Join EventCraft today
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-md text-sm">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10 w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                           bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                           bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                           bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                I want to
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setUserType('customer')}
                  className={`p-3 text-center rounded-lg border ${
                    userType === 'customer'
                      ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20'
                      : 'border-gray-300 dark:border-gray-700'
                  }`}
                >
                  Buy Tickets
                </button>
                <button
                  type="button"
                  onClick={() => setUserType('organizer')}
                  className={`p-3 text-center rounded-lg border ${
                    userType === 'organizer'
                      ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20'
                      : 'border-gray-300 dark:border-gray-700'
                  }`}
                >
                  Organize Events
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-primary-600 text-white rounded-lg 
                     hover:bg-primary-700 focus:ring-2 focus:ring-primary-500"
          >
            Create Account
          </button>

          <p className="text-center text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-primary-600 hover:text-primary-500">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}