"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function PartnerScroll() {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Partner logos - replace with actual partner logos
  const partners = [
    "/placeholder.svg?height=60&width=180",
    "/placeholder.svg?height=60&width=180",
    "/placeholder.svg?height=60&width=180",
    "/placeholder.svg?height=60&width=180",
    "/placeholder.svg?height=60&width=180",
    "/placeholder.svg?height=60&width=180",
    "/placeholder.svg?height=60&width=180",
    "/placeholder.svg?height=60&width=180",
  ]

  // Duplicate partners for continuous scrolling effect
  const allPartners = [...partners, ...partners]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0

    const scroll = () => {
      if (!scrollContainer) return

      scrollPosition += 0.5
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="w-full overflow-hidden">
      <div ref={scrollRef} className="flex items-center gap-8 py-4 overflow-x-hidden whitespace-nowrap">
        {allPartners.map((src, index) => (
          <div key={index} className="flex-shrink-0">
            <div className="relative h-12 w-36">
              <Image src={src || "/placeholder.svg"} alt={`Partner ${index + 1}`} fill className="object-contain" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
