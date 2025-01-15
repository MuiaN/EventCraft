import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../store/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  userType?: 'customer' | 'organizer';
}

export function ProtectedRoute({ children, userType }: ProtectedRouteProps) {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (userType && user.type !== userType) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}