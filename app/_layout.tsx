import React from "react";
import { Stack } from "expo-router";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName="index">
        <Stack.Screen name="SignUp" options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" options={{ title: "SignIn", headerShown: false }} />
        <Stack.Screen name="Memorama" options={{ headerShown: false }} />
        <Stack.Screen name="Home" options={{ headerShown: false }} />
        <Stack.Screen name="Profile" options={{ headerShown: false }} />
        <Stack.Screen name="QuizScreen" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ title: "Welcome", headerShown: false }} />
        <Stack.Screen name="GetData" options={{ headerShown: false }} />
        <Stack.Screen name="Gender" options={{ headerShown: false }} />
        <Stack.Screen name="Birthdate" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
