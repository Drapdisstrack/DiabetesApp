import React, { Component } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { fontStyle } from "@/constants/FontStyles";
import { buttonStyles } from "@/constants/Buttons";
import { containerStyles } from "@/constants/Containers";

interface FormProps {
  showNameInput: boolean;
  onSubmit: (updatedData: any) => void;
  editable: boolean;
  userData?: any;
}

interface FormState {
  name: string;
  surname: string;
  state: string;
  birthdate: string;
}

class FormProfile extends Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
    const { userData } = this.props;
    this.state = {
      name: userData?.name || "",
      surname: userData?.surname || "",
      state: userData?.state || "",
      birthdate: userData?.birthdate || "",
    };
  }

  handleInputChange = (field: keyof FormState, value: string) => {
    this.setState({ [field]: value } as Pick<FormState, keyof FormState>);
  };

  handleSubmit = () => {
    const { name, surname, state, birthdate } = this.state;
    this.props.onSubmit({ name, surname, state, birthdate });
  };

  render() {
    const { editable } = this.props;
    const { name, surname, state, birthdate } = this.state;

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={containerStyles.formContainer}
      >
        <TextInput
          style={fontStyle.textInput}
          placeholder="Nombre"
          autoCapitalize="words"
          editable={editable}
          value={name}
          onChangeText={(value) => this.handleInputChange("name", value)}
        />
        <TextInput
          style={fontStyle.textInput}
          placeholder="Apellido Paterno"
          autoCapitalize="words"
          editable={editable}
          value={surname}
          onChangeText={(value) => this.handleInputChange("surname", value)}
        />
        <TextInput
          style={fontStyle.textInput}
          placeholder="Estado"
          autoCapitalize="words"
          editable={editable}
          value={state}
          onChangeText={(value) => this.handleInputChange("state", value)}
        />
        <TextInput
          style={fontStyle.textInput}
          placeholder="Fecha de Nacimiento"
          autoCapitalize="none"
          editable={editable}
          value={birthdate}
          onChangeText={(value) => this.handleInputChange("birthdate", value)}
        />

        {editable && (
          <TouchableOpacity
            style={[buttonStyles.error, { marginTop: 20 }]}
            onPress={this.handleSubmit}
          >
            <Text style={fontStyle.primaryButtonFont}>Guardar Cambios</Text>
          </TouchableOpacity>
        )}
      </KeyboardAvoidingView>
    );
  }
}

export default FormProfile;
