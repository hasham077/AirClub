import 'react-native-gesture-handler';
import React from 'react';
import {Button, View, Text} from 'react-native';
import Splash from './components/splash';
import Signup from './components/signup'
import Signin from './components/signin';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="splash"
          options={{headerShown: false}}
          component={Splash}
        />
        <Stack.Screen name="signin" component={Signin} />
        <Stack.Screen name="signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
