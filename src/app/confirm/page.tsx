"use client"
import { ConfirmSendCodeForm } from "@/components/custom/ConfirmSendCodeForm";
import { Footer } from "@/components/custom/Footer";

export default function ConfirmCode() {
  return (
    <main className="min-h-screen flex flex-col justify-around items-center">
      <section>
        <div className="flex flex-col gap-2 pb-4 items-center">
          <h1 className="font-jetbrains text-3xl font-semibold text-violet-500">Postfy</h1>
          <p 
            className="font-jetbrains dark:text-postfy-100 text-postfy-900 text-xl flex py-2 text-center w-postify-lg"
          >
            Confirme o código que recebeu por email para prosseguir com o cadastro
          </p>
        </div>
        
        <ConfirmSendCodeForm />
      </section>
      <Footer />
    </main>
  )
}
