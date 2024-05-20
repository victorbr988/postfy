"use client"

import { Header } from "@/components/custom/Header";
import { DataTable } from "@/components/custom/TableVideos";
import { videoCollumns } from "../../data/tableVideoCollumns";
import { Container } from "@/components/custom/Container";
import { Dropzone } from "@/components/custom/Dropzone";

export default function Videos() {
  return (
    <main className="flex flex-col gap-4">
      <Header />
      <Container>
        <Dropzone />
      </Container>

      <Container>
        <DataTable columns={videoCollumns} data={[]} />
      </Container>
    </main>
  )
}