// NewsSection.js
import React from "react";
import { View, StyleSheet, Dimensions, ScrollView, Image } from "react-native";
import { IconButton, Text } from "react-native-paper";

const { height: screenHeight } = Dimensions.get("window");

const NewsSection = () => {
  const newsData = [
    {
      title: "Diabetes Tipo 1",
      description: "Más Información",
      icon: "dots-vertical",
      image: require("../images/insulina.png"), // Local image path
      backgroundColor: "#4BC6B9", // Background color
    },
    {
      title: "Diabetes En Personas Mayores",
      description: "Más Información",
      icon: "dots-vertical",
      image: require("../images/abuelos.png"), // Local image path
      backgroundColor: "#CA00DC", // Background color
    },
    {
      title: "Alimentación recomendada",
      description: "Más Información",
      icon: "dots-vertical",
      image: require("../images/comida.png"), // Local image path
      backgroundColor: "#EEA63A", // Background color
    },
    // Add more items as needed
  ];

  return (
    <ScrollView style={styles.newsContainer}>
      {newsData.map((item, index) => (
        <View key={index} style={styles.newsItem}>
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
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  newsContainer: {
    maxHeight: screenHeight * 0.39,
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
