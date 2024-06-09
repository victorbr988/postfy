import { FiSave } from "react-icons/fi";
import { Form } from "../../Form";
import { Button } from "../../ui/button";
import { useInserMoviment } from "@/hooks/form/insertMoviment";
import { DatePicker } from "../DatePicker";

interface IInsertMovimentFormProps {
  action: "Entrada" | "Saída" | "Quantidade estoque" | null
}

export function InsertMovimentForm() {
  const { register, handleSubmit, errors, reset } = useInserMoviment()

  function onAction(event: any) {
    event.preventDefault()
    reset()
  }

  return (
    <Form.Root
      className="rounded-lg flex flex-col gap-8 p-6"
      onSubmit={handleSubmit(onAction)}
    >
      <Form.Label className="flex flex-col gap-1">
        <span className="dark:text-vm-100 font-poppins text-vm-900">Produto</span>
        <div>
          <Form.Field
            type="text"
            { ... register("product") }
            placeholder="Nome do produto"
          />
          {
            errors?.product && (
              <span className="font-poppins text-sm text text-red-300">{errors.product.message }</span>
            )
          }
        </div>
      </Form.Label>
      <Form.Label className="flex flex-col gap-1">
        <span className="dark:text-vm-100 font-poppins text-vm-900">Tipo</span>
        <div>
          <Form.Field
            type="text"
            { ... register("type") }
            placeholder="Tipo de movimentação" 
          />
          {
            errors?.type && (
              <span className="font-poppins text-sm text text-red-300">{errors.type.message }</span>
            )
          }
        </div>
      </Form.Label>
      <Form.Label className="flex flex-col gap-1">
        <span className="dark:text-vm-100 font-poppins text-vm-900">Quantidade</span>
        <div>
          <Form.Field
            type="number"
            { ... register("quantity") }
            placeholder="0" 
          />
          {
            errors?.quantity && (
              <span className="font-poppins text-sm text text-red-300">{errors.quantity.message }</span>
            )
          }
        </div>
      </Form.Label>
      <Form.Trigger>
        <Button type="submit" variant="outline" className="w-full py-6 font-poppins text-lg flex gap-2">
          <FiSave className=" text-vm-200 dark:text-vm-900" />
          Salvar
        </Button>
      </Form.Trigger>
    </Form.Root>
  )
}