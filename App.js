import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/config/redux/app/store';
import BottomNavbarStack from './src/navigator/BottomNavbarStack';
import {BookingConfirmation, NavigationPage} from './src/pages';
import CreateAccount from './src/pages/CreateAccount';

import LandingPage from './src/pages/LandingPage';
import Login from './src/pages/Login';
import Register from './src/pages/Register';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LandingPage">
          <Stack.Screen
            name="LandingPage"
            component={LandingPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="NavigationPage"
            component={NavigationPage}
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
          <Stack.Screen
            name="BookingConfirmation"
            component={BookingConfirmation}
            options={{headerShown: false}}
          />
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

export default App;
