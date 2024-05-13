import { Separator } from "../ui/separator";
import Link from "next/link"

export function Footer() {
  return (
    <footer className="md:w-postify-xl font-jetbrains">
      <section className="dark:text-postfy-100 text-postfy-900 flex gap-2">
          <p>Criador</p>
          <Separator className="h-6 dark:bg-postfy-800 bg-postfy-200" orientation="vertical" />
          <span>Victor Gabriel Rodrigues Lins</span>
      </section>
      <Separator className="my-4 dark:bg-postfy-800 bg-postfy-200" />
      <section className="dark:text-postfy-200 text-postfy-700 font-bold dark:font-normal flex gap-2">
        <p className="dark:text-postfy-100 text-postfy-900 font-normal">Redes sociais</p>
        <Separator className="h-6 dark:bg-postfy-800 bg-postfy-200" orientation="vertical" />
        <Link href="https://github.com/victorbr988" target="_blank">Github</Link>
        <Separator className="h-6 dark:bg-postfy-800 bg-postfy-200" orientation="vertical" />
        <Link href="https://linkedin.com/in/victor-gabriel-dev" target="_blank">LinkedIn</Link>
      </section>
    </footer>
  )
}