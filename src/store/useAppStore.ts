import { create } from 'zustand';

interface AppState {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const useAppStore = create<AppState>((set) => ({
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));

export default useAppStore;