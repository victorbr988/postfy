import { create } from "zustand"

export enum FormType {
  ENTRANCE = 1,
  EXIT = 2,
  NONE = 3, 
}

interface IForm {
  action: FormType
  setModal: (action: FormType) => void
}

export const useFormStore = create<IForm>((set) => ({
  action: FormType.NONE,
  setModal: (action: FormType) => set({ action })
}))