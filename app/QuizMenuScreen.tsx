import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const QuizMenuScreen: React.FC = () => {
  const handleNewGamePress = () => {
    router.navigate("QuizScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido al Juego</Text>
      <TouchableOpacity style={styles.button} onPress={handleNewGamePress}>
        <Text style={styles.buttonText}>Nuevo Juego</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default QuizMenuScreen;