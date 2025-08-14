import { createFileRoute } from '@tanstack/react-router'
import '../App.css'
import { useEffect, useState } from 'react'
import Layout from '@/components/ui/layout'
import useStore from '@/hooks/useStore'
import { mockWorkouts } from '@/lib/mock-data'
import Plus from '@/components/icons/Plus'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import {
  Card,
  CardContent,
} from "@/components/ui/card"

import { type CarouselApi } from "@/components/ui/carousel"
import { Button } from '@/components/ui/button'
import { Separator } from '@radix-ui/react-separator'
import type { Workout } from '@/types/workout'

export const Route = createFileRoute('/')({
  component: App,
})

interface MainSectionProps {
  data?: typeof mockWorkouts
}

const MainSection = ({ data }: MainSectionProps) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  // const activeWorkout = useStore(state => state.profile.activeWorkout)

  const setActiveWorkout = (workout: Workout) => {
    useStore.setState({ profile: { ...useStore.getState().profile, activeWorkout: workout } })
  }

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const handleClick = () => {
    if (!data) return
    setActiveWorkout(data[current - 1])
  }

  if (!data) {
    return (
      <div className='w-full h-full flex justify-center items-center'>
        <div className="font-main font-semibold text-lg text-neutral-100 flex flex-col justify-around items-center w-full h-full">
          <div className="flex-1" />
          <div className='flex-1 mb-7 flex flex-col justify-center gap-10 items-center'>
            <span>
              no workouts found
            </span>
            <div className='rounded-full p-3 border-2 border-white/40'>
              <Plus className='' />
            </div>
          </div>

        </div>
      </div>
    )
  }

  return (
    <div className='w-full h-full flex flex-col justify-start items-center font-main py-24'>
      <h2 className="font-display text-2xl mb-4 text-neutral-50">select workout</h2>
      <Carousel setApi={setApi} className="w-full px-10">
        <CarouselContent className='pb-10 px-1.5'>
          {data.map((w, index) => (
            <CarouselItem key={index}>
              <Card className="border-0 bg-zinc-950 rounded-xs shadow-md shadow-slate-900">
                <CardContent className="flex flex-col aspect-square items-start justify-start gap-6 p-6 relative">
                  <span className="text-2xl font-semibold text-neutral-100">{w.name}</span>
                  <span className="text-sm font-medium text-neutral-200">{w.description}</span>
                  <div className="w-full text-neutral-100 flex-1 flex justify-start items-start">
                    <span className="text-lg font-semibold">days per week: <span className=" font-medium">{w.days.length}</span></span>
                  </div>

                  <div className='absolute -bottom-5 right-2 font-display text-neutral-300 text-sm'>
                    {current}/{count}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className='bg-slate-900' />
        <CarouselNext className='bg-slate-900' /> */}
      </Carousel>
      <Separator className="bg-neutral-100 w-3/4" orientation="horizontal" />
      <div className='flex-1 flex justify-center items-end'>
        <Button
          className="bg-slate-900 text-neutral-100 shadow-md/30 inset-shadow-sm/30 inset-shadow-slate-800 px-8 py-5 font-display"
          onClick={handleClick}
        >
          select
        </Button>
      </div>

      {/* <div className="h-[100px]"/> */}
    </div>
  )
}


function App() {
  // const data = undefined
  const workouts = useStore(state => state.workouts)

  return (
    <Layout
      slot1={
        <MainSection data={workouts} />
      }

    >
    </Layout>

  )
}
