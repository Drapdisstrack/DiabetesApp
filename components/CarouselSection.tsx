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

interface NavigationCallbacks {
  profile: () => void;
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

  const renderItem = ({ item, index }: { item: CarouselItem; index: number }) => (
    <TouchableOpacity
      style={[
        styles.item,
        { backgroundColor: item.backgroundColor, borderRadius: 20 },
        index === 0 && { justifyContent: "center", alignItems: "center" },
      ]}
      onPress={() => {
        if (index === 0) {
          navigationCallbacks.profile();
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
      <Carousel
        data={data}
        renderItem={renderItem}
        width={screenWidth * 0.9}
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 210, // Altura fija, puedes ajustarla según tus necesidades
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    borderRadius: 20,
    height: 200,
    width: screenWidth * 0.89, // Ajusta el ancho del ítem
    padding: 20,
    marginTop: 10,
    marginRight: 10,
    justifyContent: "center", // Centra el contenido verticalmente
    alignItems: "center", // Centra el contenido horizontalmente
    position: "relative",
    overflow: "hidden", // Asegura que el contenido no se desborde
  },
  carouselImage: {
    position: "absolute",
    bottom: -20, // Alinea la imagen en la parte inferior
    right: 0, // Alinea la imagen a la derecha
    width: "50%", // Ajusta el ancho para que ocupe la mitad del contorno
    height: "100%", // Asegura que la imagen ocupe toda la altura del contorno
    resizeMode: "contain", // Ajusta la imagen dentro del contorno
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "left", // Alinea el texto a la izquierda
    position: "absolute", // Posiciona el título
    top: 20, // Ajusta según sea necesario
    left: 20, // Ajusta según sea necesario
  },
});

export default CarouselSection;
