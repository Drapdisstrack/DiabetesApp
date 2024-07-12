import React, { Component } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { fontStyle } from "@/constants/FontStyles";
import { buttonStyles } from "@/constants/Buttons";
import { containerStyles } from "@/constants/Containers";

interface FormProps {
  showNameInput: boolean;
  onSubmit: (email: string, password: string) => void;
}

interface FormState {
  email: string;
  password: string;
  showPassword: boolean;
}

class Form extends Component<FormProps, FormState> {

  constructor(props: FormProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
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

  handleSubmit = () => {
    const { email, password } = this.state;
    this.props.onSubmit(email, password);
  }

  render() {
    const { showNameInput } = this.props;
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
            style={fontStyle.textInput}
            placeholder="Ingresa tu contraseña"
            secureTextEntry={!this.state.showPassword}
            onChangeText={this.handlePasswordChange}
          />
          <TouchableOpacity style={buttonStyles.toggleButton} onPress={this.toggleShowPassword}>
            <Ionicons name={this.state.showPassword ? "eye-off" : "eye"} size={24} color="grey" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={buttonStyles.primary} onPress={this.handleSubmit}>
          <Text style={fontStyle.primaryButtonFont}>Continuar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Form;
