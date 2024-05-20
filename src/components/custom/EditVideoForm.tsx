import { FiEdit, FiEdit2, FiEdit3 } from "react-icons/fi";
import { Form } from "../Form";
import { Button } from "../ui/button";
import { useState } from "react";

export function EditVideoForm() {
  const [enableForm, setEnableForm] = useState<boolean>(true)

  function handleClick(event: any) {
    event.preventDefault()
    setEnableForm(!enableForm)
  }

  return (
    <Form.Root
      className="border-[1px] max-h-[450px] dark:border-postfy-800 border-postfy-200 flex-1 rounded-lg flex flex-col gap-8 p-6"
    >
      <Form.Label className="flex flex-col gap-2">
        <div 
          className="w-full flex justify-end"
        >
          <FiEdit3 
            onClick={handleClick}
            className="h-6 w-6 cursor-pointer" 
          />
        </div>
        <div className="flex gap-2 items-center mb-1">
          <span className="dark:text-postfy-100 font-poppins text-postfy-900">
            Descrição do vídeo
          </span>
          <Button
            variant="ghost"
            size="sm"
            className="border dark:border-postfy-200 border-postfy-800 dark:text-postfy-200 font-poppins"
          >
            Gerar com IA
          </Button>
        </div>
        
        <div>
          <Form.TextAreaField
            className="resize-none font-poppins"
            placeholder="lorem ipsum dollor sit amet adipiscing elit turpis aenean lacus..."
            disabled={enableForm}
          />
        </div>
      </Form.Label>
      <Form.Label className="flex flex-col gap-2">
        <span className="dark:text-postfy-100 font-poppins text-postfy-900">
          Hashtags
        </span>
        
        <div>
          <Form.Field
            type="text"
            className="font-poppins"
            placeholder="#ontem #filme #cinema..."
            disabled={enableForm}
          />
        </div>
      </Form.Label>

      <Form.Trigger>
        <div
          className="flex gap-2"
        >
          <Button
            type="submit"
            className="font-poppins"
            variant="outline"
            disabled={enableForm}
          >
            Salvar
          </Button>
          <Button
            type="button"
            className="border dark:border-postfy-800 border-postfy-200 dark:text-postfy-200 font-poppins"
            variant="ghost"
            disabled={enableForm}
            onClick={handleClick}
          >
            Cancelar
          </Button>
        </div>
      </Form.Trigger>
    </Form.Root>
  )
}