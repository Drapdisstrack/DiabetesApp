import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
} from "react-native";
import { fontStyle } from "@/constants/FontStyles";
import { containerStyles } from "@/constants/Containers";
import { buttonStyles } from "@/constants/Buttons";

interface PersonalDataFormProps {
  onSubmit: (name: string, surname: string, state: string) => void;
}

const PersonalDataForm: React.FC<PersonalDataFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = () => {
    onSubmit(name, surname, state);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={containerStyles.formContainer}
    >
      <TextInput
        style={fontStyle.textInput}
        placeholder="Nombre(s)"
        autoCapitalize="words"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={fontStyle.textInput}
        placeholder="Primer Apellido"
        autoCapitalize="words"
        value={surname}
        onChangeText={setSurname}
      />
      <TextInput
        style={fontStyle.textInput}
        placeholder="Estado"
        autoCapitalize="words"
        value={state}
        onChangeText={setState}
      />
      <TouchableOpacity style={buttonStyles.next} onPress={handleSubmit}>
        <Text style={fontStyle.primaryButtonFont}>Siguiente</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default PersonalDataForm;
