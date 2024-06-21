import React from "react";
import { View, Text} from "react-native";
import { useRouter } from "expo-router";
import WelcomeButtons from "@/components/WelcomeButtons";
import { containerStyles } from "@/constants/Containers";
import { fontStyle } from "@/constants/FontStyles";

const index: React.FC = () => {
  const router = useRouter();

  return (
    <View style={containerStyles.container}>
      <Text style={fontStyle.appNameFont}>GlucoGuia</Text>
      <Text style={fontStyle.comencemosFont}>¡Comencemos!</Text>
      <Text style={fontStyle.descriptionFont}>¡Regístrate y comienza tu nueva vida saludable!</Text>
      <WelcomeButtons></WelcomeButtons>
    </View>
  );
};

export default index;
