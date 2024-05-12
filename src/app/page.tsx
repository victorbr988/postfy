"use client"
import { Form } from "@/components/Form";
import { Button } from "@/components/ui/button";
import { useLoginHookForm } from "@/hooks/Form";
import Link from "next/link";
import { z } from "zod";
import { Footer } from "@/components/custom/Footer";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";

export default function Login() {
  const { toast } = useToast()
  const { register, formSchema, handleSubmit, errors, reset } = useLoginHookForm()

  function onAction(userCredentials: z.infer<typeof formSchema>) {
    toast({
      title: "Trabalhando nisso!",
      description: "Postfy",
      action: (
        <ToastAction altText="Goto schedule to undo">Ok</ToastAction>
      ),
    })
    //POST USER
    console.log(userCredentials)
    reset({
      email: "",
      password: ""
    })
  }

  return (
    <main className="min-h-screen flex flex-col justify-around items-center">
      <section>
        <div className="flex flex-col gap-2 pb-4 items-center">
          <h1 className="font-jetbrains text-3xl font-semibold text-violet-500">Postfy</h1>
          <p className="font-jetbrains text-postfy-100 text-xl">Postagem em massa de conteúdo</p>
        </div>
        
        <Form.Root
          className="border-[1px] border-postfy-800 rounded-lg flex flex-col gap-8 p-6 md:w-postify-lg"
          onSubmit={handleSubmit(onAction)}
        >
          <Form.Label className="flex flex-col gap-1">
            <span className="text-postfy-100 font-jetbrains">Email</span>
            <div>
              <Form.Field
                type="email"
                { ... register("email") }
                placeholder="Seu email" 
              />
              {
                errors?.email && (
                  <span className="font-jetbrains text-sm text text-red-300">{errors.email.message }</span>
                )
              }
            </div>
            
          </Form.Label>
          <Form.Label className="flex flex-col gap-1">
            <span className="text-postfy-100 font-jetbrains">Senha</span>
            <div>
              <Form.Field
                type="password"
                { ... register("password") }
                placeholder="********"
              />
               {
                errors?.password && (
                  <span className="font-jetbrains text-sm text text-red-300">{errors.password.message }</span>
                )
              }
            </div>
          </Form.Label>

          <Form.Trigger>
            <Button
              type="submit"
              className="bg-postfy-200 font-jetbrains text-postfy-900 w-full py-5 hover:brightness-90 transition-all text-lg"
              variant="outline"
            >
              Entrar
            </Button>
          </Form.Trigger>
          <div className="flex gap-1">
            <span className="font-jetbrains text-postfy-100">Ainda não possui conta?</span>
            <Link className="font-jetbrains text-postfy-200" href="#">Cadastre-se</Link>
          </div>
        </Form.Root>
      </section>
      <Footer />
    </main>
  )
}
