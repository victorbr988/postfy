import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";

const generateVideoThumbnail = (file: File) => {
  return new Promise((resolve) => {
    const canvas = document.createElement("canvas");
    const video = document.createElement("video");

    // this is important
    video.autoplay = true;
    video.muted = true;
    video.src = URL.createObjectURL(file);

    video.onloadeddata = () => {
      let ctx = canvas.getContext("2d");

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight * 2;

      ctx!.drawImage(video, 0, 0, video.videoWidth, video.videoHeight * 2);
      video.pause();
      return resolve(canvas.toDataURL("image/png"));
    };
  });
};

function DropArea() {
  const [isDraggerActive, setIsDraggerActive] = useState<boolean>(false)
  const [linkVideo, setLinkVideo] = useState<string>("")

  const dragOver = (e: any) => {
    e.preventDefault();
    if (!isDraggerActive) return setIsDraggerActive(true)
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
    const file = e.dataTransfer.files[0];
    generateVideoThumbnail(file).then((url: any) => setLinkVideo(url))
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
      <span className="dark:text-postfy-200/50 text-postfy-800/50">Apenas MP4</span>

      {
        linkVideo.length > 0 && (
          <Image width={100} height={100} src={linkVideo} alt="Thubnail" />
        )
      }
    </div>
  )
}

export const DropZone = {
  DropArea
}