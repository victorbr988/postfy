import React, { ReactNode } from "react"

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import { FormType, useFormStore } from "@/lib/zustand";

interface IProfileFormProps {
  children: ReactNode;
}

export function DialogForm({ children }: IProfileFormProps) {
  const { action } = useFormStore()
  
  return (
    <Dialog open={action !== FormType.NONE}>
      <DialogContent className="sm:max-w-[425px] bg-vm-100 dark:bg-vm-900 dark:border-vm-800 border-vm-200">
       { children }
      </DialogContent>
    </Dialog>
  )
}
