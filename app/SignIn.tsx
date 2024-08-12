import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Form from '@/components/Form';
import { containerStyles } from '@/constants/Containers';
import { fontStyle } from '@/constants/FontStyles';
import { signInWithEmailAndPassword } from 'firebase/auth';
import ErrorPopup from '@/components/ErrorPopup';
import Buttons from '@/components/Buttons';
import { auth } from './auth/firebase';

const SignIn: React.FC = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.navigate("Home");
      })
      .catch(() => {
        setError("Usuario o contraseña incorrecto");
      });
  };

  const handleCloseError = () => setError(null);

  return (
    <View style={containerStyles.container}>
      <Image source={require('@/assets/images/iniciosesion.png')} style={containerStyles.image} />
      <Text style={fontStyle.headlineFont}>Iniciar sesión</Text>
      <Form showNameInput={false} isSignUp={false} onSubmit={handleLogin} onError={setError} />
      <Text style={fontStyle.haveAccountText}>
        No tienes una cuenta?{' '}
        <TouchableOpacity onPress={() => router.navigate("SignUp")}>
          <Text style={fontStyle.haveAccount2Text}>Regístrate</Text>
        </TouchableOpacity>
      </Text>
      <TouchableOpacity onPress={() => router.navigate("ResetPasswordPage")}>
        <Text style={fontStyle.haveAccount2Text}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>

      <Buttons />
      <ErrorPopup isVisible={!!error} message={error || ''} onClose={handleCloseError} />
    </View>
  );
};

export default SignIn;
