// useQuiz.ts
import { useEffect, useState } from 'react';
import { fetchQuestions } from './firebaseService'; // Ajusta la ruta según tu estructura

interface Question {
  pregunta: string;
  opciones: string[];
  respuesta: number;
  nivel: number;
}

function useQuiz() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [disabledOptions, setDisabledOptions] = useState<boolean[]>([]);
  const [score, setScore] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showTimeout, setShowTimeout] = useState(false);
  const [timerKey, setTimerKey] = useState(0);

  useEffect(() => {
    // Obtener preguntas desde Firebase
    fetchQuestions().then((questions) => {
      setQuestions(questions);
      setDisabledOptions(Array(questions[0]?.opciones.length || 0).fill(false));
    });
  }, []);

  const handleOptionSelect = (index: number) => {
    if (questions.length === 0) return;

    const current = questions[currentQuestion];
    setSelectedOption(index);

    if (index === current.respuesta) {
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
    if (questions.length === 0) return;

    setSelectedOption(null);
    setDisabledOptions(Array(questions[currentQuestion]?.opciones.length || 0).fill(false));

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
    setDisabledOptions(Array(questions[0]?.opciones.length || 0).fill(false));
    setTimerKey(prevKey => prevKey + 1); // Cambia la clave del Timer para forzar su reinicio
  };

  return {
    questions, // Añadir esta línea
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
