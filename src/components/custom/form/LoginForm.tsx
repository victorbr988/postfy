"use client"

import { Form } from "@/components/Form";
import { Button } from "@/components/ui/button";
import { useLoginHookForm } from "@/hooks/form/login";
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { getSession } from "@/requests/session";
import { Spin } from "@/components/custom/Spin";
import { ToastAction } from "@radix-ui/react-toast";
import { ToastProvider } from "@/providers/ToastProvider";

export function LoginForm() {
  const { toast } = useToast()
  const { register, formSchema, handleSubmit, errors, reset } = useLoginHookForm()
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  function onAction(userCredentials: z.infer<typeof formSchema>) {
    setIsLoading(true)
    getSession(userCredentials)
      .then(() => {
        setIsLoading(false)
        onCheckedToSave(userCredentials)
      })
      .catch((error) => {
        ToastProvider(error.response.status)
        setIsLoading(false)
        toast({
          title: "Erro ao tentar fazer login",
          description: "Verifique suas credenciais",
          action: (
            <ToastAction altText="Confirmar">Ok</ToastAction>
          )
        })
      })
    reset({
      email: "",
      password: ""
    })
    setIsChecked(false)
  }

  function onCheckedToSave(userCredentials: z.infer<typeof formSchema>) {
    if (isChecked) {
      const credentials = JSON.stringify(userCredentials)
      localStorage.setItem("login", credentials)
    }
  }

  return (
    <Form.Root
      className="border-[1px] dark:border-vm-800 border-vm-200 rounded-lg flex flex-col gap-8 p-6 md:w-postify-lg"
      onSubmit={handleSubmit(onAction)}
    >
      <Form.Label className="flex flex-col gap-1">
        <span className="dark:text-vm-100 font-jetbrains text-vm-900">Email</span>
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
        <span className="dark:text-vm-100 text-vm-900 font-jetbrains">Senha</span>
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
      <div className="flex gap-3 items-center">
        <Checkbox
          onCheckedChange={(checked: boolean) => setIsChecked(checked)} 
          id="credentials"
        />
        <label
          htmlFor="credentials"
          className="text-sm font-medium leading-none font-jetbrains cursor-pointer"
        >
          Manter conectado
        </label>
      </div>
      <Form.Trigger>
        <Button
          type="submit"
          className="font-jetbrains py-6 w-full text-lg"
          variant="outline"
        >
          {
            isLoading ? <Spin /> : "Entrar"
          }
        </Button>
      </Form.Trigger>
    </Form.Root>
  )
}