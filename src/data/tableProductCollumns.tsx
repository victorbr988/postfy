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
import Link from "next/link"

export type Video = {
  type: string
  product?: string;
  quantity?: string[];
  datetime: number;
}

export const productCollumns: ColumnDef<Video>[] = [
  {
    accessorKey: "type",
    header: () => <div className="text-left min-w-40">Tipo</div>,
  },
  {
    accessorKey: "product",
    header: "Produto",
  },
  {
    accessorKey: "quantity",
    header: "Quantidade",
  },
  {
    accessorKey: "datetime",
    header: "Data e Hora",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="dark:bg-vm-900 gap-1 flex flex-col bg-vm-100 font-poppins border border-vm-200 dark:border-vm-800 ml-4">
            <DropdownMenuLabel className="font-medium">Ações</DropdownMenuLabel>
            <DropdownMenuItem 
              className="hover:dark:bg-vm-800 hover:dark:-none hover:bg-vm-200/30 cursor-pointer dark:text-vm-200 text-vm-800 flex gap-2 items-center"
            >
              <FiSend className="w-4 h-4" />
              <span className="flex-1">Visualizar</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:dark:bg-vm-800 hover:dark:-none hover:bg-vm-200/30 cursor-pointer dark:text-vm-200 text-vm-800"
            >
              <Link
                className="flex-1 flex gap-2 items-center"
                href={`/edit/${row.getValue("id")}`}
              >
                <FiEdit className="w-4 h-4" />
                <span className="flex-1">Editar</span>
              </Link>
              
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]