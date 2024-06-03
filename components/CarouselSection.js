// CarouselSection.js
import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import Carousel from "react-native-snap-carousel";
import { Text } from "react-native-paper";

const { width: screenWidth } = Dimensions.get("window");

const CarouselSection = () => {
  const data = [
    {
      title: "Explorando Tu Bienestar",
      backgroundColor: "#4A8CF0",
      image: require("../images/animal.png"), // Example image path
    },
    {
      title: "Inicia Un Nuevo Memorama",
      backgroundColor: "#4BB8C7",
      image: require("../images/abuelos.png"), // Example image path
    },
    // Add more items as needed
  ];

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.item,
        { backgroundColor: item.backgroundColor, borderRadius: 20 },
      ]}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Image source={item.image} style={styles.carouselImage} />
    </View>
  );

  return (
    <View>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth * 0.9}
        layout="default"
        inactiveSlideScale={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    borderRadius: 20,
    height: 200,
    padding: 20,
    marginTop: 10,
    marginRight: 10,
    position: "relative",
  },
  carouselImage: {
    position: "absolute",
    bottom: -30,
    right: 10,
    width: 175,
    height: 175,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

export default CarouselSection;
