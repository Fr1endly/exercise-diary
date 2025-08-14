import type { Workout } from '../types/workout';

export const mockWorkouts: Workout[] = [
  {
    id: 1,
    name: "Beginner Full Body Program",
    description: "A balanced full-body workout program designed for beginners focusing on main compound movements.",
    days: [
      {
        id: 1,
        name: "Day 1 - Push Focus",
        exercises: [
          {
            name: "Bench Press",
            sets: [
              [
                { number: 1, weight: 45, reps: 12, completed: false },
                { number: 2, weight: 45, reps: 12, completed: false },
                { number: 3, weight: 45, reps: 10, completed: false }
              ]
            ]
          },
          {
            name: "Overhead Press",
            sets: [
              [
                { number: 1, weight: 30, reps: 10, completed: false },
                { number: 2, weight: 30, reps: 10, completed: false },
                { number: 3, weight: 30, reps: 8, completed: false }
              ]
            ]
          },
          {
            name: "Push-ups",
            sets: [
              [
                { number: 1, weight: 0, reps: 15, completed: false },
                { number: 2, weight: 0, reps: 15, completed: false },
                { number: 3, weight: 0, reps: 15, completed: false }
              ]
            ]
          }
        ]
      },
      {
        id: 2,
        name: "Day 2 - Pull Focus",
        exercises: [
          {
            name: "Barbell Rows",
            sets: [
              [
                { number: 1, weight: 65, reps: 12, completed: false },
                { number: 2, weight: 65, reps: 12, completed: false },
                { number: 3, weight: 65, reps: 10, completed: false }
              ]
            ]
          },
          {
            name: "Lat Pulldowns",
            sets: [
              [
                { number: 1, weight: 50, reps: 12, completed: false },
                { number: 2, weight: 50, reps: 12, completed: false },
                { number: 3, weight: 50, reps: 10, completed: false }
              ]
            ]
          },
          {
            name: "Face Pulls",
            sets: [
              [
                { number: 1, weight: 20, reps: 15, completed: false },
                { number: 2, weight: 20, reps: 15, completed: false },
                { number: 3, weight: 20, reps: 15, completed: false }
              ]
            ]
          }
        ]
      },
      {
        id: 3,
        name: "Day 3 - Legs Focus",
        exercises: [
          {
            name: "Squats",
            sets: [
              [
                { number: 1, weight: 85, reps: 10, completed: false },
                { number: 2, weight: 85, reps: 10, completed: false },
                { number: 3, weight: 85, reps: 8, completed: false }
              ]
            ]
          },
          {
            name: "Romanian Deadlifts",
            sets: [
              [
                { number: 1, weight: 95, reps: 10, completed: false },
                { number: 2, weight: 95, reps: 10, completed: false },
                { number: 3, weight: 95, reps: 8, completed: false }
              ]
            ]
          },
          {
            name: "Calf Raises",
            sets: [
              [
                { number: 1, weight: 45, reps: 15, completed: false },
                { number: 2, weight: 45, reps: 15, completed: false },
                { number: 3, weight: 45, reps: 15, completed: false }
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Advanced Push/Pull/Legs Split",
    description: "A high-volume program designed for intermediate to advanced lifters looking to build strength and muscle.",
    days: [
      {
        id: 1,
        name: "Heavy Push Day",
        exercises: [
          {
            name: "Bench Press",
            sets: [
              [
                { number: 1, weight: 135, reps: 5, completed: false },
                { number: 2, weight: 185, reps: 5, completed: false },
                { number: 3, weight: 225, reps: 3, completed: false },
                { number: 4, weight: 185, reps: 5, completed: false }
              ]
            ]
          },
          {
            name: "Military Press",
            sets: [
              [
                { number: 1, weight: 95, reps: 8, completed: false },
                { number: 2, weight: 95, reps: 8, completed: false },
                { number: 3, weight: 95, reps: 6, completed: false }
              ]
            ]
          }
        ]
      }
    ]
  }
];

// Helper function to get a workout by ID
export const getWorkoutById = (id: number): Workout | undefined => {
  return mockWorkouts.find(workout => workout.id === id);
};
