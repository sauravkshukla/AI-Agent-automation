"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonGroupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    const title = titleRef.current
    const subtitle = subtitleRef.current
    const buttonGroup = buttonGroupRef.current

    if (hero && title && subtitle && buttonGroup) {
      // Add reveal animation classes
      title.classList.add("opacity-0", "translate-y-10")
      subtitle.classList.add("opacity-0", "translate-y-10")
      buttonGroup.classList.add("opacity-0", "translate-y-10")

      // Trigger animations with delay
      setTimeout(() => {
        title.classList.add("transition-all", "duration-1000", "ease-out")
        title.classList.remove("opacity-0", "translate-y-10")

        setTimeout(() => {
          subtitle.classList.add("transition-all", "duration-1000", "ease-out")
          subtitle.classList.remove("opacity-0", "translate-y-10")

          setTimeout(() => {
            buttonGroup.classList.add("transition-all", "duration-1000", "ease-out")
            buttonGroup.classList.remove("opacity-0", "translate-y-10")
          }, 300)
        }, 300)
      }, 300)
    }
  }, [])

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-b from-transparent to-black/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-gray-700 bg-gray-800/50 backdrop-blur-sm">
            <p className="text-sm font-medium text-gray-300">
              <span className="text-cyan-400">Next-Generation</span> AI Solutions for Business
            </p>
          </div>
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-300 to-purple-400"
          >
            Empower Your Business with Advanced AI
          </h1>
          <p ref={subtitleRef} className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Our suite of AI-powered tools automates and enhances your HR, sales, data analysis, and customer feedback
            processes with cutting-edge technology.
          </p>
          <div ref={buttonGroupRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-lg w-full sm:w-auto">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-gray-700 text-white hover:bg-gray-800 px-8 py-6 text-lg rounded-lg w-full sm:w-auto"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-20">
        <div className="absolute inset-0 grid grid-cols-12 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-full w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-12 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          ))}
        </div>
      </div>
    </div>
  )
}
