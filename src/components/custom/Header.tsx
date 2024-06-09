"use client"

import Link from "next/link";
import { FiLogOut } from "react-icons/fi";
import { ThemeSwitch } from "./ThemeSwitch";
import { ButtonAdd } from "./ButtonAdd";

export function Header() {
  return (
    <header 
      className="p-5 flex gap-2 w-full border-b dark:border-b-vm-800 border-b-vm-200"
    >
      <section className="flex gap-2 w-full items-center justify-between">
        <section className="flex gap-2 w-1/2 items-center">
          <div className="h-9 w-9 rounded-full flex justify-center items-center border dark:border-vm-800 dark:text-violet-500 text-vm-800 font-poppins font-semibold border-vm-200">J</div>
          <h1 className="font-poppins text-2xl font-medium dark:text-vm-200 text-vm-800">Jhon Doe</h1>
        </section>
        <section className="flex sm:hidden gap-4 items-center">
            <Link
              href="/"
            >
              <FiLogOut className="h-6 w-6 text-red-300" />
            </Link>
            <ThemeSwitch iconClasses="h-6 w-6" />
          </section>
      </section>
      <section className="justify-between w-full hidden sm:flex items-center font-poppins">
        <div className="flex gap-4 items-center justify-end w-full">
          <section className="sm:flex hidden gap-4 items-center">
            <Link
              href="/"
            >
              <FiLogOut className="h-6 w-6 text-red-300" />
            </Link>
            <ThemeSwitch iconClasses="h-6 w-6" />
          </section>
          <div className="flex gap-4">
            <ButtonAdd />
          </div>
        </div>
      </section>
    </header>
  )
}