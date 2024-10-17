import { buttonStyles } from '@/constants/Buttons';
import { containerStyles } from '@/constants/Containers';
import { fontStyle } from '@/constants/FontStyles';
import { router } from 'expo-router';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const LevelCompleted: React.FC = () => {

  const onContinuePressed = () => {
    router.back();
  }

  return (
    <View style={containerStyles.container}>
      <Text style={fontStyle.headlineFont}>Nivel Completado</Text>
      <Image
        source={require('../assets/images/levelComplete.png')} 
        style={containerStyles.levelCompletedImage}
      />
      <TouchableOpacity style={buttonStyles.primary} onPress={onContinuePressed}>
          <Text style={fontStyle.primaryButtonFont}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LevelCompleted;
