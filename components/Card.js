/** */
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export default function Card({ onPress, isTurnedOver, children }) {
    return (
        <Pressable onPress={onPress} style={isTurnedOver ? styles.cardUp : styles.cardDown}>
            {isTurnedOver ? (
                <Text style={styles.text}>{children}</Text>
            ) : (
                <Text style={styles.text}>?</Text>
            )}
        </Pressable>
    );
}


const styles = StyleSheet.create({
    cardUp: {
        width: 125,
        height: 125,
        margin: 10, // Aumenta el espacio entre las tarjetas a 5
        borderWidth: 5,
        borderColor: "#588BD6",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        backgroundColor: "#4A8CF0",
    },
    cardDown: {
        width: 125,
        height: 125,
        margin: 10, // Aumenta el espacio entre las tarjetas a 5
        borderWidth: 5,
        borderColor: '#588BD6',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        backgroundColor: "#4A8CF0",
    },
    text: {
        fontSize: 85,
        color: "white",
    },
});
