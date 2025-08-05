"use client";
import React from "react";

export default function FullScreenLoading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary-600">
      <span className="text-3xl font-bold flex items-center text-primary-200">
        Loading
        <span className="ml-2 flex">
          <span className="animate-bounce [animation-delay:0ms]">.</span>
          <span className="animate-bounce [animation-delay:200ms]">.</span>
          <span className="animate-bounce [animation-delay:400ms]">.</span>
        </span>
      </span>
    </div>
  );
}