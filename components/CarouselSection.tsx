import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons"; // Asegúrate de tener esta librería instalada

const { width: screenWidth } = Dimensions.get("window");

interface CarouselItem {
  title: string;
  backgroundColor: string;
  image: any;
}

interface NavigationCallbacks {
  quiz: () => void;
  memorama: () => void;
}

interface Props {
  navigationCallbacks: NavigationCallbacks;
}

const CarouselSection: React.FC<Props> = ({ navigationCallbacks }) => {
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

  const carouselRef = useRef<any>(null); // Crea una referencia para el carrusel

  const goToNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next(); // Llama a la función `next` en el carrusel
    }
  };

  const goToPrevious = () => {
    if (carouselRef.current) {
      carouselRef.current.prev(); // Llama a la función `prev` en el carrusel
    }
  };

  const renderItem = ({ item, index }: { item: CarouselItem; index: number }) => (
    <TouchableOpacity
      style={[
        styles.item,
        { backgroundColor: item.backgroundColor, borderRadius: 20 },
        index === 0 && { justifyContent: "center", alignItems: "center" },
      ]}
      onPress={() => {
        if (index === 0) {
          navigationCallbacks.quiz();
        } else if (index === 1) {
          navigationCallbacks.memorama();
        }
      }}
    >
      <Text style={styles.title}>{item.title}</Text>
      {item.image ? (
        <Image source={item.image} style={styles.carouselImage} />
      ) : (
        <Text>Image Not Found</Text>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrowLeft} onPress={goToPrevious}>
        <Icon name="chevron-left" size={33} color="white" />
      </TouchableOpacity>
      
      <Carousel
        ref={carouselRef} // Añade la referencia al carrusel
        data={data}
        renderItem={renderItem}
        width={screenWidth * 0.9}
        loop={true}
      />
      
      <TouchableOpacity style={styles.arrowRight} onPress={goToNext}>
        <Icon name="chevron-right" size={33} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 210, 
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    borderRadius: 20,
    height: 200,
    width: screenWidth * 0.89, 
    padding: 20,
    marginTop: 10,
    marginRight: 10,
    justifyContent: "center", 
    alignItems: "center", 
    position: "relative",
    overflow: "hidden", 
  },
  carouselImage: {
    position: "absolute",
    bottom: -20, 
    right: 40, 
    width: "50%", 
    height: "100%", 
    resizeMode: "contain", 
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "left",
    position: "absolute", 
    top: 20, 
    left: 20, 
  },
  arrowLeft: {
    position: "absolute",
    top: "45%",
    left: 25,
    zIndex: 1,
    borderRadius: 20,

    padding: 5,
  },
  arrowRight: {
    position: "absolute",
    top: "45%",
    right: 29,
    zIndex: 1,
    borderRadius: 20,

    padding: 5,
  },
});

export default CarouselSection;
