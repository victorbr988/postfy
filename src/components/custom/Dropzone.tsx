import { cn } from "@/lib/utils";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

export function Dropzone() {
  const [isDraggerActive, setIsDraggerActive] = useState<boolean>(false)
  const [files, setFiles] = useState<File[]>([])
  const { toast } = useToast()

  function ValidateMimeTypeFiles(fileList: FileList) {
    const validMimeType = "video/mp4"
  
    return Array.from(fileList).every((file: File) => file.type === validMimeType)
  }

  const dragOver = (e: any) => {
    e.preventDefault();
    if (!isDraggerActive) {
      setIsDraggerActive(true)
    }
  }

  const dragEnter = (e: any) => {
    e.preventDefault();
  }

  const dragLeave = (e: any) => {
    e.preventDefault();
    setIsDraggerActive(false)
  }

  const fileDrop = (e: any) => {
    e.preventDefault();
    const allFilesAreValids = ValidateMimeTypeFiles(e.dataTransfer.files)
    
    if(allFilesAreValids) {
      setFiles(e.dataTransfer.files)
    }

    if (!allFilesAreValids) {
      toast({
        title: "Apenas formato MP4 é permitido",
        description: "Postfy",
        variant: "destructive",
        action: (
          <ToastAction altText="Confirmar">Ok</ToastAction>
        ),
      })
    }
    setIsDraggerActive(false)
  }

  return (
    <div
      onDragOver={dragOver}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDrop={fileDrop}
      className={cn(
        "w-full font-poppins gap-1 border border-dashed rounded-lg flex flex-col justify-center items-center p-8",
        isDraggerActive ? "dark:border-green-600 border-green-700" : "dark:border-postfy-800 border-postfy-200"
      )}
    >
      <FiUpload className="w-6 h-6 dark:text-postfy-200 text-postfy-800" />
      <span className="dark:text-postfy-200 text-postfy-800">Arraste os vídeos até aqui</span>
      <span className="dark:text-postfy-200/50 text-sm text-postfy-800/50">Apenas MP4</span>
      <span className="dark:text-postfy-200/50 text-sm text-postfy-800/50">{`${files.length} arquivos selecionados`}</span>
    </div>
  )
}
