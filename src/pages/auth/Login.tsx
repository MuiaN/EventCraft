import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Info } from 'lucide-react';
import { useAuthStore } from '../../store/auth';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
        name: 'John Doe',
        type: email.includes('organizer') ? 'organizer' : 'customer',
      } as const;

      setUser(mockUser);
      navigate(mockUser.type === 'organizer' ? '/dashboard/organizer' : '/dashboard/customer');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Welcome back</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Sign in to your account</p>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
            <div className="text-sm text-blue-600 dark:text-blue-400">
              <p className="font-medium mb-2">Demo Credentials:</p>
              <p className="mb-1">
                <strong>Customer:</strong> customer@example.com
              </p>
              <p>
                <strong>Organizer:</strong> organizer@example.com
              </p>
              <p className="mt-2 text-xs">
                Any password will work for the demo
              </p>
            </div>
          </div>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-md text-sm">
              {error}
            </div>
          )}

          <div className="space-y-4">
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
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm">
                Remember me
              </label>
            </div>
            <Link
              to="/forgot-password"
              className="text-sm text-primary-600 hover:text-primary-500"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-primary-600 text-white rounded-lg 
                     hover:bg-primary-700 focus:ring-2 focus:ring-primary-500"
          >
            Sign in
          </button>

          <p className="text-center text-sm">
            Don't have an account?{' '}
            <Link to="/signup" className="text-primary-600 hover:text-primary-500">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}