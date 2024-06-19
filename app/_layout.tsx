import React from 'react';
import { Stack } from 'expo-router';

const Layout: React.FC = () => {
  return (
    <Stack initialRouteName="Welcome">
      <Stack.Screen name="Welcome" options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" options={{ headerShown: false }} />
      <Stack.Screen name="SignIn" options={{ headerShown: false }} />
      <Stack.Screen name="Home" options={{ headerShown: false }} />
      <Stack.Screen name="Memorama" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
