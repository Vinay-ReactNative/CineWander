import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StackNavigation } from './src/Navigation/StackNavigation'
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './src/Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer >
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  )
}

export default App