import { useEffect, useState } from 'react';
import { fetchQuestions, getCurrentUser, updateUserExperience } from './firebaseService'; 
import { auth, db } from '@/app/auth/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { router } from 'expo-router';

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
  const [experienceWon, setExperienceWon] = useState(0);
  const [level, setLevel] = useState(0);
  const [experience, setExperience] = useState(0);

  useEffect(() => {
    fetchQuestions().then((questions) => {
      setQuestions(questions);
      setDisabledOptions(Array(questions[0]?.opciones.length || 0).fill(false));
    });
  }, []);

  const fetchUserData = async () => {
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);
      if (userDocSnap.exists()) {
        setExperience(userDocSnap.data().exp);
        setLevel(userDocSnap.data().level);
      }
    }
  };

  const handleOptionSelect = (index: number) => {
    if (questions.length === 0) return;

    const current = questions[currentQuestion];
    setSelectedOption(index);

    if (index === current.respuesta) {
      setScore(score + 1);
      setShowSuccess(true);

      updateUserExperienceAfterAnswer();

      setTimeout(() => {
        setShowSuccess(false);
        handleNextQuestion();
      }, 1000);
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
      setTimerKey(prevKey => prevKey + 1); 
    } else {
      updateUserExperienceAfterQuiz();

      setCurrentQuestion(0);
      setScore(0);
      setTimerKey(prevKey => prevKey + 1); 
    }
  };


  const handleTimeout = () => {
    setShowTimeout(true);
    fetchUserData();
  };


  const handleRestartQuiz = () => {
    setShowTimeout(false);
    setSelectedOption(null);
    setDisabledOptions(Array(questions[0]?.opciones.length || 0).fill(false));
    setTimerKey(prevKey => prevKey + 1); 
  };

  const updateUserExperienceAfterAnswer = async () => {
    const currentUser = getCurrentUser();
    const points = 10;
    if (currentUser) {
      await updateUserExperience(currentUser.uid, points);
    }
    setExperienceWon(experience + points);
  };

  const updateUserExperienceAfterQuiz = async () => {
    if (score == 0) return;
    
    const currentUser = getCurrentUser();
    const points = 50;
    if (currentUser) {
      await updateUserExperience(currentUser.uid, points); 
    }
    setExperienceWon(experience + points);
  };

  const handelGameEnd = () => {
    router.back();
  }

  return {
    questions, 
    currentQuestion,
    selectedOption,
    disabledOptions,
    score,
    showSuccess,
    showTimeout,
    timerKey,
    experienceWon,
    level,
    experience,
    handleOptionSelect,
    handleNextQuestion,
    handleTimeout,
    handleRestartQuiz,
    handelGameEnd
  };
}

export default useQuiz;
