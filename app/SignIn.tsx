import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Buttons from "../components/Buttons";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import Form from "@/components/Form";
import { containerStyles } from "@/constants/Containers";
import { fontStyle } from "@/constants/FontStyles";

const SignIn: React.FC = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.navigate("QuizScreen")
  };

  return (
    <View style={containerStyles.container}>
      <Image source={require("../assets/images/iniciosesion.png")} style={containerStyles.image} />
      <Text style={fontStyle.headlineFont}>Iniciar sesión</Text>
      <Form showNameInput={false} onSubmit={handleLogin} />
      <Text style={fontStyle.haveAccountText}>
        No tienes una cuenta?{' '}
        <TouchableOpacity onPress={() => router.navigate("SignUp")}>
          <Text style={fontStyle.haveAccount2Text}>Regístrate</Text>
        </TouchableOpacity>
      </Text>
      <Buttons />
    </View>
  );
};

export default SignIn;
