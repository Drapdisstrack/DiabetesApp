import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import Buttons from './Buttons';
import { buttonStyles } from '@/constants/Buttons';

interface ErrorPopupProps {
  isVisible: boolean;
  message: string;
  onClose: () => void;
}

const ErrorPopup: React.FC<ErrorPopupProps> = ({ isVisible, message, onClose }) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose} onBackButtonPress={onClose}>
      <View style={styles.modalContainer}>
        <Text style={styles.errorText}>Error</Text>
        <Text style={styles.messageText}>{message}</Text>
        <TouchableOpacity style={buttonStyles.error} onPress={onClose}>
          <Text style={styles.closeButtonText}>Cerrar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  errorText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 10,
  },
  messageText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ErrorPopup;
