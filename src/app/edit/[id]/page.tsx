"use client"

import { Container } from "@/components/custom/Container";
import { EditVideoForm } from "@/components/custom/EditVideoForm";
import { Header } from "@/components/custom/Header";
import { PreviewVideo } from "@/components/custom/PreviewVideo";

export default function Edit() {
  return (
    <main>
      <Header />
      <Container className="flex justify-between font-poppins gap-4 flex-wrap lg:flex-nowrap">
        <EditVideoForm />
        <PreviewVideo />
      </Container>
    </main>
  )
}