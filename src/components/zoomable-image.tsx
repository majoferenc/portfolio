"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { cn } from "@/lib/utils";

interface ZoomableImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export function ZoomableImage({ src, alt, width, height, className }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Thumbnail Image */}
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width || 800}
        height={height || 600}
        className={cn(
          "cursor-zoom-in rounded-lg transition-transform hover:scale-[1.02]",
          className
        )}
        onClick={() => setIsOpen(true)}
      />

      {/* Dialog Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-[80vw] max-w-[90vh] max-h-[90vh] flex justify-center items-center">
          <div className="relative w-[80vw] h-[80vh]">
            <Image
              src={src || "/placeholder.svg"}
              alt={alt}
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
