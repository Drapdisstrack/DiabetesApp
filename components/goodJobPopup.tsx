import { containerStyles } from '@/constants/Containers';
import { fontStyle } from '@/constants/FontStyles';
import React from 'react';
import { View, Image, Text } from 'react-native';
import { Button, Modal, Title} from 'react-native-paper';

interface Props {
  visible: boolean;
  onClose: () => void;
}

export default function SuccessPopup({ visible, onClose }: Props) {
  return (
    <Modal visible={visible} onDismiss={onClose} contentContainerStyle={containerStyles.simpleContainer}>
      <View style={containerStyles.blueTopContainer}>
        <Image
          source={require('@/assets/images/trophy.png')} 
          style={containerStyles.trophyImage}
        />
      </View>
      <View style={containerStyles.whiteBottomContainer}>
        <Title style={fontStyle.headlineFont}>¡Buen Trabajo!</Title>
        <Image source={require('@/assets/images/estrellas.png')} style={containerStyles.starImage} />  
        <Text style={fontStyle.textFieldFont}>+10 de experiencia</Text>
      </View>     
    </Modal>
  );
};
