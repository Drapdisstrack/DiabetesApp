import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { fontStyle } from "@/constants/FontStyles";
import { buttonStyles } from "@/constants/Buttons";

interface NextButtonProps {
  onSubmit: () => void;
}
//const { showNameInput, onSubmit } = this.props;
const NextButton: React.FC<NextButtonProps> = ({ onSubmit }) => {
  return (
    <TouchableOpacity style={buttonStyles.next} onPress={onSubmit}>
      <Text style={fontStyle.primaryButtonFont}>Siguiente</Text>
    </TouchableOpacity>
  );
};


export default NextButton;
