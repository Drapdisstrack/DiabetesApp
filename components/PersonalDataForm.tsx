import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableOpacity,
  Text,
} from "react-native";
import { fontStyle } from "@/constants/FontStyles";
import { containerStyles } from "@/constants/Containers";
import { buttonStyles } from "@/constants/Buttons";
import StatesDropdown from "@/components/StatesDropdown";

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
    <ScrollView 
      contentContainerStyle={style.scrollContent}
      keyboardShouldPersistTaps="handled"
    >
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={style.formContainer}
    >
      <TextInput
        style={fontStyle.textInput}
        placeholder="Nombre(s)"
        placeholderTextColor="gray"
        autoCapitalize="words"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={[fontStyle.textInput, {marginBottom: 20}]}
        placeholder="Primer Apellido"
        placeholderTextColor="gray"
        autoCapitalize="words"
        value={surname}
        onChangeText={setSurname}
      />
      <StatesDropdown 
        selectedState={state}
        onStateChange={setState} 
      />
      <TouchableOpacity style={buttonStyles.next} onPress={handleSubmit}>
        <Text style={fontStyle.primaryButtonFont}>Siguiente</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 0, // Espacio extra por si se necesita
  },
    formContainer: {
      width: "90%",
      alignItems: 'center'
    }
  }
);

export default PersonalDataForm;
