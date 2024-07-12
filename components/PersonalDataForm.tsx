import React, { Component } from "react";
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { fontStyle } from "@/constants/FontStyles";
import { buttonStyles } from "@/constants/Buttons";
import { containerStyles } from "@/constants/Containers";

interface PersonalDataFormProps {
  //onChange: (field: string, value: string) => void;
  name: string;
  surname: string;
  state: string;
}

class PersonalDataForm extends Component<PersonalDataFormProps> {
  render() {
    const {name, surname, state } = this.props;

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
          //onChangeText={(value) => onChange('name', value)}
        />
        <TextInput
          style={fontStyle.textInput}
          placeholder="Primer Apellido"
          autoCapitalize="words"
          value={surname}
          //onChangeText={(value) => onChange('surname', value)}
        />
        <TextInput
          style={fontStyle.textInput}
          placeholder="Estado"
          autoCapitalize="words"
          value={state}
          //onChangeText={(value) => onChange('state', value)}
        />
      </KeyboardAvoidingView>
    );
  }
}


export default PersonalDataForm;
