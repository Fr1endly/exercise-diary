import { create } from 'zustand'
import type { Workout, Profile } from '@/types'
import { mockWorkouts } from '@/lib/mock-data';

type StoreState = {
    workouts: Workout[];
    profile: Profile;
    setWorkouts: (workouts: Workout[]) => void;
    setProfile: (profile: Profile) => void;
};

const useStore = create<StoreState>((set) => ({
    workouts: mockWorkouts,
    profile: {
        name: "",
        email: "",
        units: "metric",
        activeWorkout: null,
    },
    setWorkouts: (workouts: Workout[]) => set({ workouts }),
    setProfile: (profile: Profile) => set({ profile }),
}));

export default useStore