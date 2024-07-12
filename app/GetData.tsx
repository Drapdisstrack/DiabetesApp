import React from "react";
import { Image, View, Text } from "react-native";
import PersonalDataForm from "../components/PersonalDataForm";
import NextButton from "../components/NextButton";
import { useRouter } from "expo-router";
import { containerStyles } from "@/constants/Containers";
import { fontStyle } from "@/constants/FontStyles";
import { auth, db } from "./auth/firebase";
import { updateDoc, doc } from "firebase/firestore";

const GetData: React.FC = () => {
  const router = useRouter();

  const handleGetData = async (name: string, surname: string, state: string) => {
    const user = auth.currentUser;
    if (user) {
      const userDoc = doc(db, "users", user.uid);
      await updateDoc(userDoc, {
        name,
        surname,
        state
      });
      router.navigate("Gender");
    }
  };

  return (
    <View style={containerStyles.container}>
      <Image source={require("../assets/images/data.png")} style={containerStyles.image} />
      <Text style={fontStyle.headlineFontData}>Ingrese sus datos personales</Text>
      <PersonalDataForm onSubmit={handleGetData} />
    </View>
  );
};

export default GetData;
