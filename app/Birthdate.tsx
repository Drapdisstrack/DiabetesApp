// src/components/BirthdateScreen.tsx
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { View, StyleSheet, Image, Text } from "react-native";
import DatePicker from "../components/DatePicker";
import NextButton from "../components/NextButton";
import { containerStyles } from "@/constants/Containers";
import { fontStyle } from "@/constants/FontStyles";
import { buttonStyles } from "@/constants/Buttons";

const BirthdateScreen: React.FC = () => {
  const router = useRouter(); 
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleInputChange = (field: string, value: string) => {
    if (field === "day") {
      setDay(value);
    } else if (field === "month") {
      setMonth(value);
    } else if (field === "year") {
      setYear(value);
    }
  };

  const handleSubmit = () => {
    // Lógica para manejar el submit de la fecha de nacimiento
    console.log({ day, month, year });
    router.navigate("Home"); 
  };

  return (
    <View style={containerStyles.container}>
      <Image source={require("../assets/images/date.png")} style={containerStyles.image} />
      <Text style={fontStyle.headlineFontData}>Seleccione su fecha de nacimiento</Text>
      <DatePicker day={day} month={month} year={year} onChange={handleInputChange} />
      <NextButton onSubmit={handleSubmit} />
    </View>
  );
};


export default BirthdateScreen;
