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
        width: 120,
        height: 110,
        margin: 5, // Aumenta el espacio entre las tarjetas a 5
        borderWidth: 5,
        borderColor: "#588BD6",
        borderRadius: 25,
        backgroundColor: "#4A8CF0",
    },
    cardDown: {
        width: 120,
        height: 110,
        margin: 5, // Aumenta el espacio entre las tarjetas a 5
        borderWidth: 5,
        borderColor: '#588BD6',
        borderRadius: 25,
        backgroundColor: "#4A8CF0",
    },
    text: {
        fontSize: 70,
        color: "white",
        textAlign: "center",
    },

});
