import { useIsFocused } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';

interface Props {
  duration: number;
  onFinish: () => void;
}

export default function  Timer({ duration, onFinish }: Props) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      if (timeLeft > 0) {
        const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timerId);
      } else {
        onFinish();
      }
    }
  }, [timeLeft, isFocused, onFinish]);

  return <Text style={styles.timer}>{`${Math.floor(timeLeft / 60)}:${('0' + timeLeft % 60).slice(-2)}`}</Text>;
}

const styles = StyleSheet.create({
  timer: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
