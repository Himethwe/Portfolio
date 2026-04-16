import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export default function Typewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      const shouldDelete = isDeleting;

      if (!shouldDelete) {
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));

        if (displayedText.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayedText(currentWord.substring(0, displayedText.length - 1));

        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [
    displayedText,
    isDeleting,
    words,
    currentWordIndex,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={words[currentWordIndex]} // Key changes triggers animation on word swap
        className="inline-block relative"
      >
        {/* Dynamic lower title text */}
        <h1 className="text-[5rem] md:text-[7rem] lg:text-[8rem] font-black leading-[0.85] text-[#2A2A2A] uppercase">
          {displayedText}
          {/* Custom blinking cursor to match the aesthetic */}
          <span className="inline-block h-full w-[0.2em] bg-[#3B82F6] animate-pulse ml-[0.1em]" />
        </h1>
      </motion.span>
    </AnimatePresence>
  );
}
