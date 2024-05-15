"use client"

import { Header } from "@/components/custom/Header";
import { DataTable } from "@/components/custom/TableVideos";
import { videoCollumns } from "../data/tableVideoCollumns";
import { Container } from "@/components/custom/Container";
import { DropZone } from "@/components/custom/Dropzone";
import { FiUpload } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { useState } from "react";

/*const EventType: Record<string, string> = {
  onDragEnter: () => {
    
  }
}*/

export default function Videos() {
  return (
    <main className="flex flex-col gap-4">
      <Header />
      <Container>
        <DropZone.DropArea />
      </Container>

      <Container>
        <DataTable columns={videoCollumns} data={[]} />
      </Container>
    </main>
  )
}