import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Form from "../components/Form";
import Buttons from "../components/Buttons";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
    const navigation = useNavigation();

    const handleSignUp = () => {
        // lógica de registro
        navigation.navigate("HomeScreen");
      };   
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrarse</Text>
      <Form showNameInput={true} onSubmit={handleSignUp} />
      <Text style={styles.linkText}>¿Tienes una cuenta? <Text style={styles.link}>Inicia sesión</Text></Text>
      <Buttons />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  linkText: {
    marginTop: 20,
    color: '#808080',
  },
  link: {
    color: '#4B67FF',
    fontWeight: 'bold',
  },
});

export default SignUp;
