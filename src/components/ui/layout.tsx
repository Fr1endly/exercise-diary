
import type { ReactNode } from "react"
import { Separator } from "@/components/ui/separator"
import { Link } from "@tanstack/react-router"
import { motion } from "motion/react"


interface LayoutProps {
    slot1?: ReactNode
    slot2?: ReactNode
    className?: string
}



export function Header() {
    return (
        <div className="text-neutral-100 font-display">
            <div className="space-y-1">
                <p className="text-muted-foreground text-xs">
                    An open-source UI workout diary.
                </p>
            </div>
            <Separator className="mt-3 bg-neutral-950" />
            <div className="flex h-5 items-center justify-between text-sm text-foreground">
                <Separator className="bg-neutral-950" orientation="vertical" />
                <Link to="/" className="cursor-pointer hover:text-neutral-400 transition-colors px-1.5">
                    Workout
                </Link>
                <Separator className="bg-neutral-950" orientation="vertical" />
                <Link to="/exercise" className="cursor-pointer hover:text-neutral-400 transition-colors px-1.5">
                    Exercise
                </Link>
                <Separator className="bg-neutral-950" orientation="vertical" />
                <div className="cursor-pointer px-1.5">Calendar</div>
                <Separator className="bg-neutral-950" orientation="vertical" />
                <div className="cursor-pointer px-1.5">Share</div>
                <Separator className="bg-neutral-950" orientation="vertical" />
            </div>
            <Separator className="mb-3 bg-neutral-950" />
        </div>
    )
}

const Layout = ({ slot1, slot2, className = '' }: LayoutProps) => {

    return (
        <div className="h-screen w-full flex flex-col items-center justify-start bg-slate-200 relative"

        >
            <Header />
            <motion.div
                className={`w-full h-full rounded-sm bg-neutral-800 text-neutral-200 relative
                            font-display flex items-center justify-start flex-col overflow-y-auto overflow-x-hidden
                            ${className}`}
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.35 }}
                transition={{
                    duration: 0.2
                }}
            >
                <div className="sticky top-0 z-10 w-full pb-10 py-5 px-1.5
                                bg-gradient-to-t from-neutral-900
                                via-stone-900 via-95% to-neutral-950 rounded-sm shadow-md mb-5"

                >
                    {slot1}
                </div>
                <div className="w-full px-4">
                    {slot2}
                </div>


                <>
                    <div className="h-60" />
                    <div className="w-full px-4 h-60 bg-neutral-950 sticky bottom-0 text-center">
                        BUTTONS
                    </div>
                </>

            </motion.div>
        </div>
    )
}

export default Layout