import React, { useRef, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Animated } from "react-native";
import LottieView from "lottie-react-native";
import { buttonStyles } from "@/constants/Buttons";
import { containerStyles } from "@/constants/Containers";
import { fontStyle } from "@/constants/FontStyles";
import { router } from "expo-router";

const LevelCompleted: React.FC = () => {
  const translateX = useRef(new Animated.Value(0)).current; 

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: 200, 
        duration: 5000, 
        useNativeDriver: true, 
      })
    ).start(); 
  }, []);

  const onContinuePressed = () => {
    router.back();
  };

  return (
    <View style={containerStyles.container}>
      <Text style={fontStyle.headlineFont}>Nivel Completado</Text>

      <View style={{ position: "relative", width: 300, height: 300 }}>
        <Image
          source={require("../assets/images/chichenItza.png")}
          style={{ width: "100%", height: "100%" }}
        />

        <Animated.Image
          source={require("../assets/images/iguana.gif")}
          style={{
            width: 150,
            height: 150,
            position: "absolute",
            bottom: -20, 
            transform: [{ translateX }], 
          }}
        />

        <LottieView
          source={require("../assets/animations/conffeti2.json")}
          autoPlay
          loop={true}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />

        <LottieView
          source={require("../assets/animations/fireworks2.json")}
          autoPlay
          loop={true}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </View>

      <TouchableOpacity
        style={buttonStyles.primary}
        onPress={onContinuePressed}
      >
        <Text style={fontStyle.primaryButtonFont}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LevelCompleted;
