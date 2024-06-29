import React from "react";
import { View, StyleSheet, StatusBar, TouchableWithoutFeedback } from "react-native";
import { Avatar, Text } from "react-native-paper";
import { useRouter } from "expo-router";
import CarouselSection from "@/components/CarouselSection";
import NewsSection from "@/components/NewsSection";

const HomeScreen: React.FC = () => {
  const router = useRouter();

  const handleAvatarPress = () => {
    router.navigate("Profile");
  };


  const handleMemoramaPress = () => {
    router.navigate("Memorama");
  };

  const handleExploreQuizPress = () => {
    router.navigate("QuizScreen");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.textContainer}>
        <Text style={[styles.headerText, styles.margin]}>Buenos Dias,</Text>
        <TouchableWithoutFeedback onPress={handleAvatarPress}>
          <View style={styles.avatarContainer}>
            <Avatar.Image
              size={55}
              source={require("../assets/images/profile.png")}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.nameContainer}>
        <Text style={[styles.nameText, styles.margin]}>Diego Burgos,</Text>
        <Text style={[styles.headerText, styles.margin]}>
          Entretenimiento Interactivo
        </Text>
      </View>
      <CarouselSection 
        navigationCallbacks={{
          quiz: handleExploreQuizPress,
          memorama: handleMemoramaPress,
        }}
      />
      <View style={styles.newsContainer}>
        <Text style={[styles.newsHeader, styles.marginTop]}>Noticias</Text>
        <NewsSection />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: "#FFFFFF", // Fondo blanco
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 10,
  },
  nameText: {
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 10,
  },
  margin: {
    marginLeft: 10,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Alinear elementos al extremo
    marginTop: 70,
    marginBottom: -20,
    marginLeft: 20,
    marginRight: 20,
  },
  avatarContainer: {
    marginBottom: 20,
  },
  nameContainer: {
    marginLeft: 20,
    marginTop: 10,
  },
  newsContainer: {
    marginTop: 0,
    marginLeft: 20,
  },
  newsHeader: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
  },
  marginTop: {
    marginTop: 10,
    marginLeft: 20,
  },
});

export default HomeScreen;
