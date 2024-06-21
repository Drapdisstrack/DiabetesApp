import React, { Component } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { fontStyle } from "@/constants/FontStyles";
import { buttonStyles } from "@/constants/Buttons";
import { containerStyles } from "@/constants/Containers";

interface FormProps {
  showNameInput: boolean;
  onSubmit: () => void;
}

interface FormState {
  showPassword: boolean;
}

class Form extends Component<FormProps, FormState> {

  constructor(props: FormProps) {
    super(props);
    this.state = {
      showPassword: false,
    };
  }

  toggleShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  }

  render() {
    const { showNameInput, onSubmit } = this.props;
    return (
      <View style={containerStyles.formContainer}>
        {showNameInput && (
          <TextInput
            style={fontStyle.textInput}
            placeholder="Nombre"
            autoCapitalize="words"
          />
        )}
        <TextInput
          style={fontStyle.textInput}
          placeholder="Correo electrónico"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <View style={containerStyles.passwordContainer}>
          <TextInput
            style={fontStyle.textInput}
            placeholder="Ingresa tu contraseña"
            secureTextEntry={!this.state.showPassword}
          />
          <TouchableOpacity style={buttonStyles.toggleButton} onPress={this.toggleShowPassword}>
            <Ionicons name={this.state.showPassword ? "eye-off" : "eye"} size={24} color="grey" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={buttonStyles.primary} onPress={onSubmit}>
          <Text style={fontStyle.primaryButtonFont}>Continuar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Form;
