import React, { Component } from "react";
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { fontStyle } from "@/constants/FontStyles";
import { buttonStyles } from "@/constants/Buttons";
import { containerStyles } from "@/constants/Containers";

interface FormProps {
  showNameInput: boolean;
  onSubmit: () => void;
  editable: boolean; // New prop to determine if the form is editable
  email?: string;
  password?: string;
  name?: string;
  surname?: string;
  state?: string;
  birthdate?: string;
}

interface FormState {
  showPassword: boolean;
  email: string;
  password: string;
  name: string;
  surname: string;
  state: string;
  birthdate: string;
}

class FormProfile extends Component<FormProps, FormState> {
  static defaultProps = {
    email: "burgos@gmail.com",
    password: "qweqweqweio",
    name: "Diego",
    surname: "Burgos",
    state: "Nuevo León",
    birthdate: "01/01/1990"
  };

  constructor(props: FormProps) {
    super(props);
    this.state = {
      showPassword: false,
      email: props.email!,
      password: props.password!,
      name: props.name!,
      surname: props.surname!,
      state: props.state!,
      birthdate: props.birthdate!,
    };
  }

  toggleShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleInputChange = (field: keyof FormState, value: string) => {
    this.setState({ [field]: value } as unknown as Pick<FormState, keyof FormState>);
  };

  render() {
    const { editable, onSubmit } = this.props;
    const { email, password, name, surname, state, birthdate } = this.state;

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={containerStyles.formContainer}
      >
        <TextInput
          style={fontStyle.textInput}
          placeholder="Correo electrónico"
          keyboardType="email-address"
          autoCapitalize="none"
          editable={false}
          value={email}
        />
        <TextInput
          style={fontStyle.textInput}
          placeholder="Ingresa tu contraseña"
          secureTextEntry={!this.state.showPassword}
          editable={false}
          value={password}
        />
        
        {editable && (
          <>
            <TextInput
              style={fontStyle.textInput}
              placeholder="Nombre"
              autoCapitalize="words"
              editable={true}
              value={name}
              onChangeText={(value) => this.handleInputChange('name', value)}
            />
            <TextInput
              style={fontStyle.textInput}
              placeholder="Apellido Paterno"
              autoCapitalize="words"
              editable={true}
              value={surname}
              onChangeText={(value) => this.handleInputChange('surname', value)}
            />
            <TextInput
              style={fontStyle.textInput}
              placeholder="Estado"
              autoCapitalize="words"
              editable={true}
              value={state}
              onChangeText={(value) => this.handleInputChange('state', value)}
            />
            <TextInput
              style={fontStyle.textInput}
              placeholder="Fecha de Nacimiento"
              autoCapitalize="none"
              editable={true}
              value={birthdate}
              onChangeText={(value) => this.handleInputChange('birthdate', value)}
            />
          </>
        )}

        <TouchableOpacity
          style={[buttonStyles.error, { marginTop: editable ? 20 : 290 }]}
          onPress={onSubmit}
        >
          <Text style={fontStyle.primaryButtonFont}>
            {editable ? "Guardar Cambios" : "Editar Perfil"}
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

export default FormProfile;
