import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import RootNavigation from './src/navigators/rootNavigation';
import { store } from './src/store/store';

const App = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
