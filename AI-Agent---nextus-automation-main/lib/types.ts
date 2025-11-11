import type { ReactNode } from "react"

export interface Feature {
  label: string
  title: string
  description: string
  shortDescription?: string
  bulletPoints: string[]
  icon: ReactNode
  actionLink?: string
  actionText?: string
}
