import React, { useState } from "react";
import { View, Text, TouchableOpacity} from "react-native";
import Form from "../components/Form";
import Buttons from "../components/Buttons";
import { useRouter } from "expo-router";
import { containerStyles } from "@/constants/Containers";
import { fontStyle } from "@/constants/FontStyles";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./auth/firebase";
import ErrorPopup from "@/components/ErrorPopup";


const SignUp: React.FC = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);


  const handleSignUp = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        router.navigate("GetData");
      }).catch((error) => {
        setError("Hubo un error, intentelo nuevamente");
      });
  };

  const handleCloseError = () => {
    setError(null);
  };
    
  return (
    <View style={containerStyles.container}>
      <Text style={fontStyle.headlineFont}>Registrarse</Text>
      <Form showNameInput={false} onSubmit={handleSignUp} />
      <Text style={fontStyle.haveAccountText}>¿Tienes una cuenta? {' '}
        <TouchableOpacity onPress={() => router.navigate("SignIn")}>
          <Text style={fontStyle.haveAccount2Text}>Inicia Sesión</Text>
        </TouchableOpacity>
      </Text>
      <Buttons />
      <ErrorPopup isVisible={!!error} message={error || ''} onClose={handleCloseError} />
    </View>
  );
};

export default SignUp;
