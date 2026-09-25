"use client";

import { useEffect, useRef } from "react";

export function MouseEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let points: { x: number; y: number }[] = [];
    const maxPoints = 50; // Slightly longer trail
    
    // Track actual mouse vs smoothly interpolated position
    let mouse = { x: -1000, y: -1000 }; 
    let pos = { x: -1000, y: -1000 };
    let hasMoved = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!hasMoved) {
        // Snap the position instantly on first movement so it doesn't fly in from off-screen
        pos.x = e.clientX;
        pos.y = e.clientY;
        hasMoved = true;
      }
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    const animate = () => {
      // Clear canvas with a very slight fade for extra smoothness (motion blur)
      ctx.clearRect(0, 0, width, height);

      // Smoothly interpolate the head position towards the mouse
      pos.x += (mouse.x - pos.x) * 0.15;
      pos.y += (mouse.y - pos.y) * 0.15;

      points.push({ x: pos.x, y: pos.y });

      if (points.length > maxPoints) {
        points.shift(); // Remove oldest point
      }

      if (points.length > 1) {
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        // Add a neon glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = "rgba(0, 212, 255, 0.6)";

        for (let i = 0; i < points.length - 1; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];

          const progress = i / points.length; // 0 to 1
          
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          
          // Bolder thickness: from 0.5px at the tail up to 8px at the head
          ctx.lineWidth = Math.max(0.5, progress * 8);
          // Higher opacity
          ctx.strokeStyle = `rgba(0, 212, 255, ${progress * 1.0})`;
          
          ctx.stroke();
        }
        
        // Reset shadow so it doesn't compound weirdly
        ctx.shadowBlur = 0;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-30 w-full h-full"
    />
  );
}
