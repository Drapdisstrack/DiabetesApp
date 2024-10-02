import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text } from 'react-native-paper';
import QuizOption from '@/components/QuizOption';
import TimeoutPopup from '@/components/TimeoutPopup';
import Timer from '@/components/Timer';
import useQuiz from '@/hooks/useQuiz';
import { TIMER_DURATION } from '@/constants/TimeQuiz';
import { containerStyles } from '@/constants/Containers';
import { fontStyle } from '@/constants/FontStyles';
import ProgressBar from '@/components/progressBar';
import SuccessPopup from '@/components/goodJobPopup';

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
    questions
  } = useQuiz();

  if (questions.length === 0) {
    return (
      <SafeAreaView style={containerStyles.container}>
        <Text>Cargando preguntas...</Text>
      </SafeAreaView>
    );
  }

  const { pregunta, opciones, respuesta } = questions[currentQuestion];

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
          <Text style={fontStyle.primaryButtonFont}>{pregunta}</Text>
        </View>
        <View style={containerStyles.optionsContainer}>
          {opciones.map((opcion, index) => (
            <QuizOption
              key={index}
              option={opcion}
              index={index}
              isSelected={selectedOption === index}
              isDisabled={disabledOptions[index]}
              isCorrect={index === respuesta}
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
