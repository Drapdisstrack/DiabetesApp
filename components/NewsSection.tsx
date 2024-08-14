import React from "react";
import { View, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity } from "react-native";
import { IconButton, Text } from "react-native-paper";
import { useRouter } from "expo-router";

const { height: screenHeight } = Dimensions.get("window");

interface NewsItem {
  title: string;
  description: string;
  icon: string;
  image: any; 
  backgroundColor: string;
  url: string;
}

const newsData: NewsItem[] = [
  {
    title: "Advierte de medicamento pirata e ilegal para diabetes tipo 2",
    description: "Más Información",
    icon: "dots-vertical",
    image: require("../assets/images/insulina.png"),
    backgroundColor: "#4BC6B9",
    url: "https://udgtv.com/noticias/advierte-de-medicamento-pirata-e-ilegal-para-diabetes-tipo-2/234988",
  },
  {
    title: "Diabetes tipo 2",
    description: "Más Información",
    icon: "dots-vertical",
    image: require("../assets/images/abuelos.png"),
    backgroundColor: "#CA00DC",
    url: "https://medlineplus.gov/spanish/diabetestype2.html",
  },
  {
    title: "Alimentación sana y balanceada para una buena salud",
    description: "Más Información",
    icon: "dots-vertical",
    image: require("../assets/images/comida.png"),
    backgroundColor: "#EEA63A",
    url: "https://www.gob.mx/salud/articulos/alimentacion-sana-y-balanceada-para-una-buena-salud#:~:text=reducir%20la%20productividad.-,La%20nutrici%C3%B3n%20adecuada%20se%20refiere%20a%20la%20ingesta%20de%20alimentos,fundamental%20para%20una%20buena%20salud.",
  },
];


const NewsSection: React.FC = () => {
  const router = useRouter();

  const extractNewsTitleFromUrl = (url: string) => {
    const parts = url.split('/');
    const slug = parts[parts.length - 2]; // Extraemos el penúltimo segmento de la URL
    const title = slug.replace(/-/g, ' '); // Reemplazamos los guiones por espacios
    return title.charAt(0).toUpperCase() + title.slice(1); // Capitalizamos la primera letra
  };

  const handleNewsPress = (url: string) => {
    const newsTitle = extractNewsTitleFromUrl(url);
    router.navigate({
      pathname: "NewsDetailScreen",
      params: { url, title: newsTitle },
    });
  };

  return (
    <ScrollView style={styles.newsContainer}>
      {newsData.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => handleNewsPress(item.url)}>
          <View style={styles.newsItem}>
            <View
              style={[
                styles.newsImageContainer,
                { backgroundColor: item.backgroundColor, borderRadius: 20 },
              ]}
            >
              <Image source={item.image} style={styles.newsImage} />
            </View>
            <View style={styles.newsTextContainer}>
              <Text style={styles.newsTitle}>{item.title}</Text>
              <Text style={styles.newsDescription}>{item.description}</Text>
            </View>
            <IconButton icon={item.icon} size={20} />
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  newsContainer: {
    maxHeight: screenHeight * 0.5,
  },
  newsItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  newsImageContainer: {
    borderRadius: 20,
    padding: 15,
    marginRight: 10,
  },
  newsImage: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  newsTextContainer: {
    flex: 1,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  newsDescription: {
    fontSize: 14,
    color: "gray",
  },
});

export default NewsSection;
