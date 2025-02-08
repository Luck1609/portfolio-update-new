import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function Rating() {
  const [rating, setRating] = useState(2)
  const [hover, setHover] = useState(0)

  const handleRating = (value: number) => setRating(value)
  const handleMouseEnter = (value: number) => setHover(value)
  const handleMouseLeave = () => setHover(0)

  return (
    <div className="flex space-x-0.5">
      {
        Array.from(Array(5).keys()).map((id) => {
          const value = id + 1
          return (
            <span
              key={id.toString()}
              className={cn("hover:text-amber-500 text-5xl cursor-pointer", value <= (hover || rating) ? "text-amber-500" : "")}
              onMouseEnter={() => handleMouseEnter(value)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleRating(value)}
            >&#9733;</span>
          )
        }
        )
      }
    </div>
  )
}
