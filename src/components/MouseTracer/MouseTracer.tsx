"use client"

import React, { useState, useEffect, useRef } from 'react'

export default function AdvancedMouseTracer() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const tracerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  useEffect(() => {
    if (tracerRef.current) {
      tracerRef.current.style.setProperty('--mouse-x', `${position.x}px`)
      tracerRef.current.style.setProperty('--mouse-y', `${position.y}px`)
    }
  }, [position])

  return (
    <>
      <div 
        ref={tracerRef}
        className="fixed inset-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          maskImage: 'radial-gradient(circle 5rem at var(--mouse-x) var(--mouse-y), white 100%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle 2rem at var(--mouse-x) var(--mouse-y), white 100%, transparent 100%)',
        }}
      >
        <div className="w-full h-full bg-white" />
      </div>
      <div 
        className="fixed w-4 h-4 border-2 border-black rounded-full pointer-events-none z-[10000] mix-blend-hue"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  )
}