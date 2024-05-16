import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FiEdit, FiSend, FiTrash2 } from "react-icons/fi"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"

export type Video = {
  id: string;
  video: string
  descriptionPost?: string;
  hashTagsPost?: string[];
  uploadProgress: number;
  postProgress?: number;
}

export const videoCollumns: ColumnDef<Video>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "video",
    header: () => <div className="text-left min-w-40">Video</div>,
  },
  {
    accessorKey: "uploadProgress",
    header: "Upload",
    cell:({ row }) => {
      return <Progress value={row.getValue("uploadProgress")} className="w-40" />
    }
  },
  {
    accessorKey: "postProgress",
    header: "Publicação",
    cell:({ row }) => {
      return <Progress value={row.getValue("postProgress")} className="w-40" />
    }
  },
  {
    accessorKey: "descriptionPost",
    header: "Descrição",
  },
  {
    accessorKey: "hashTagsPost",
    header: "Hashtag",
  },
  {
    id: "actions",
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="dark:bg-postfy-900 gap-1 flex flex-col bg-postfy-100 font-poppins border border-postfy-200 dark:border-postfy-800 ml-4">
            <DropdownMenuLabel className="font-medium">Ações</DropdownMenuLabel>
            <DropdownMenuItem 
              className="hover:dark:bg-postfy-800 hover:dark:-none hover:bg-postfy-200/30 cursor-pointer dark:text-postfy-200 text-postfy-800 flex gap-2 items-center"
            >
              <FiSend className="w-4 h-4" />
              <span className="flex-1">Publicar</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:dark:bg-postfy-800 hover:dark:-none hover:bg-postfy-200/30 cursor-pointer dark:text-postfy-200 text-postfy-800 flex gap-2 items-center"
            >
              <FiEdit className="w-4 h-4" />
              <span className="flex-1">Editar</span>
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="hover:dark:bg-postfy-800 hover:dark:-none hover:bg-postfy-200/30 cursor-pointer text-red-300 flex gap-2 items-center"
            >
              <FiTrash2 className="w-4 h-4" />
              <span className="flex-1">Remover</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]