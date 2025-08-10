import Image from "next/image";
import { ZoomableImage } from "@/components/zoomable-image";
import * as runtime from "react/jsx-runtime";
import { CodeBlock } from "@/components/CodeBlock";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  ZoomableImage,
  Image,

  // Override <pre> to use our CodeBlock
  pre: (props: any) => {
    // MDX puts the <code> element as the only child of <pre>
    const child = props.children;
    
    // Function to recursively extract text content
    const extractTextContent = (node: any): string => {
      if (typeof node === 'string') {
        return node;
      }
      if (typeof node === 'number') {
        return String(node);
      }
      if (Array.isArray(node)) {
        return node.map(extractTextContent).join('');
      }
      if (node && typeof node === 'object') {
        if (node.props && node.props.children) {
          return extractTextContent(node.props.children);
        }
        // If it's a React element or similar, try to extract text
        if (node.children) {
          return extractTextContent(node.children);
        }
      }
      return '';
    };
    
    const codeContent = extractTextContent(child?.props?.children || child || props.children);
    const language = child?.props?.className?.replace(/^language-/, '') || 'text';

    return <CodeBlock code={codeContent} language={language} />;
  },
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}