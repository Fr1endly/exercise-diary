import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import type { Exercise } from '@/types'
import Layout from '@/components/ui/layout'

export const Route = createFileRoute('/exercise')({
    component: ExercisePage,
})


function ExercisePage() {
    const [exercise, setExercise] = useState<Exercise | null>(null)

    return (
        <Layout
            slot1={
                <div className="flex-1 w-full">
                    <h1 className="text-xl">Exercise Details</h1>

                    {exercise ? (
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold">{exercise.name}</h2>
                            <div className="grid gap-4">
                                {exercise.sets.map((setGroup, groupIndex) => (
                                    <div key={groupIndex} className="border p-4 rounded-lg">
                                        <h3 className="text-lg font-semibold mb-2">Set Group {groupIndex + 1}</h3>
                                        <div className="space-y-2">
                                            {setGroup.map((set, setIndex) => (
                                                <div key={setIndex} className="flex items-center gap-4">
                                                    <span>Set {set.number}</span>
                                                    <span>{set.weight} kg</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-8">
                            <p>No exercise selected</p>
                        </div>
                    )}
                </div>
            }
        >

        </Layout>
    )
}
