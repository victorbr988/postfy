"use client"

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes"

interface IProviderProps {
  children: ReactNode
}

export function Provider({ children }: IProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      { children }
    </ThemeProvider>
  )
}