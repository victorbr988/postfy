import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex h-28 w-full rounded-md border border-postfy-200 px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-postfy-800/50 focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-postfy-800 dark:bg-postfy-900 bg-postfy-100 dark:placeholder:text-postfy-200/50 dark:text-postfy-200 text-postfy-800 focus-visible:ring-postfy-200 dark:focus-visible:ring-postfy-800",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
