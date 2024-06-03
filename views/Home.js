// MainComponent.js
import React from "react";
import { View, StyleSheet } from "react-native";
import { IconButton, Text, Button } from "react-native-paper";
import CarouselSection from "../components/CarouselSection";
import NewsSection from "../components/NewsSection";
import { useNavigation } from "@react-navigation/native";

const MainComponent = () => {
  const navigation = useNavigation();

  const handleExplorePress = () => {
    // Navegar a la pantalla deseada al presionar el primer item del carrusel
    navigation.navigate("Memorama");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton
          icon="menu"
          onPress={() => console.log("Menu button pressed")}
          style={styles.menuButton}
          size={30}
        />
      </View>

      <View style={styles.textos}>
        <Text style={[styles.headerText, styles.margin]}>Buenos Dias,</Text>
        <Text style={[styles.nameText, styles.margin]}>Diego Burgos,</Text>
        <Text style={[styles.headerText, styles.margin]}>
          Entretenimiento Interactivo
        </Text>
      </View>

      <CarouselSection onExplorePress={handleExplorePress} />

      <View style={styles.textos}>
        <Text style={[styles.newsHeader, styles.marginTop]}>Noticias</Text>

        <NewsSection />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  header: {
    marginLeft: 15,
    marginTop: 20,
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
  textos: {
    marginTop: 10,
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

export default MainComponent;