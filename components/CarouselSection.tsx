import React from "react";
import { View, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Text } from "react-native-paper";

const { width: screenWidth } = Dimensions.get("window");

interface CarouselItem {
  title: string;
  backgroundColor: string;
  image: any; 
}

interface Props {
  onExplorePress?: () => void;
}

const CarouselSection: React.FC<Props> = ({ onExplorePress }) => {
  const data: CarouselItem[] = [
    {
      title: "Explorando Tu Bienestar",
      backgroundColor: "#4A8CF0",
      image: require("../assets/images/animal.png"), 
    },
    {
      title: "Inicia Un Nuevo Memorama",
      backgroundColor: "#4BB8C7",
      image: require("../assets/images/abuelos.png"),
    },
  ];

  const renderItem = ({ item, index }: { item: CarouselItem; index: number }) => (
    <TouchableOpacity
      style={[
        styles.item,
        { backgroundColor: item.backgroundColor, borderRadius: 20 },
        index === 0 && { justifyContent: "flex-start", alignItems: "flex-start" },
      ]}
      onPress={() => {
        if (index === 0 && onExplorePress) {
          onExplorePress();
        }
      }}
    >
      <Text style={styles.title}>{item.title}</Text>
      {item.image ? (
        <Image source={item.image} style={styles.carouselImage} />
      ) : (
        <Text>Image Not Found</Text> // Example fallback for debugging
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        itemWidth={screenWidth * 0.9}
        inactiveSlideOpacity={1}
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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
