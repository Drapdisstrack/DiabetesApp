import { buttonStyles } from "@/constants/Buttons";
import { Button } from "react-native-paper";
import { StyleSheet } from "react-native";

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
    <Button
      mode={isSelected ? "contained" : "outlined"}
      onPress={() => onSelect(index)}
      style={[
        buttonStyles.quizzOption,
        isSelected && isCorrect && buttonStyles.success,
        isDisabled && buttonStyles.error,
      ]}
      labelStyle={styles.optionLabel}
      disabled={isDisabled}
    >
      {option}
    </Button>
  );
}

const styles = StyleSheet.create({
  optionLabel: {
    fontSize: 16,
  },
});

export default QuizOption;