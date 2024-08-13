import { buttonStyles } from '@/constants/Buttons';
import { containerStyles } from '@/constants/Containers';
import { fontStyle } from '@/constants/FontStyles';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const LevelCompleted: React.FC = () => {
  return (
    <View style={containerStyles.container}>
        <Text style={fontStyle.headlineFont}>Nivel Completado</Text>
        <Image
          source={require('../assets/images/levelComplete.png')} 
          style={containerStyles.levelCompletedImage}
        />
      <TouchableOpacity style={buttonStyles.primary}>
          <Text style={fontStyle.primaryButtonFont}>Continuar</Text>
        </TouchableOpacity>
    </View>
  );
};

export default LevelCompleted;
