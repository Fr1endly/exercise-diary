
import type { ReactNode } from "react"
import { Separator } from "@/components/ui/separator"
import { Link } from "@tanstack/react-router"


interface LayoutProps {
    slot1?: ReactNode
    slot2?: ReactNode
    className?: string
}

interface HeaderProps {
    children: ReactNode
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
                <div className="cursor-pointer">Calendar</div>
                <Separator className="bg-neutral-950" orientation="vertical" />
                <div className="cursor-pointer">Share</div>
                <Separator className="bg-neutral-950" orientation="vertical" />
            </div>
            <Separator className="mb-3 bg-neutral-950" />
        </div>
    )
}

const Layout = ({ slot1, slot2, className = '' }: LayoutProps) => {

    return (
        <div className="h-screen w-full flex flex-col items-center justify-around bg-slate-200 pb-4 px-6 ">
            <Header />
            <div className={`w-full h-full rounded-lg bg-neutral-800 text-neutral-200 
                      font-display flex items-center justify-center flex-col gap-4 overflow-scroll
                      p-6 font-bold ${className}`}
            >
                {slot1 && <div className="w-full">{slot1}</div>}
                {slot2 && <div className="w-full flex-1">{slot2}</div>}
            </div>
        </div>
    )
}

export default Layout