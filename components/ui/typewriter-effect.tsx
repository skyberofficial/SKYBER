'use client';

import { useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";

interface Word {
  text: string;
  className?: string;
}

interface TypewriterEffectProps {
  words: Word[];
  className?: string;
  cursorClassName?: string;
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  words,
  className,
  cursorClassName,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const typeText = () => {
      const currentWord = words[currentWordIndex].text;
      const typingSpeed = isDeleting ? 50 : 150; // Faster when deleting

      if (!isDeleting && currentText.length < currentWord.length) {
        // Still typing
        setCurrentText(currentWord.slice(0, currentText.length + 1));
        timeout = setTimeout(typeText, typingSpeed);
      } else if (!isDeleting && currentText.length === currentWord.length) {
        // Finished typing, wait before deleting
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText.length > 0) {
        // Deleting
        setCurrentText(currentText.slice(0, -1));
        timeout = setTimeout(typeText, typingSpeed);
      } else if (isDeleting && currentText.length === 0) {
        // Move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    timeout = setTimeout(typeText, 1000);

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, words]);

  return (
    <div className={cn("flex items-center", className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="inline-block"
      >
        <motion.span
          key={currentText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block"
        >
          {currentText}
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={cn("inline-block w-[2px] h-[24px] ml-1 bg-primary", cursorClassName)}
        />
      </motion.div>
    </div>
  );
}; 