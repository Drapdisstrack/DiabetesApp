import QuizOption from "@/components/QuizOption";
import SuccessPopup from "@/components/goodJobPopup";
import TimeoutPopup from "@/components/TimeoutPopup";
import Timer from "@/components/Timer";
import ProgressBar from "@/components/progressBar";
import useQuiz from "@/hooks/useQuiz";
import { SafeAreaView, View } from "react-native";
import { Text } from "react-native-paper";
import { TIMER_DURATION } from "@/constants/TimeQuiz";
import { containerStyles } from "@/constants/Containers";
import { fontStyle } from "@/constants/FontStyles";

interface Question {
    question: string;
    options: string[];
    correctAnswer: number;
}

const questions: Question[] = [
    {
      question:
        "¿Cuánto tiempo de ejercicio diario se recomienda como mínimo para mantener una vida saludable?",
      options: ["60 Minutos", "30 Minutos", "10 Minutos"],
      correctAnswer: 1,
    },
    {
      question: "Pregunta 2",
      options: ["Respuesta 1", "Respuesta 2", "Respuesta 3"],
      correctAnswer: 2,
    },
    {
      question: "Pregunta 3",
      options: ["60 Minutos", "30 Minutos", "10 Minutos"],
      correctAnswer: 0,
    },
    // Añade más preguntas aquí
  ];

export default function QuizScreen() {
    const {
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
    } = useQuiz(questions);
  
    const { question, options, correctAnswer } = questions[currentQuestion];
  
    return (
      <SafeAreaView style={containerStyles.container}>
        <View style={containerStyles.container}>
          <Text style={fontStyle.headlineFont}>
            Pregunta {currentQuestion + 1}/{questions.length}
          </Text>
          <View>
            <Timer
              key={`${currentQuestion}-${timerKey}`}
              duration={TIMER_DURATION}
              onFinish={handleTimeout}
            />
            <ProgressBar current={currentQuestion + 1} total={questions.length} />
          </View>
          <View style={containerStyles.questionContainer}>
            <Text style={fontStyle.primaryButtonFont}>{question}</Text>
          </View>
          <View style={containerStyles.optionsContainer}>
            {options.map((option, index) => (
              <QuizOption
                key={index}
                option={option}
                index={index}
                isSelected={selectedOption === index}
                isDisabled={disabledOptions[index]}
                isCorrect={index === correctAnswer}
                onSelect={handleOptionSelect}
              />
            ))}
          </View>
        </View>
        <SuccessPopup visible={showSuccess} onClose={handleNextQuestion} />
        <TimeoutPopup visible={showTimeout} onClose={handleRestartQuiz} />
      </SafeAreaView>
    );
  };