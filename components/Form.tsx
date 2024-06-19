import React, { Component } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 

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
      <View style={styles.container}>
        {showNameInput && (
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            autoCapitalize="words"
          />
        )}
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Ingresa tu contraseña"
            secureTextEntry={!this.state.showPassword}
          />
          <TouchableOpacity style={styles.toggleButton} onPress={this.toggleShowPassword}>
            <Ionicons name={this.state.showPassword ? "eye-off" : "eye"} size={24} color="grey" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buttonPrimary} onPress={onSubmit}>
          <Text style={styles.buttonPrimaryText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '85%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 15,
    marginVertical: 10,
    marginBottom: 5,
    backgroundColor: '#fff',
  },
  passwordContainer: {
    width: '85%',
    position: 'relative',
  },
  toggleButton: {
    position: 'absolute',
    right: 0,
    bottom: 18,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  buttonPrimary: {
    backgroundColor: '#4B67FF',
    width: '85%',
    paddingVertical: 15,
    borderRadius: 20,
    marginVertical: 40,
    marginBottom: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonPrimaryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default Form;
