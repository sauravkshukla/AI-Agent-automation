"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Feature } from "@/lib/types"

interface FeatureSectionProps {
  feature: Feature
  reversed?: boolean
  id: string
}

export default function FeatureSection({ feature, reversed = false, id }: FeatureSectionProps) {
  return (
    <section id={id} className="py-16 scroll-mt-20">
      <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-12 items-center", reversed && "md:flex-row-reverse")}>
        <div className={cn("order-2", reversed ? "md:order-2" : "md:order-1")}>
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full border border-gray-700 bg-gray-800/50 backdrop-blur-sm">
              <p className="text-sm font-medium text-gray-300">
                <span className="text-cyan-400">{feature.label}</span>
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              {feature.title}
            </h2>
            <p className="text-lg text-gray-300">{feature.description}</p>
            <ul className="space-y-3">
              {feature.bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                    <span className="h-2 w-2 rounded-full bg-white"></span>
                  </div>
                  <span className="text-gray-300">{point}</span>
                </li>
              ))}
            </ul>
            {feature.actionLink && (
              <Button
                className="mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white"
                onClick={() => window.open(feature.actionLink, "_blank")}
              >
                {feature.actionText || "Try Now"}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
        <div className={cn("order-1", reversed ? "md:order-1" : "md:order-2")}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2xl blur-xl"></div>
            <div className="relative aspect-video overflow-hidden rounded-xl border border-gray-800 bg-gray-900">
              <img src={`/images/${id}.png`} alt={feature.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">
                  {feature.shortDescription || feature.description.substring(0, 80) + "..."}
                </p>
              </div>
              <div className="absolute top-4 right-4">{feature.icon}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
