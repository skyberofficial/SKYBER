"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface GridMotionProps {
  className?: string;
}

const GridMotion: React.FC<GridMotionProps> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !gridRef.current) return;

    const container = containerRef.current;
    const grid = gridRef.current;
    
    // Create grid lines
    const createGrid = () => {
      const lines = [];
      const gridSize = 50;
      const containerRect = container.getBoundingClientRect();
      const cols = Math.ceil(containerRect.width / gridSize);
      const rows = Math.ceil(containerRect.height / gridSize);

      // Create vertical lines
      for (let i = 0; i <= cols; i++) {
        const line = document.createElement("div");
        line.className = "absolute bg-gradient-to-b from-transparent via-[#17D492]/20 to-transparent";
        line.style.left = `${i * gridSize}px`;
        line.style.top = "0";
        line.style.width = "1px";
        line.style.height = "100%";
        line.style.opacity = "0.3";
        grid.appendChild(line);
        lines.push(line);
      }

      // Create horizontal lines
      for (let i = 0; i <= rows; i++) {
        const line = document.createElement("div");
        line.className = "absolute bg-gradient-to-r from-transparent via-[#17D492]/20 to-transparent";
        line.style.left = "0";
        line.style.top = `${i * gridSize}px`;
        line.style.width = "100%";
        line.style.height = "1px";
        line.style.opacity = "0.3";
        grid.appendChild(line);
        lines.push(line);
      }

      return lines;
    };

    const lines = createGrid();

    // Animate grid lines
    const animateGrid = () => {
      lines.forEach((line, index) => {
        gsap.to(line, {
          opacity: Math.random() * 0.5 + 0.1,
          duration: 2 + Math.random() * 3,
          delay: index * 0.1,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    };

    // Mouse movement effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      lines.forEach((line, index) => {
        const distance = Math.sqrt(
          Math.pow(x - parseFloat(line.style.left || "0"), 2) +
          Math.pow(y - parseFloat(line.style.top || "0"), 2)
        );
        
        if (distance < 200) {
          gsap.to(line, {
            opacity: 0.8,
            scale: 1.2,
            duration: 0.3,
            ease: "power2.out",
          });
        } else {
          gsap.to(line, {
            opacity: 0.3,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      });
    };

    // Start animations
    animateGrid();
    container.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      lines.forEach(line => line.remove());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
    >
      <div 
        ref={gridRef}
        className="absolute inset-0"
      />
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/80 via-[#1e293b]/60 to-[#17D492]/20" />
    </div>
  );
};

export default GridMotion;
