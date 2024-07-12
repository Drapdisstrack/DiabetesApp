import { containerStyles } from '@/constants/Containers';
import { fontStyle } from '@/constants/FontStyles';
import React from 'react';
import { View } from 'react-native';
import { Button, Modal, Title } from 'react-native-paper';

interface Props {
  visible: boolean;
  onClose: () => void;
}

export default function TimeoutPopup({ visible, onClose }: Props) {
    return (
      <Modal visible={visible} onDismiss={onClose} contentContainerStyle={containerStyles.simpleContainer}>
        <View style={containerStyles.popupContainer}>
          <Title style={fontStyle.blackTextFont}>Se acabó el tiempo</Title>    
          <Button onPress={onClose}>Reiniciar</Button>  
        </View>  
      </Modal>
  );
};

