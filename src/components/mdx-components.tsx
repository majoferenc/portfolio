import Image from "next/image";
import { ZoomableImage } from "@/components/zoomable-image"
import * as runtime from "react/jsx-runtime";
// import { cn } from "@/lib/utils";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  // Override the default img component with our ZoomableImage
  ZoomableImage,
  Image
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}