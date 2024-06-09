import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@radix-ui/react-toast"

interface IProviderProps {
  statusCode: number
}

export function ToastProvider({ statusCode }: IProviderProps) {
  switch (statusCode) {
    case 401:
      return (
        toast({
          title: "Não autorizado",
          description: "Verifique suas credenciais",
          action: (
            <ToastAction altText="Confirmar">Ok</ToastAction>
          )
        })
      )
    case 500:
      return (
        toast({
          title: "Erro Interno no servidor",
          description: "Entre em contato com victor.lins.dev@gmail.com",
          action: (
            <ToastAction altText="Confirmar">Ok</ToastAction>
          )
        })
      )
    case 201:
      return (
        toast({
          title: "Sessão iniciada com sucesso",
          description: "SemeaTech",
          action: (
            <ToastAction altText="Confirmar">Ok</ToastAction>
          )
        })
      )
    default:
      return (
        toast({
          title: "Não encontrado",
          description: "Reveja as informações",
          action: (
            <ToastAction altText="Confirmar">Ok</ToastAction>
          )
        })
      )
  }
}