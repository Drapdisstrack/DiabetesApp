import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Modal, Title, Button } from 'react-native-paper';

interface Props {
  visible: boolean;
  onClose: () => void;
}

export default function SuccessPopup({ visible, onClose }: Props) {
  return (
    <Modal visible={visible} onDismiss={onClose} contentContainerStyle={styles.container}>
      <View>
        <Title>¡Buen trabajo!</Title>
        <Button onPress={onClose}>Cerrar</Button>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});
