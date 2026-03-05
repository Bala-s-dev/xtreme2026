"use client"

import { useState, useEffect } from "react"

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const targetDate = new Date("March 27, 2026 09:00:00").getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!isMounted) return (
    <div className="h-20" /> // Placeholder to prevent jump
  )

  return (
    <div className="flex gap-4 md:gap-10 justify-center items-center py-6">
      <div className="flex flex-col items-center">
        <div className="glass w-16 h-16 md:w-24 md:h-24 rounded-2xl flex items-center justify-center border-accent/30 group hover:border-accent transition-colors">
          <span className="text-2xl md:text-5xl font-black font-headline text-accent drop-shadow-[0_0_15px_rgba(0,245,255,0.4)]">
            {String(timeLeft.days).padStart(2, '0')}
          </span>
        </div>
        <span className="text-[10px] md:text-xs font-headline tracking-[0.3em] text-foreground/40 uppercase mt-3">Days</span>
      </div>
      
      <div className="text-xl md:text-3xl font-headline text-accent/20 mb-8">:</div>
      
      <div className="flex flex-col items-center">
        <div className="glass w-16 h-16 md:w-24 md:h-24 rounded-2xl flex items-center justify-center border-accent/30 group hover:border-accent transition-colors">
          <span className="text-2xl md:text-5xl font-black font-headline text-accent drop-shadow-[0_0_15px_rgba(0,245,255,0.4)]">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
        </div>
        <span className="text-[10px] md:text-xs font-headline tracking-[0.3em] text-foreground/40 uppercase mt-3">Hours</span>
      </div>

      <div className="text-xl md:text-3xl font-headline text-accent/20 mb-8">:</div>

      <div className="flex flex-col items-center">
        <div className="glass w-16 h-16 md:w-24 md:h-24 rounded-2xl flex items-center justify-center border-accent/30 group hover:border-accent transition-colors">
          <span className="text-2xl md:text-5xl font-black font-headline text-accent drop-shadow-[0_0_15px_rgba(0,245,255,0.4)]">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
        </div>
        <span className="text-[10px] md:text-xs font-headline tracking-[0.3em] text-foreground/40 uppercase mt-3">Mins</span>
      </div>

      <div className="text-xl md:text-3xl font-headline text-accent/20 mb-8">:</div>

      <div className="flex flex-col items-center">
        <div className="glass w-16 h-16 md:w-24 md:h-24 rounded-2xl flex items-center justify-center border-accent/30 group hover:border-accent transition-colors">
          <span className="text-2xl md:text-5xl font-black font-headline text-accent drop-shadow-[0_0_15px_rgba(0,245,255,0.4)]">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>
        <span className="text-[10px] md:text-xs font-headline tracking-[0.3em] text-foreground/40 uppercase mt-3">Secs</span>
      </div>
    </div>
  )
}
