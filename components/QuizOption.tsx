import { buttonStyles } from "@/constants/Buttons";
import { Button } from "react-native-paper";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { fontStyle } from "@/constants/FontStyles";

interface QuizOptionProps {
  option: string;
  index: number;
  isSelected: boolean;
  isDisabled: boolean;
  isCorrect: boolean;
  onSelect: (index: number) => void;
}

function QuizOption({ option, index, isSelected, isDisabled, isCorrect, onSelect }: QuizOptionProps) {
  return (
    <TouchableOpacity
      
      onPress={() => onSelect(index)}
      style={[
        buttonStyles.quizzOption,
        isSelected && isCorrect && buttonStyles.success,
        isDisabled && buttonStyles.error,
      ]}
      disabled={isDisabled}
    >
      <Text style={fontStyle.blackTextFont}>{option}</Text>
      
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  optionLabel: {
    fontSize: 16,
  },
});

export default QuizOption;