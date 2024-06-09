"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  product: z
    .string()
    .min(1, { message: "O nome do produto é obrigatório" }),
  type: z        
    .enum(["Entrada", "Saída", "Quantidade estoque"], { message: "O tipo do produto deve ser entre Entrada, Saída ou Quantidade estoque" }),
  quantity: z
    .coerce.number()
    .min(1, { message: "A quantidade deve ser maior que 0" }),
  datetime: z
    .string()
    .min(1, { message: "A data é obrigatória" })
})

export function useInserMoviment() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      product: "",
      type: "" as any,
      quantity: 0,
      datetime: "",
    }
  })

  return { register, handleSubmit, errors, formSchema, reset }
}