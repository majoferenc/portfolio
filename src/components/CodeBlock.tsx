"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      // Convert code to string if it's not already
      const codeText = typeof code === 'string' ? code : String(code);
      await navigator.clipboard.writeText(codeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code", err);
    }
  };

  // Ensure code is a string
  const codeText = typeof code === 'string' ? code : String(code);

  return (
    <div className="relative group my-4 w-full max-w-full overflow-hidden bg-black px-2">
      <div className="overflow-x-auto max-w-full">
        <pre className="rounded-lg p-4 bg-muted text-sm whitespace-pre overflow-x-auto max-w-full block">
          <code className={`language-${language || "text"} block`}>
            {codeText}
          </code>
        </pre>
      </div>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1 rounded bg-background/80 
                   hover:bg-background transition-colors z-10"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4 text-muted-foreground" />
        )}
      </button>
    </div>
  );
}