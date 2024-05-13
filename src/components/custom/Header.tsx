"use client"

import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import { FiArrowUpCircle, FiLogOut } from "react-icons/fi";
import { Button } from "../ui/button";
import { ThemeSwitch } from "./ThemeSwitch";
import { MenuMobile } from "./MenuMobile";

export function Header() {
  return (
    <header 
      className="p-5 flex gap-2 w-full border-b dark:border-b-postfy-800 border-b-postfy-200"
    >
      <section className="flex gap-2">
        <MenuMobile />
        <h1 className="font-jetbrains text-2xl font-semibold text-violet-500">Postfy</h1>
      </section>
      <Separator className="h-7 mt-[2px] dark:bg-postfy-800 bg-postfy-200" orientation="vertical" />
      <section className="flex justify-between w-full items-center font-poppins">
        <nav className="sm:flex hidden">
          <Link 
            className=" dark:text-postfy-200 text-postfy-800 font-medium" 
            href="/videos"
          >
            Videos
          </Link>
        </nav>
        <div className="flex gap-4 items-center justify-end w-full">
          <div className="flex gap-4">
            <Button
              className="text-md flex gap-2"
              variant="outline"
            >
              <FiArrowUpCircle className="h-5 w-5" />
              <span className="text-md">Upload</span>
            </Button>
            <Separator className="h-7 hidden sm:flex mt-[2px] dark:bg-postfy-800 bg-postfy-200" orientation="vertical" />
          </div>

          <section className="sm:flex hidden gap-4 items-center">
            <Link
              href="/"
            >
              <FiLogOut className="h-6 w-6 text-red-300" />
            </Link>
            <ThemeSwitch iconClasses="h-6 w-6" />
            <div className="h-8 w-8 rounded-full dark:bg-postfy-200 bg-postfy-800"></div>
          </section>
        </div>
      </section>
    </header>
  )
}