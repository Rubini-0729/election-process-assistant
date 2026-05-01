'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FlashcardProps {
  frontContent: string;
  backContent: string;
}

export default function Flashcard({ frontContent, backContent }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="w-full max-w-sm h-64 mx-auto cursor-pointer perspective-1000"
      onClick={flipCard}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          flipCard();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Flashcard: ${isFlipped ? 'Back' : 'Front'}. Click or press Enter to flip.`}
    >
      <motion.div
        className="relative w-full h-full text-center transition-transform duration-700 transform-style-3d"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front of Card */}
        <div
          className={`absolute w-full h-full flex items-center justify-center p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 text-white text-xl font-semibold backface-hidden ${
            isFlipped ? 'pointer-events-none' : ''
          }`}
        >
          {frontContent}
        </div>

        {/* Back of Card */}
        <div
          className={`absolute w-full h-full flex items-center justify-center p-6 bg-blue-600/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 text-white text-lg rotate-y-180 backface-hidden ${
            !isFlipped ? 'pointer-events-none' : ''
          }`}
        >
          {backContent}
        </div>
      </motion.div>
    </div>
  );
}
