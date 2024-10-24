// AnimationLoader.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

interface AnimationLoaderProps {
  onAnimationFinish: () => void;
}

const AnimationLoader: React.FC<AnimationLoaderProps> = ({ onAnimationFinish }) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('@/assets/animations/quiz2.json')} 
        autoPlay
        loop={false}
        onAnimationFinish={onAnimationFinish}
        style={{ width: 400, height: 400 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AnimationLoader;
