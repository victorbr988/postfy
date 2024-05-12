import { FormHTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes, ReactNode, Ref, forwardRef } from "react";
import { Input } from "./ui/input";

interface IFormRootParams extends FormHTMLAttributes<HTMLFormElement> {}

function Root(props: IFormRootParams) {
  return (
    <form
      { ...props }
    >
      { props.children }
    </form>
  )
}

interface IFormTriggerParams {
  children: ReactNode;
  className?: string;
}

//action buttons
function Trigger({ children, className }: IFormTriggerParams) {
  return (
    <section className={ className }>
      { children }
    </section>
  )
}

interface IFormLabelParams extends LabelHTMLAttributes<HTMLLabelElement> {}

function Label(props: IFormLabelParams){
  return (
    <label { ...props }>
      { props.children }
    </label>
  )
}

interface IFormFieldParams extends InputHTMLAttributes<HTMLInputElement> {}

function InputCustom(props: IFormFieldParams, ref: Ref<HTMLInputElement>) {
  return (
    <Input { ...props } ref={ref}/>
  )
}
const InputField = forwardRef(InputCustom)


export const Form = { Root, Trigger, Label, Field: InputField }
