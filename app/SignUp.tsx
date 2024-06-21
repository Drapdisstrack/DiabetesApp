import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import Form from "../components/Form";
import Buttons from "../components/Buttons";
import { useRouter } from "expo-router";
import { containerStyles } from "@/constants/Containers";
import { fontStyle } from "@/constants/FontStyles";


const SignUp: React.FC = () => {
  const router = useRouter();

  const handleSignUp = () => {
    router.navigate("Home");
  };   
    
  return (
    <View style={containerStyles.container}>
      <Text style={fontStyle.headlineFont}>Registrarse</Text>
      <Form showNameInput={true} onSubmit={handleSignUp} />
      <Text style={fontStyle.haveAccountText}>¿Tienes una cuenta? {' '}
        <TouchableOpacity onPress={() => router.navigate("SignIn")}>
          <Text style={fontStyle.haveAccount2Text}>Inicia Sesión</Text>
        </TouchableOpacity>
      </Text>
      <Buttons />
    </View>
  );
};

export default SignUp;
