import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

export function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement password reset logic
    console.log('Reset password for:', email);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
        <div className="max-w-md w-full text-center">
          <h2 className="text-2xl font-bold mb-4">Check your email</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We've sent password reset instructions to {email}
          </p>
          <Link
            to="/login"
            className="text-primary-600 hover:text-primary-500"
          >
            Back to login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Reset password</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Enter your email address and we'll send you instructions to reset your password
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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

          <button
            type="submit"
            className="w-full py-3 px-4 bg-primary-600 text-white rounded-lg 
                     hover:bg-primary-700 focus:ring-2 focus:ring-primary-500"
          >
            Send Reset Instructions
          </button>

          <p className="text-center text-sm">
            Remember your password?{' '}
            <Link to="/login" className="text-primary-600 hover:text-primary-500">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}