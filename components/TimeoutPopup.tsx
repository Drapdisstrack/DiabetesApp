import { containerStyles } from '@/constants/Containers';
import { fontStyle } from '@/constants/FontStyles';
import React from 'react';
import { View } from 'react-native';
import { Button, Modal, Title, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';

interface Props {
  visible: boolean;
  experienceWon: number;
  level: number;
  experience: number;
  onRestart: () => void;
  onEnd: () => void;
}

export default function TimeoutPopup({ visible, experienceWon, level, experience, onRestart, onEnd }: Props) {
  
  return (
    <Modal visible={visible} onDismiss={onRestart} contentContainerStyle={containerStyles.simpleContainer}>
      <View style={containerStyles.popupContainer}>
        <Title style={fontStyle.blackTextFont}>Se acabó el tiempo</Title>  
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyText}>¡Excelente! Ganaste {experienceWon} puntos de experiencia.{"\n"}
            Ahora tienes {experience} puntos de experiencia y eres nivel {level}.{"\n"}
            ¿Quieres reiniciar el juego?
          </Text>
        </View>
        <View style={styles.buttonsRow}>
          <Button labelStyle={styles.button} onPress={onEnd}>Salir</Button>
          <Button labelStyle={styles.button} onPress={onRestart}>Reiniciar</Button>
        </View>
      </View>  
    </Modal>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    paddingVertical: 20
  },
  bodyText: {
    fontSize: 18,
    textAlign: "auto"
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: 'flex-end',
    width: "100%"
  },
  button: {
    fontSize: 18
  }
});