import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";

class Buttons extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Image source={require("../images/google.png")} style={styles.buttonIcon} />
          <View style={styles.textContainer}>
            <Text style={styles.buttonText}>Registrate con Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={require("../images/facebook.png")} style={styles.buttonIcon} />
          <View style={styles.textContainer}>
            <Text style={styles.buttonText}>Registrate con Facebook</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    width: '85%',
    paddingVertical: 15,
    marginBottom: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  buttonIcon: {
    width: 20,
    height: 24,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'light',
    color: '#000',
  },
});

export default Buttons;

