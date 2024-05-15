import { ColumnDef } from "@tanstack/react-table"

export type Video = {
  id: string;
  video: {  
    imagePreview: string;
    name: string;
  }
  descriptionPost?: string;
  hashTagsPost?: string[];
  uploadProgress: number;
  postProgress?: number;
}

export const videoCollumns: ColumnDef<Video>[] = [
  {
    accessorKey: "video",
    header: "Video",
  },
  {
    accessorKey: "uploadProgress",
    header: "Upload",
  },
  {
    accessorKey: "postProgress",
    header: "Publicação",
  },
  {
    accessorKey: "descriptionPost",
    header: "Descrição",
  },
  {
    accessorKey: "hashTagsPost",
    header: "Hashtag",
  },
]