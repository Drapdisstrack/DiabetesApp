// LogOutButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { signOut } from 'firebase/auth';
import { buttonStyles } from '@/constants/Buttons';
import { fontStyle } from '@/constants/FontStyles';
import { auth } from '@/app/auth/firebase';

interface LogOutButtonProps {
  onLogOut: () => void;
}

const LogOutButton: React.FC<LogOutButtonProps> = ({ onLogOut }) => {
  const handleLogOut = async () => {
    try {
      await signOut(auth);
      onLogOut(); 
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <TouchableOpacity style={[buttonStyles.error, styles.button]} onPress={handleLogOut}>
      <Text style={fontStyle.primaryButtonFont}>Cerrar Sesión</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
  },
});

export default LogOutButton;
