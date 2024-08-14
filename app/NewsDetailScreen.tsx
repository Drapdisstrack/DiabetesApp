import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { useLocalSearchParams } from 'expo-router';

const NewsDetailScreen: React.FC = () => {
    const { url } = useLocalSearchParams();
    const finalUrl = Array.isArray(url) ? url[0] : url;
  
    console.log("Final URL:", finalUrl); // Depuración
  
    return (
      <View style={styles.container}>
        <WebView 
          source={{ uri: finalUrl || 'https://udgtv.com/noticias/advierte-de-medicamento-pirata-e-ilegal-para-diabetes-tipo-2/234988' }} 
          style={styles.webview}
        />
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: -20,
  },
  webview: {
    marginTop: 70,
    flex: 1,
  },
});

export default NewsDetailScreen;