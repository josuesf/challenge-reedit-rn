/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Navigation} from './src/navigation';
import {LogBox} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import theme from './src/commons/Theme';

LogBox.ignoreLogs(['EventEmitter.removeListener']);
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
