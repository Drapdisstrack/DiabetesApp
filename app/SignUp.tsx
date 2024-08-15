import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image} from "react-native";
import Form from "../components/Form";
import Buttons from "../components/Buttons";
import { useRouter } from "expo-router";
import { containerStyles } from "@/constants/Containers";
import { fontStyle } from "@/constants/FontStyles";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./auth/firebase";
import ErrorPopup from "@/components/ErrorPopup";
import { doc, setDoc } from "firebase/firestore";

const SignUp: React.FC = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredentials) => {
        const user = userCredentials.user;
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          createdAt: new Date(),
        });
        router.navigate("GetData");
      })
      .catch((error) => {
        setError("Hubo un error, inténtelo nuevamente");
      });
  };

  const handleCloseError = () => {
    setError(null);
  };

  const handleError = (message: string) => {
    setError(message);
  };

  return (
    <View style={containerStyles.container}>
      <Image source={require("../assets/images/registrarse.png")} style={containerStyles.imageRegister} />
      <Text style={fontStyle.headlineFont}>Registrarse</Text>
      <Form showNameInput={false} isSignUp={true} onSubmit={handleSignUp} onError={handleError} />
      <View style={containerStyles.questionContainer1}>
        <Text style={fontStyle.haveAccountText}>
          ¿Ya tienes una cuenta?{" "} </Text>
          <TouchableOpacity onPress={() => router.navigate("SignIn")}>
            <Text style={fontStyle.haveAccount2Text}>Inicia Sesión</Text>
          </TouchableOpacity>
      </View>
      
      <Buttons />
      <ErrorPopup
        isVisible={!!error}
        message={error || ""}
        onClose={handleCloseError}
      />
    </View>
  );
};

export default SignUp;
