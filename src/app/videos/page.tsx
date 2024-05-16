"use client"

import { Header } from "@/components/custom/Header";
import { DataTable } from "@/components/custom/TableVideos";
import { videoCollumns } from "../data/tableVideoCollumns";
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
        <DataTable columns={videoCollumns} data={[
          {
            id: "sdsdssfsd",
            video: "Aula-teste-mp4",
            descriptionPost: "teste",
            hashTagsPost: ["teste"],
            uploadProgress: 20,
            postProgress: 0,
          },
          {
            id: "sdsdssfsd",
            video: "Aula-teste-mp4",
            descriptionPost: "teste",
            hashTagsPost: ["teste"],
            uploadProgress: 20,
            postProgress: 0,
          },
          {
            id: "sdsdssfsd",
            video: "Aula-teste-mp4",
            descriptionPost: "teste",
            hashTagsPost: ["teste"],
            uploadProgress: 20,
            postProgress: 0,
          },
          {
            id: "sdsdssfsd",
            video: "Aula-teste-mp4",
            descriptionPost: "teste",
            hashTagsPost: ["teste"],
            uploadProgress: 20,
            postProgress: 0,
          },
          {
            id: "sdsdssfsd",
            video: "Aula-teste-mp4",
            descriptionPost: "teste",
            hashTagsPost: ["teste"],
            uploadProgress: 20,
            postProgress: 0,
          },
          {
            id: "sdsdssfsd",
            video: "Aula-teste-mp4",
            descriptionPost: "teste",
            hashTagsPost: ["teste"],
            uploadProgress: 20,
            postProgress: 0,
          },
          {
            id: "sdsdssfsd",
            video: "Aula-teste-mp4",
            descriptionPost: "teste",
            hashTagsPost: ["teste"],
            uploadProgress: 20,
            postProgress: 0,
          },
          {
            id: "sdsdssfsd",
            video: "Aula-teste-mp4",
            descriptionPost: "teste",
            hashTagsPost: ["teste"],
            uploadProgress: 20,
            postProgress: 0,
          },
        ]} />
      </Container>
    </main>
  )
}