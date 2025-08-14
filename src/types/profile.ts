import type { Workout } from "."

export interface Profile {
    name: string
    email: string
    units: "metric" | "imperial"
    activeWorkout: Workout | null
}