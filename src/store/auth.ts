import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type UserType = 'customer' | 'organizer';

interface User {
  id: string;
  email: string;
  name: string;
  type: UserType;
}

interface AuthStore {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      logout: () => {
        localStorage.removeItem('auth-storage');
        set({ user: null });
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

// Clear any existing auth data on initial load
if (typeof window !== 'undefined') {
  localStorage.removeItem('auth-storage');
}