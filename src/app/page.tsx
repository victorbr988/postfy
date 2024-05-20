"use client"
import { Footer } from "@/components/custom/Footer";
import { LoginForm } from "@/components/custom/LoginForm";

export default function Login() {
  return (
    <main className="min-h-screen flex flex-col justify-around items-center">
      <section>
        <div className="flex flex-col gap-2 pb-4 items-center">
          <h1 className="font-jetbrains text-3xl font-semibold text-violet-500">Postfy</h1>
          <p className="font-jetbrains dark:text-postfy-100 text-postfy-900 text-xl">Postagem em massa de conteúdo</p>
        </div>
        
        <LoginForm />
      </section>
      <Footer />
    </main>
  )
}
