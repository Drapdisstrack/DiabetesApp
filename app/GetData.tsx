import React from "react";
import { Image, View, Text,} from "react-native";
import PersonalDataForm from "../components/PersonalDataForm";
import NextButton from "../components/NextButton";
import { useRouter } from "expo-router";
import { containerStyles } from "@/constants/Containers";
import { fontStyle } from "@/constants/FontStyles";


const GetData: React.FC = () => {
  const router = useRouter();

  const handleGetData = () => {
    router.navigate("Gender");
  };   
    
  return (
    <View style={containerStyles.container}>
      <Image source={require("../assets/images/data.png")} style={containerStyles.image} />
      <Text style={fontStyle.headlineFontData}>Ingrese sus datos personales</Text>
      <PersonalDataForm />
      <NextButton onSubmit={handleGetData} />
    </View>
  );
};

export default GetData;