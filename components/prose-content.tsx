import type React from "react"
import { cn } from "@/lib/utils"

interface ProseContentProps {
  children: React.ReactNode
  className?: string
}

export function ProseContent({ children, className }: ProseContentProps) {
  return <div className={cn("prose-content", className)}>{children}</div>
}

// Add the styles using Tailwind's @apply
// This component would be used to wrap content that needs prose styling
// Example: <ProseContent>{htmlContent}</ProseContent>

