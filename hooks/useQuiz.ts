import React, { useState } from "react";

interface Question {
    question: string;
    options: string[];
    correctAnswer: number;
  }

function useQuiz(questions: Question[]) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [disabledOptions, setDisabledOptions] = useState<boolean[]>(
      Array(questions[0].options.length).fill(false)
    );
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showTimeout, setShowTimeout] = useState(false);
    const [timerKey, setTimerKey] = useState(0);
  
    const handleOptionSelect = (index: number) => {
        setSelectedOption(index);
        if (index === questions[currentQuestion].correctAnswer) {
          setScore(score + 1);
          setShowSuccess(true);
          setTimeout(() => {
            setShowSuccess(false);
            handleNextQuestion();
          }, 1000); // Tiempo para mostrar el popup antes de pasar a la siguiente pregunta
        } else {
          const updatedDisabledOptions = [...disabledOptions];
          updatedDisabledOptions[index] = true;
          setDisabledOptions(updatedDisabledOptions);
        }
      };
    
      const handleNextQuestion = () => {
        setSelectedOption(null);
        setDisabledOptions(Array(questions[currentQuestion].options.length).fill(false));
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setTimerKey(prevKey => prevKey + 1); // Reinicia el temporizador para la nueva pregunta
        } else {
          // Manejar la finalización del cuestionario
          setCurrentQuestion(0);
          setScore(0);
          setTimerKey(prevKey => prevKey + 1); // Reinicia el temporizador al final del cuestionario
        }
      };
    
      const handleTimeout = () => {
        setShowTimeout(true);
      };
    
      const handleRestartQuiz = () => {
        setShowTimeout(false);
        setSelectedOption(null);
        setDisabledOptions(Array(questions[0].options.length).fill(false));
        setTimerKey((prevKey) => prevKey + 1); // Cambia la clave del Timer para forzar su reinicio
      };

    return {
      currentQuestion,
      selectedOption,
      disabledOptions,
      score,
      showSuccess,
      showTimeout,
      timerKey,
      handleOptionSelect,
      handleNextQuestion,
      handleTimeout,
      handleRestartQuiz,
    };
  }

  export default useQuiz;