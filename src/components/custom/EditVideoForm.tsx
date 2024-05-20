import { Form } from "../Form";
import { Button } from "../ui/button";

export function EditVideoForm() {
  return (
    <Form.Root
      className="border-[1px] max-h-96 dark:border-postfy-800 border-postfy-200 flex-1 rounded-lg flex flex-col gap-8 p-6"
    >
      <Form.Label className="flex flex-col gap-2">
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
          <Form.Field
            type="text"
            placeholder="Ontem eu fui ao cinema..."
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
            placeholder="#ontem #filme #cinema..."
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
          >
            Salvar
          </Button>
          <Button
            type="button"
            className="border dark:border-postfy-800 border-postfy-200 dark:text-postfy-200 font-poppins"
            variant="ghost"
          >
            Cancelar
          </Button>
        </div>
      </Form.Trigger>
    </Form.Root>
  )
}