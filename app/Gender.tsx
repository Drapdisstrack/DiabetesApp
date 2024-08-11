import React, { useState } from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import NextButton from "../components/NextButton";
import { containerStyles } from "@/constants/Containers";
import { fontStyle } from "@/constants/FontStyles";
import { buttonStyles } from "@/constants/Buttons";
import { auth, db } from "./auth/firebase";
import { doc, updateDoc } from "firebase/firestore";

interface GenderProps {
  navigation: any;
}

const Gender: React.FC<GenderProps> = ({ navigation }) => {
  const router = useRouter();  
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  const handleSelectGender = (gender: string) => {
    setSelectedGender(gender);
  };

  const handleSubmit = async () => {
    const user = auth.currentUser;
    if (user && selectedGender) {
      const userDoc = doc(db, "users", user.uid);
      await updateDoc(userDoc, {
        gender: selectedGender
      });
      router.navigate("Birthdate");
    }
  };

  return (
    <View style={containerStyles.container}>
      <Image source={require("../assets/images/gender.png")} style={containerStyles.image} />
      <Text style={fontStyle.headlineFont}>Escoja su género</Text>
      <TouchableOpacity
        style={[buttonStyles.gender, selectedGender === "Masculino" && buttonStyles.boy]}
        onPress={() => handleSelectGender("Masculino")}
      >
        <Text style={fontStyle.blackTextFont}>Masculino</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[buttonStyles.gender, selectedGender === "Femenino" && buttonStyles.girl]}
        onPress={() => handleSelectGender("Femenino")}
      >
        <Text style={fontStyle.blackTextFont}>Femenino</Text>
      </TouchableOpacity>
      <NextButton onSubmit={handleSubmit} />
    </View>
  );
};


export default Gender;