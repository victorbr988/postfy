"use client"

import { useTheme } from "next-themes";
import { Fragment, useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

type IThemeOptions = "light" | "dark"

export function ThemeSwitch() {
  const [mounted, setMounted] = useState<boolean>(false)
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <FiSun 
        className="h-6 w-6 cursor-pointer dark:text-postfy-200 text-postfy-900"
        name="ligth"
        onClick={() => handleTheme("light")} 
      /> 
    )
  }

  function handleTheme(theme: IThemeOptions) {
    setTheme(theme)
  }

  return (
    <Fragment>
      { resolvedTheme === "dark" && (
        <FiSun 
          className="h-6 w-6 cursor-pointer dark:text-postfy-200 text-postfy-900"
          name="ligth"
          onClick={() => handleTheme("light")} 
        /> 
      )}
      { resolvedTheme === "light" && (
        <FiMoon
          className="h-6 w-6 cursor-pointer dark:text-postfy-200 text-postfy-900"
          name="dark" 
          onClick={() => handleTheme("dark")}
        />
      )}
    </Fragment>
  )
}