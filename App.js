import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/config/redux/app/store';
import BottomNavbarStack from './src/navigator/BottomNavbarStack';
import CreateAccount from './src/pages/CreateAccount';
import Home from './src/pages/Home';

import LandingPage from './src/pages/LandingPage';
import Login from './src/pages/Login';
import Register from './src/pages/Register';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BottomNavbarStack">
          <Stack.Screen
            name="LandingPage"
            component={LandingPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CreateAccount"
            component={CreateAccount}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          /> */}
          <Stack.Screen
            name="BottomNavbarStack"
            component={BottomNavbarStack}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
