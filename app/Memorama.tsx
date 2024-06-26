import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Memorama: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>MATARON A MI MEMORAMA LOS ODIO</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "limegreen",
    },
    text: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
    },
});

export default Memorama;
