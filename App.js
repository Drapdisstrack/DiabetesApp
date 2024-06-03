// App.js
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import MainComponent from '../Memorama/views/Home';

const App = () => {
  return (
    <PaperProvider>
      <MainComponent />
    </PaperProvider>
  );
};

export default App;
