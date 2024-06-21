import QuizOption from "@/components/QuizOption";
import SuccessPopup from "@/components/SuccessPopup";
import TimeoutPopup from "@/components/TimeoutPopup";
import Timer from "@/components/Timer";
import ProgressBar from "@/components/progressBar";
import { typography } from "@/constants/Typograhpy";
import useQuiz from "@/hooks/useQuiz";
import { SafeAreaView, View } from "react-native";
import { Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import { TIMER_DURATION } from "@/constants/TimeQuiz";

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
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={typography.h12}>
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
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{question}</Text>
          </View>
          <View style={styles.optionsContainer}>
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
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
    },
    content: {
      flex: 1,
      padding: 16,
      justifyContent: "space-between",
      alignItems: "center",
    },
    questionContainer: {
      backgroundColor: Colors.Brand01,
      borderRadius: 20,
      padding: 16,
      marginBottom: 24,
      width: 367,
      height: 176,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlignVertical: "center",
    },
    questionText: {
      color: "#FFFFFF",
      fontSize: 18,
      textAlign: "center",
    },
    optionsContainer: {
      display: "flex",
      width: 327,
      flexDirection: "column",
      alignItems: "center",
      gap: 30,
    },
  });