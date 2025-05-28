"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex].text;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < word.length) {
          setCurrentText(word.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        } else {
          setCurrentText(word.slice(0, currentText.length - 1));
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, words]);

  return (
    <div className={cn("flex items-center", className)}>
      <span>{currentText}</span>
      <span
        className={cn(
          "inline-block w-[4px] h-[24px] md:h-[34px] bg-primary ml-1 animate-blink",
          cursorClassName
        )}
      />
    </div>
  );
}; 