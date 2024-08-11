import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import ResetPassword from '@/components/ResetPassword';
import { containerStyles } from '@/constants/Containers';
import { fontStyle } from '@/constants/FontStyles';
import ErrorPopup from '@/components/ErrorPopup';
import SuccessPopup from '@/components/SuccessPopup';
import Colors from '@/constants/Colors';

const ResetPasswordPage: React.FC = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showResetPassword, setShowResetPassword] = useState(true);

  const handleSuccess = () => {
    setSuccess("Correo de recuperación enviado.");
    setShowResetPassword(false);
    setTimeout(() => {
      router.navigate("SignIn");
    }, 2000);
  };

  const handleCloseError = () => setError(null);
  const handleCloseSuccess = () => setSuccess(null);

  return (
    <View style={containerStyles.container}>
      <Image source={require('@/assets/images/resetPassword.png')} style={containerStyles.image} />
      <Text style={fontStyle.headlineFont}>Recuperar Contraseña</Text>

      {showResetPassword && (
        <ResetPassword
          onSuccess={handleSuccess}
          onError={setError}
          onClose={() => setShowResetPassword(false)}
        />
      )}

      <ErrorPopup isVisible={!!error} message={error || ''} onClose={handleCloseError} />
      <SuccessPopup isVisible={!!success} message={success || ''} onClose={handleCloseSuccess} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Background,
  },
  image: {
    width: 175,
    height: 175,
    marginBottom: 20,
  },
});

export default ResetPasswordPage;
