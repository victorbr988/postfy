"use client"

import { Header } from "@/components/custom/Header";
import { DataTable } from "@/components/custom/TableProducts";
import { productCollumns } from "../../data/tableProductCollumns";
import { Container } from "@/components/custom/Container";
import { ButtonAdd } from "@/components/custom/ButtonAdd";
import { Footer } from "@/components/custom/Footer";
import { DialogForm } from "@/components/custom/Drawer";
import { FormProvider } from "@/providers/FormProvider";
import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { FormType, useFormStore } from "@/lib/zustand";

export default function History() {
  const router = useRouter()
  const { action } = useFormStore()

  return (
    <main className="flex flex-col gap-4 min-h-screen">
      <Header />

      <section className="flex flex-col justify-between flex-1">
        <div> 
          <Container>
            <p 
              className="flex max-w-36 gap-3 font-poppins dark:text-vm-200 text-vm-800 cursor-pointer" 
              onClick={() => router.back()}
            >
              <FiArrowLeft className="h-6 w-6 cursor-pointer " onClick={() => router.back()} />
              Dashboard
            </p>
          </Container>

          <Container className="sm:hidden flex">
            <ButtonAdd className="w-full flex justify-between py-6" />
          </Container>

          <Container className="flex font-poppins text-lg dark:text-vm-100 text-vm-800 flex-col gap-4">
            <section>
              <h2>Histórico de atividades</h2>
            </section>
            <DataTable columns={productCollumns} data={[]} />
          </Container>
        </div>
        <Footer />
      </section>

      {
        action && action !== FormType.NONE && (
          <DialogForm>
            <FormProvider />
          </DialogForm>
        )
      }
    </main>
  )
}