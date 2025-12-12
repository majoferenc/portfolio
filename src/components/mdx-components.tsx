"use client";

import Image from "next/image";
import { ZoomableImage } from "@/components/zoomable-image";
import { CodeBlock } from "@/components/CodeBlock";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

const components = {
  ZoomableImage,
  Image,
  pre: (props: any) => {
    const child = props.children;
    
    const extractTextContent = (node: any): string => {
      if (typeof node === 'string') return node;
      if (typeof node === 'number') return String(node);
      if (Array.isArray(node)) {
        return node.map(extractTextContent).join('');
      }
      if (node && typeof node === 'object') {
        if (node.props?.children) {
          return extractTextContent(node.props.children);
        }
        if (node.children) {
          return extractTextContent(node.children);
        }
      }
      return '';
    };
    
    const codeContent = extractTextContent(
      child?.props?.children || child || props.children
    );
    const language = 
      child?.props?.className?.replace(/^language-/, '') || 'text';

    return <CodeBlock code={codeContent} language={language} />;
  },
};

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
}

export function MDXContent({ source }: MDXContentProps) {
  return <MDXRemote {...source} components={components} />;
}