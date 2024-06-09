"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

function isMailValid(mail: string) {
  return mail.includes("@gmail") || mail.includes("@hotmail")
}

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "O email é obrigatório" })
    .email({ message: "Formato de e-mail inválido" })
    .refine((mail) => isMailValid(mail), { message: "Email não suportado" }),
  password: z
    .string()
    .min(8, { message: "A senha deve ter ao menos 8 carácteres" })
})

export function useLoginHookForm() {
  const credentialsAlreadSaved = localStorage?.getItem("login") || null
  const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: credentialsAlreadSaved ? JSON.parse(credentialsAlreadSaved).email : "",
      password: credentialsAlreadSaved ? JSON.parse(credentialsAlreadSaved).password : ""
    }
  })

  return { register, handleSubmit, errors, formSchema, reset }
}