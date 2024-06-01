import { buttonStyle } from '@/constants/Buttons';
import Colors from '@/constants/Colors';
import { typography } from '@/constants/Typograhpy';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';



const App = () => {
  return (
    <View style={styles.view}>
      <Button 
        style={buttonStyle.primary}
        onPress={() => console.log('Primary Button Pressed')}
        mode='contained'
      >
      <Text style={textStyles.secondary}>Iniciar Sesion</Text>
      </Button>
      <Button 
        style={buttonStyle.secondary}
        onPress={() => console.log('Secondary Button Pressed')}
        mode='contained'
      >
      <Text style={textStyles.primary}>Registrarse</Text>
      </Button>
      <Button 
        style={buttonStyle.tertiary}
        onPress={() => console.log('Primary Button Pressed')}
        mode='contained'
      >
      <Text style={typography.h4}>Iniciar Sesion</Text>
      </Button>
      <Button 
        style={buttonStyle.success}
        onPress={() => console.log('Primary Button Pressed')}
        mode='contained'
      >
      <Text style={textStyles.secondary}>Iniciar Sesion</Text>
      </Button>
      
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  view: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  }
})


const textStyles = StyleSheet.create({
  primary: {
    color: Colors.FontDark,
    fontWeight: 'bold',
    fontSize: 20,
  },
  secondary: {
    color: Colors.FontWhite,
    fontWeight: 'bold',
    fontSize: 20,
  },
});