export interface Workout {
  id: number;
  name: string;
  description: string;
  days: Day[];
}

export interface Day {
  id: number;
  name: string;
  exercises: Exercise[];
}

export interface Exercise {
  name: string;
  sets: Array<Array<Set>>;
}

export interface Set {
  number: number;
  weight: number;
  reps?: number;
  completed?: boolean;
  notes?: string;
}