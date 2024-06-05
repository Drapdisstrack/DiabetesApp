import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Form from "../components/Form";
import Buttons from "../components/Buttons";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Aquí puedes agregar lógica de autenticación si es necesario
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../images/iniciosesion.png")} style={styles.image} />
      <Text style={styles.title}>Iniciar sesión</Text>
      <Form showNameInput={false} onSubmit={handleLogin} />
      <Text style={styles.linkText}>No tienes una cuenta? 
        <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate("SignUpScreen")}>
          <Text style={styles.link}> Registrate</Text>
        </TouchableOpacity>
      </Text>
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
  image: {
    width: 175,
    height: 175,
    marginBottom: 15,
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
    marginTop: 20,
    color: '#4B67FF',
    fontWeight: 'light',
  },
  linkButton: {
    marginTop: 20,
    color: '#4B67FF',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
