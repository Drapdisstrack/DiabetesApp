import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Form from "@/components/Form";
import { containerStyles } from "@/constants/Containers";
import { fontStyle } from "@/constants/FontStyles";
import { auth } from './auth/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import ErrorPopup from '../components/ErrorPopup';
import Buttons from '@/components/Buttons';

const SignIn: React.FC = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.navigate("Home");
      }).catch((error) => {
        setError("Usuario o contraseña incorrecto");
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
      <Image source={require("../assets/images/iniciosesion.png")} style={containerStyles.image} />
      <Text style={fontStyle.headlineFont}>Iniciar sesión</Text>
      <Form showNameInput={false} showConfirmPassword={false} onSubmit={handleLogin} onError={handleError} />
      <Text style={fontStyle.haveAccountText}>
        No tienes una cuenta?{' '}
        <TouchableOpacity onPress={() => router.navigate("SignUp")}>
          <Text style={fontStyle.haveAccount2Text}>Regístrate</Text>
        </TouchableOpacity>
      </Text>
      <Buttons />
      <ErrorPopup isVisible={!!error} message={error || ''} onClose={handleCloseError} />
    </View>
  );
};

export default SignIn;
