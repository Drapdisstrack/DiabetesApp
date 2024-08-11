import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/app/auth/firebase';
import { fontStyle } from '@/constants/FontStyles';
import { buttonStyles } from '@/constants/Buttons';
import { containerStyles } from '@/constants/Containers';

interface ResetPasswordProps {
  onSuccess: () => void;
  onError: (message: string) => void;
  onClose: () => void;
}

const ResetPassword: React.FC<ResetPasswordProps> = ({ onSuccess, onError, onClose }) => {
  const [email, setEmail] = useState<string>('');

  const handlePasswordReset = () => {
    if (!email) {
      onError("Por favor ingrese un correo electrónico.");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        onSuccess();
      })
      .catch(() => {
        onError("Error al enviar el correo de recuperación.");
      });
  };

  return (
    <View style={containerStyles.formContainer}>
      <TextInput
        style={fontStyle.textInput}
        placeholder="Ingresa tu correo electrónico"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={setEmail}
        value={email}
      />
        <View style={containerStyles.buttonsContainer}>
            <TouchableOpacity style={buttonStyles.primary} onPress={handlePasswordReset}>
                <Text style={fontStyle.primaryButtonFont}>Enviar correo de recuperación</Text>
            </TouchableOpacity>
        </View>

    </View>
  );
};



export default ResetPassword;
