import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { ProgressBar as PaperProgressBar } from 'react-native-paper';

interface Props {
  current: number;
  total: number;
}

export default function CustomProgressBar({ current, total }: Props) {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/iguana.png')} style={styles.image} />
      <PaperProgressBar progress={current / total} color="#0ECE91" style={styles.bar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  bar: {
    height: 10,
    flex: 1,
  },
});
