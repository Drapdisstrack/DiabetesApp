import React, { Component } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { fontStyle } from "@/constants/FontStyles";
import { buttonStyles } from "@/constants/Buttons";
import { containerStyles } from "@/constants/Containers";

interface FormProps {
  showNameInput: boolean;
  isSignUp: boolean;
  onSubmit: (email: string, password: string) => void;
  onError: (message: string) => void;
}

interface FormState {
  email: string;
  password: string;
  confirmPassword: string;
  showPassword: boolean;
}

class Form extends Component<FormProps, FormState> {

  constructor(props: FormProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      showPassword: false,
    };
  }

  toggleShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  }

  handleEmailChange = (email: string) => {
    this.setState({ email });
  }

  handlePasswordChange = (password: string) => {
    this.setState({ password });
  }

  handleConfirmPasswordChange = (confirmPassword: string) => {
    this.setState({ confirmPassword });
  }

  validateEmail = (email: string) => {
    // Simple regex for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  handleSubmit = () => {
    const { email, password, confirmPassword } = this.state;
    const { isSignUp } = this.props;

    // Validations
    try {
      if (!this.validateEmail(email)) {
        throw new Error("El correo electrónico no es válido");
      }
      if (password.length < 6) {
        throw new Error("La contraseña debe tener al menos 6 caracteres");
      }
      if (isSignUp && password !== confirmPassword) {
        throw new Error("Las contraseñas no coinciden");
      }

      this.props.onSubmit(email, password);
    } catch (error) {
      if (error instanceof Error) {
        this.props.onError(error.message);
      } else {
        this.props.onError("Ocurrió un error desconocido");
      }
    }
  }

  render() {
    const { showNameInput, isSignUp } = this.props;
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
          onChangeText={this.handleEmailChange}
        />
        <View style={containerStyles.passwordContainer}>
          <TextInput
            style={[fontStyle.textInput, { paddingRight: 40 }]}
            placeholder="Ingresa tu contraseña"
            secureTextEntry={!this.state.showPassword}
            onChangeText={this.handlePasswordChange}
          />
          <TouchableOpacity 
            style={buttonStyles.toggleButton}
            onPress={this.toggleShowPassword}
          >
            <Ionicons name={this.state.showPassword ? "eye-off" : "eye"} size={24} color="grey" />
          </TouchableOpacity>
        </View>
  
        {isSignUp && (
          <View style={containerStyles.passwordContainer}>
            <TextInput
              style={fontStyle.textInput}
              placeholder="Confirma tu contraseña"
              secureTextEntry={!this.state.showPassword}
              onChangeText={this.handleConfirmPasswordChange}
            />
            <TouchableOpacity style={buttonStyles.toggleButton} onPress={this.toggleShowPassword}>
              <Ionicons name={this.state.showPassword ? "eye-off" : "eye"} size={24} color="grey" />
            </TouchableOpacity>
          </View>
        )}
  
        <TouchableOpacity style={buttonStyles.primary} onPress={this.handleSubmit}>
          <Text style={fontStyle.primaryButtonFont}>Continuar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Form;
