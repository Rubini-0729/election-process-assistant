'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

const questions = [
  {
    question: "What is the primary purpose of a primary election?",
    options: ["To elect the President directly", "To choose party candidates for the general election", "To vote on local laws", "To recall an elected official"],
    answer: 1
  },
  {
    question: "Who makes up the Electoral College?",
    options: ["Members of Congress", "Supreme Court Justices", "Electors chosen by voters in each state", "State Governors"],
    answer: 2
  },
  {
    question: "Can you vote if you are not registered?",
    options: ["Yes, on election day anywhere", "No, registration is a prerequisite", "Only in presidential elections", "Only if you pay a fee"],
    answer: 1
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleAnswerClick = (index: number) => {
    setSelectedOption(index);
    if (index === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    
    timeoutRef.current = setTimeout(() => {
      setSelectedOption(null);
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-blue-900/40 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-blue-400/20 min-h-[300px] flex flex-col justify-center">
      <AnimatePresence mode="wait">
        {showScore ? (
          <motion.div
            key="score"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Quiz Complete!</h3>
            <p className="text-xl text-blue-200 mb-6">
              You scored {score} out of {questions.length}
            </p>
            <div className="flex justify-center gap-2 mb-8">
              {[...Array(questions.length)].map((_, i) => (
                <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center ${i < score ? 'bg-emerald-500' : 'bg-red-500'}`}>
                  {i < score ? <CheckCircle2 size={16} className="text-white" /> : <XCircle size={16} className="text-white" />}
                </div>
              ))}
            </div>
            <button
              onClick={resetQuiz}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-colors focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              Retake Quiz
            </button>
          </motion.div>
        ) : (
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-blue-200 font-medium tracking-wider text-sm uppercase">Question {currentQuestion + 1} of {questions.length}</span>
                <span className="text-blue-200 text-sm">Score: {score}</span>
              </div>
              <div className="w-full bg-blue-950 rounded-full h-1.5 mb-6">
                <div 
                  className="bg-blue-400 h-1.5 rounded-full transition-all duration-300" 
                  style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
                ></div>
              </div>
              <h3 className="text-2xl font-semibold text-white leading-tight">
                {questions[currentQuestion].question}
              </h3>
            </div>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => {
                let buttonStyle = "bg-white/5 border-white/10 hover:bg-white/10 text-white";
                if (selectedOption !== null) {
                   if (index === questions[currentQuestion].answer) {
                     buttonStyle = "bg-emerald-500/20 border-emerald-500 text-emerald-100";
                   } else if (index === selectedOption) {
                     buttonStyle = "bg-red-500/20 border-red-500 text-red-100";
                   } else {
                     buttonStyle = "bg-white/5 border-white/10 text-white/50 opacity-50";
                   }
                }

                return (
                  <button
                    key={index}
                    onClick={() => selectedOption === null && handleAnswerClick(index)}
                    disabled={selectedOption !== null}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${buttonStyle}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
