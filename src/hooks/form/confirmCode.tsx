"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  code: z
    .string()
    .min(6, { message: "O código deve ter 6 dígitos" })
    .max(6, { message: "O código deve ter 6 dígitos" })
})

export function useConfirmCodeHookForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
    }
  })

  return { register, handleSubmit, errors, formSchema, reset }
}