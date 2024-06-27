import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import { useRouter } from "expo-router";
import FormProfile from "@/components/FormProfile";
import { containerStyles } from "@/constants/Containers";
import { fontStyle } from "@/constants/FontStyles";

const Profile: React.FC = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.navigate("Home");
  };

  return (
    <View style={containerStyles.container}>
      <Avatar.Image size={150} source={require("../assets/images/profile.png")} />
      <View style={styles.textContainer}>
        <Text style={fontStyle.headlineFont}>Diego</Text>
        <Text style={fontStyle.descriptionFont}>Hombre</Text>
      </View>
      <FormProfile showNameInput={false} onSubmit={handleLogin} editable={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 20,  // Adjust the margin as needed
  },
});

export default Profile;
