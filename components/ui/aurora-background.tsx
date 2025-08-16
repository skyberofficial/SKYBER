"use client";

import { useEffect, useRef, useState } from "react";

interface AuroraProps {
  colorStops?: string[];
  blend?: number;
  amplitude?: number;
  speed?: number;
}

export function AuroraBackground({ 
  colorStops = ["#17D492", "#14c082", "#0f172a"], 
  blend = 0.5, 
  amplitude = 1.0, 
  speed = 0.5 
}: AuroraProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    // Detect mobile device and adjust performance
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      return mobile;
    };

    const resizeCanvas = () => {
      const mobile = checkMobile();
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Adjust performance settings for mobile
      if (mobile) {
        // Reduce complexity on mobile for better performance
        amplitude = Math.min(amplitude, 0.8);
        speed = Math.min(speed, 0.6);
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const animate = () => {
      time += speed * 0.01;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      
      colorStops.forEach((color, index) => {
        const offset = (index / (colorStops.length - 1)) + Math.sin(time + index) * 0.1;
        gradient.addColorStop(Math.max(0, Math.min(1, offset)), color);
      });

      // Draw flowing aurora effect
      ctx.fillStyle = gradient;
      ctx.globalAlpha = isMobile ? 0.2 : 0.3; // Reduce opacity on mobile
      
      // Adjust segments based on device performance
      const segments = isMobile ? 30 : 50;
      const path = new Path2D();
      
      path.moveTo(0, canvas.height);
      
      for (let i = 0; i <= segments; i++) {
        const x = (i / segments) * canvas.width;
        const y = canvas.height * 0.3 + 
                  Math.sin(time + i * 0.2) * amplitude * 100 +
                  Math.sin(time * 0.5 + i * 0.1) * amplitude * 50;
        
        if (i === 0) {
          path.moveTo(x, y);
        } else {
          path.lineTo(x, y);
        }
      }
      
      path.lineTo(canvas.width, canvas.height);
      path.closePath();
      
      ctx.fill(path);
      
      // Add second layer for depth (simplified on mobile)
      if (!isMobile) {
        ctx.globalAlpha = 0.2;
        const path2 = new Path2D();
        path2.moveTo(0, canvas.height);
        
        for (let i = 0; i <= segments; i++) {
          const x = (i / segments) * canvas.width;
          const y = canvas.height * 0.4 + 
                    Math.sin(time * 0.8 + i * 0.15) * amplitude * 80 +
                    Math.sin(time * 0.3 + i * 0.08) * amplitude * 40;
          
          if (i === 0) {
            path2.moveTo(x, y);
          } else {
            path2.lineTo(x, y);
          }
        }
        
        path2.lineTo(canvas.width, canvas.height);
        path2.closePath();
        
        ctx.fill(path2);
      }
      
      // Add subtle particle effect (reduced on mobile)
      ctx.globalAlpha = isMobile ? 0.05 : 0.1;
      const particleCount = isMobile ? 10 : 20;
      
      for (let i = 0; i < particleCount; i++) {
        const x = (Math.sin(time + i) * 0.5 + 0.5) * canvas.width;
        const y = (Math.cos(time * 0.7 + i * 0.5) * 0.5 + 0.5) * canvas.height * 0.6;
        const size = Math.sin(time + i) * 2 + 3;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Use requestAnimationFrame with throttling on mobile for better performance
      if (isMobile) {
        setTimeout(() => {
          animationId = requestAnimationFrame(animate);
        }, 16); // ~60fps on mobile
      } else {
        animationId = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [colorStops, blend, amplitude, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
