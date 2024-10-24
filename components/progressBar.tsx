import Colors from '@/constants/Colors';
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { ProgressBar } from "react-native-paper";

interface Props {
  current: number;
  total: number;
}

export default function CustomProgressBar({ current, total }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <ProgressBar progress={current / total} color={Colors.Brand01} style={styles.progressBar} />
        <Image source={require('@/assets/images/iguana.png')} style={[styles.image, { left: `${(current / total) * 100}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBarContainer: {
    width: "80%",
    justifyContent: 'center',
    position: 'relative',
  },
  image: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: -10, 
    marginLeft: -15,
  },
  progressBar: {
    height: 10,
    borderRadius: 25,
  },
});