import { useRef, useState, useCallback, useEffect } from "react"
import { debounce, toInteger } from 'lodash'
import { motion } from 'motion/react'



const _excerciseData = {
    name: "Lat pulldown",
    sets: 3,
    reps: [
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
    ]
}



const findSmallestFactor = (num: number): number => {
    if (num <= 1) return 1;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return i;
        }
    }

    return num; // If no factors found, number is prime
}

const buildNums = (middleNum: number): number[] => {
    const minFactor = findSmallestFactor(middleNum)

    let num = middleNum
    const head = Array.from(
        {
            length: 4
        },
        (_, i) => {
            num = num - minFactor
            return (num)
        }
    )
    let num2 = middleNum
    const tail = Array.from(
        {
            length: 5
        },
        (_, i) => {
            num2 = num2 + minFactor
            return (num2)
        }
    )



    return [...head.reverse(), middleNum, ...tail]
}

interface DragInputProps {
    repWieght: number
}
export default ({ repWieght }: DragInputProps) => {
    const [nums, setNums] = useState(buildNums(repWieght))

    const containerRef = useRef<HTMLDivElement>(null)
    const targetRef = useRef<HTMLDivElement>(null)
    const [heightPercent, setHeightPercent] = useState(50)
    const [isDragging, setIsDragging] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(5)
    const [selectedNumber, setSelectedNumber] = useState(nums[5])
    const [excerciseData, setExerciseData] = useState(_excerciseData)

    useEffect(() => {
        console.log(nums)
    }, [nums])


    const debouncedSetDragging = useCallback(
        debounce(() => {
            setIsDragging(false)
        }, 300),
        []
    )

    const handleDrag = (_event: MouseEvent | TouchEvent, info: { point: { x: number; y: number } }) => {
        setIsDragging(true)
        if (!containerRef.current) return
        const containerRect = containerRef.current.getBoundingClientRect()
        // Calculate how far up the draggable is, relative to the container
        const maxHeight = containerRect.height
        // Y=0 is top, so invert: higher up = bigger percent
        let y = info.point.y - containerRect.top
        let percent = 100 - Math.min(Math.max((y / maxHeight) * 100, 0), 100)
        setHeightPercent(percent)
        // setIsDragging(false)

        debouncedSetDragging()
    }

    useEffect(() => {
        let index = Math.floor(toInteger(heightPercent.toPrecision(1)) / nums.length - 1)
        if (index < 0) index = 0
        console.log("PERCENTAGE: ", heightPercent, " \nfloored", Math.floor(heightPercent))
        console.log("INDEX: ", index)
        setSelectedIndex(index)
        setSelectedNumber(nums[index])
    }, [heightPercent])


    return (
        <>
            <div className='text-1xl uppercase font-light flex justify-end items-end gap-2'>
                <div className='text-5xl p-2 font-main h-[300px] flex flex-col justify-center w-16'>
                    <motion.div
                        initial={{ y: 10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.span
                            initial={{ y: -10 }}
                            animate={{ y: 0 }}
                            exit={{ y: 10 }}
                            transition={{ duration: 0.5 }}
                        >
                            {selectedNumber}
                        </motion.span>
                    </motion.div>
                </div>

                <div className='h-[300px] w-10 flex flex-col-reverse justify-around items-end -mr-3  border-transparent relative'>
                    {nums.map((i, index) =>
                        <span
                            className='flex justify-center items-start w-full'
                            key={index}
                            style={{
                                height: `${nums.length}%`
                            }}
                        >
                            <div className="text-xs">{i}</div>
                            {/* <span className='w-full h-[0.5px] bg-gray-300' /> */}
                        </span>
                    )}
                </div>
                <motion.div
                    ref={containerRef}
                    className='h-[300px] w-[30px] bg-gray-200 flex border-neutral-100 border-[1px]
                      flex-col justify-center items-center relative rounded-r-xs'
                >
                    <motion.div
                        drag
                        ref={targetRef}
                        dragMomentum={false}
                        dragConstraints={containerRef}
                        onDrag={handleDrag}
                        className='w-[105%]  relative z-10 rounded-lg py-5 '
                        style={{
                            border: isDragging ? '1px dotted #262626' : ""
                            // border: '1px dotted #262626'
                        }}
                        layout
                        transition={{
                            duration: 1
                        }}
                    />

                    <motion.div className="w-full bg-gradient-to-t from-sky-300 to-blue-400 rounded-r-xs absolute bottom-0"
                        animate={{
                        }}
                        transition={{
                            duration: 0.001
                        }}
                        layout
                        style={{
                            height: heightPercent + "%"
                        }}
                    />
                </motion.div>
            </div>
        </>
    )
}