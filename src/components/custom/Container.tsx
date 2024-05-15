import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface IContainerParam extends HTMLAttributes<HTMLTableSectionElement> {
  additionalClasses?: string
}
export function Container(props: IContainerParam) {
  return (
    <section
      { ...props }
      className={cn("p-5", props.additionalClasses)}
    >
      { props.children }
    </section>
  )
}