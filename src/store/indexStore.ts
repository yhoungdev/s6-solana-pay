import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Profile {
  name?: string;
  age?: number;
  email?: string;

}

interface ProfileState {
  profile: Profile;
  setProfile: (profile: Profile) => void;
  updateProfile: (profile: Partial<Profile>) => void;
}

const useProfile = create<ProfileState>()(
  persist(
    (set) => ({
      profile: {},
      setProfile: (profile) => set(() => ({ profile })),
      updateProfile: (profile) =>
        set((state) => ({ profile: { ...state.profile, ...profile } })),
    }),
    {
      name: 'profile-storage', 
      getStorage: () => localStorage, 
    }
  )
);

export { useProfile };
