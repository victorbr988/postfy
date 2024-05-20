"use client"

import { Form } from "@/components/Form";
import { Button } from "@/components/ui/button";
import { useConfirmCodeHookForm } from "@/hooks/form/confirmCode";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { z } from "zod";

export function ConfirmSendCodeForm() {
  const { toast } = useToast()
  const { register, formSchema, handleSubmit, errors, reset } = useConfirmCodeHookForm()

  function onAction(userCredentials: z.infer<typeof formSchema>) {
    toast({
      title: "Trabalhando nisso!",
      description: "Postfy",
      action: (
        <ToastAction altText="Confirmar">Ok</ToastAction>
      ),
    })
    //POST USER
    console.log(userCredentials)
    reset({
      code: ""
    })
  }

  return (
    <Form.Root
      className="border-[1px] dark:border-postfy-800 border-postfy-200 rounded-lg flex flex-col gap-8 p-6 md:w-postify-lg"
      onSubmit={handleSubmit(onAction)}
    >
      <Form.Label className="flex flex-col gap-1">
        <span className="dark:text-postfy-100 font-jetbrains text-postfy-900">Código de confirmação</span>
        <div>
          <Form.Field
            type="text"
            { ... register("code") }
            placeholder="------" 
          />
          {
            errors?.code && (
              <span className="font-jetbrains text-sm text text-red-300">{errors.code.message }</span>
            )
          }
        </div>
        
      </Form.Label>

      <Form.Trigger>
        <Button
          type="submit"
          className="font-jetbrains py-6 w-full text-lg"
          variant="outline"
        >
          Enviar
        </Button>
      </Form.Trigger>
      <div className="flex gap-1">
        <span className="font-jetbrains dark:text-postfy-100 text-postfy-900">Não recebeu o código?</span>
        <Link className="font-jetbrains text-postfy-700 dark:text-postfy-200  font-bold dark:font-normal" href="#">Reenviar</Link>
      </div>
    </Form.Root>
  )
}