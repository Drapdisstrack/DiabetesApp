import React from "react";
import { View, StyleSheet } from "react-native";
import {Text } from "react-native-paper";
import { useRouter } from "expo-router";
import CarouselSection from "@/components/CarouselSection";
import NewsSection from "@/components/NewsSection";


const HomeScreen: React.FC = () => {
    const router = useRouter();

  const handleExplorePress = () => {
    router.navigate("Memorama");
  };

  return (
    <View style={styles.container}>

      <View style={styles.textos}>
        <Text style={[styles.headerText, styles.margin]}>Buenos Dias,</Text>
        <Text style={[styles.nameText, styles.margin]}>Diego Burgos,</Text>
        <Text style={[styles.headerText, styles.margin]}>
          Entretenimiento Interactivo
        </Text>
      </View>
      {/* <CarouselSection onExplorePress={handleExplorePress} /> */}
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

export default HomeScreen;
