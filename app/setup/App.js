// In App.js in a new project

import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'react-native';
import primaryTheme from './Theme';
import Home from '../components/Home/Home';



function App() {
  return (
 
      <PaperProvider theme={primaryTheme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={'#212121'}
          translucent={true}
        />
        <Home/>
      </PaperProvider>
    
  );
}

export default App;
