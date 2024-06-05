import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GlucoGuia</Text>
      <Text style={styles.subtitle}>Comencemos!</Text>
      <Text style={styles.description}>Registrate Y Comienza Tu Nueva Vida Saludable!</Text>
      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={() => navigation.navigate("SignInScreen")}
      >
        <Text style={styles.buttonPrimaryText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => navigation.navigate("SignUpScreen")}
      >
        <Text style={styles.buttonSecondaryText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5', // Fondo 
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#4B67FF', // Color del título
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000', // Color del subtítulo
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#808080', // Color de la descripción
    marginBottom: 30,
  },
  buttonPrimary: {
    backgroundColor: '#4B67FF',
    paddingVertical: 15,
    width: 250,
    borderRadius: 20,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPrimaryText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  buttonSecondary: {
    backgroundColor: '#FFFFFF',
    borderColor: '#4B67FF',
    borderWidth: 1,
    width: 250,
    paddingVertical: 15,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSecondaryText: {
    color: '#4B67FF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default Welcome;

