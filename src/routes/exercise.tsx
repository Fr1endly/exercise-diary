import { createFileRoute } from '@tanstack/react-router'
import Layout from '@/components/ui/layout'

export const Route = createFileRoute('/exercise')({
    component: ExercisePage,
})


function ExercisePage() {
    return (
        <Layout
            slot1={
                <div className="flex-1 w-full">
                    <h1 className="text-xl">Exercise Details</h1>

                    <div className="text-center py-8">
                        <p>No exercise selected</p>
                    </div>
                </div>
            }
        >

        </Layout>
    )
}
