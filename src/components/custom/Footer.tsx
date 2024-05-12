import { Separator } from "../ui/separator";
import Link from "next/link"

export function Footer() {
  return (
    <footer className="md:w-postify-xl font-jetbrains">
      <section className="text-postfy-100 flex gap-2">
          <p>Criador</p>
          <Separator className="h-6 bg-postfy-800" orientation="vertical" />
          <span>Victor Gabriel Rodrigues Lins</span>
      </section>
      <Separator className="my-4 bg-postfy-800" />
      <section className="text-postfy-200 flex gap-2">
      <p className="text-postfy-100">Redes sociais</p>
      <Separator className="h-6 bg-postfy-800" orientation="vertical" />
      <Link href="https://github.com/victorbr988" target="_blank">Github</Link>
      <Separator className="h-6 bg-postfy-800" orientation="vertical" />
      <Link href="https:/linkedin.com/in/victor-gabriel-dev" target="_blank">LinkedIn</Link>
      </section>
    </footer>
  )
}