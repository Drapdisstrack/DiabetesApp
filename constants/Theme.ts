import { DefaultTheme } from 'react-native-paper';

export const LightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
    surface: '#FFFFFF',
    text: '#000000',
  },
};
