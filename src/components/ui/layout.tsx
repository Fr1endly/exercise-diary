
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
                <Link to="/workout" className="cursor-pointer hover:text-neutral-400 transition-colors px-1.5">
                    Workout
                </Link>
                <Separator className="bg-neutral-950" orientation="vertical" />
                <Link to="/exercise" className="cursor-pointer hover:text-neutral-400 transition-colors px-1.5">
                    Exercise
                </Link>
                <Separator className="bg-neutral-950" orientation="vertical" />
                <Link to="/" className="cursor-pointer hover:text-neutral-400 transition-colors px-1.5">
                    Home
                </Link>
                <Separator className="bg-neutral-950" orientation="vertical" />
                <div className="cursor-pointer px-1.5">Share</div>
                <Separator className="bg-neutral-950" orientation="vertical" />
            </div>
            <Separator className="mb-3 bg-neutral-950" />

        </div>
    )
}

interface ContainerProps {
    children: ReactNode
    className?: string
}

const Container = ({ children, className }: ContainerProps) => {
    return (
        <motion.div
            className={`w-full h-full rounded-sm bg-slate-900 text-neutral-200 relative
                            font-display flex items-center justify-between flex-col overflow-y-auto overflow-x-hidden
                            ${className}`}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.35 }}
            transition={{
                duration: 0.2
            }}
        >
            {children}
            {/* <>
                <div className="h-10" />
                <div className="w-full px-4 h-10 bg-neutral-950 sticky bottom-0 z-10 text-center">
                    BUTTONS
                </div>
            </> */}

        </motion.div>
    )
}

const Layout = ({ slot1, slot2, className = '' }: LayoutProps) => {

    return (
        <div className="h-screen w-full flex flex-col items-center justify-start bg-slate-200 relative px-2 pb-1"
        >
            <Header />
            <Container className={className}>
                {slot1}
                {slot2}
            </Container>

        </div>
    )
}

export default Layout