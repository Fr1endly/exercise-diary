import Layout from '@/components/ui/layout'
import { createFileRoute } from '@tanstack/react-router'
import { Separator } from '@radix-ui/react-separator';
import type { Exercise } from '@/types';
export const Route = createFileRoute('/workout')({
    component: WorkoutPage,
})

const exerciseData: Exercise = {
    name: "Lat pulldown",
    sets: [
        [
            {
                number: 1,
                weight: 50
            },
            {
                number: 2,
                weight: 50
            },
            {
                number: 3,
                weight: 50
            },
            {
                number: 4,
                weight: 50
            },
            {
                number: 5,
                weight: 50
            }
        ],
        [
            {
                number: 1,
                weight: 50
            },
            {
                number: 2,
                weight: 50
            },
            {
                number: 3,
                weight: 50
            },
            {
                number: 4,
                weight: 50
            },
            {
                number: 5,
                weight: 50
            }
        ],
        [
            {
                number: 1,
                weight: 50
            },
            {
                number: 2,
                weight: 50
            },
            {
                number: 3,
                weight: 50
            },
            {
                number: 4,
                weight: 50
            },
            {
                number: 5,
                weight: 50
            }
        ],
        [
            {
                number: 1,
                weight: 50
            },
            {
                number: 2,
                weight: 50
            },
            {
                number: 3,
                weight: 50
            },
            {
                number: 4,
                weight: 50
            },
            {
                number: 5,
                weight: 50
            }
        ],
        [
            {
                number: 1,
                weight: 50
            },
            {
                number: 2,
                weight: 50
            },
            {
                number: 3,
                weight: 50
            },
            {
                number: 4,
                weight: 50
            },
            {
                number: 5,
                weight: 50
            }
        ],
        [
            {
                number: 1,
                weight: 50
            },
            {
                number: 2,
                weight: 50
            },
            {
                number: 3,
                weight: 50
            },
            {
                number: 4,
                weight: 50
            },
            {
                number: 5,
                weight: 50
            }
        ],
    ],
}
const workoutData = [
    {
        id: 1,
        name: "Fullbody + arms",
        description: "",
        days: [
            {
                id: 1,
                name: "Fullbody",
                exercises: [exerciseData]
            }
        ]
    }
]

interface TitleSlotProps {
    title: string
    attributesDict: Record<string, any>
    className?: string
}

const TitleSlot = ({ title, attributesDict, className }: TitleSlotProps) => {
    return (
        <div className={className ?? 'w-full z-10 h-full '}>
            <h1 className='text-xl'>{title}</h1>
            {attributesDict && Object.keys(attributesDict).map((key) => (
                <>
                    <div key={key} className='text-xl flex justify-between items-end pt-5 font-main '>
                        <span className='font-bold'>{key}:</span>
                        <span className='text-3xl shadow-lg'>
                            {attributesDict[key]}
                        </span>
                    </div>
                    <Separator className="bg-neutral-300" orientation="horizontal" />
                </>
            ))}
        </div>
    )
}

interface MainSlotProps {
    exercise: Exercise | null
    className?: string
}

const MainSlot = ({ exercise, className }: MainSlotProps) => {
    return (
        <div className={className ?? 'flex-1 w-full'}>
            <h3 className='text-lg px-2'>Exercises</h3>
            {exercise ? (
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold px-4 pb-4">{exercise.name}</h2>
                    <div className="grid gap-4">
                        {exercise.sets.map((setGroup, groupIndex) => (
                            <div key={groupIndex} className="border p-4 rounded-xs">
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
    )
}

function WorkoutPage() {
    const data = workoutData[0]

    return (
        <Layout
            slot1={
                <TitleSlot
                    title={data.name}
                    attributesDict={{ "Days": data.days.length, "Exercises": data.days[0].exercises.length }}
                />
            }
            slot2={
                <MainSlot exercise={data.days[0].exercises[0]} />
            }
        >
        </Layout>
    )
}
