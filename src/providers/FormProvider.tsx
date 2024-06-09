import { InsertMovimentForm } from "@/components/custom/form/InsertMovimentForm";
import { FormType, useFormStore } from "@/lib/zustand"

export function FormProvider() {
  const { action } = useFormStore()

  switch (action || FormType.NONE) {
    case FormType.ENTRANCE:
      return <InsertMovimentForm />
    case FormType.EXIT:
      return <InsertMovimentForm />  
  }
}