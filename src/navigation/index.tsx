/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useMemo, useRef} from 'react';
import {View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginComponent from '../screens/loginComponent';
import RegisterComponent from '../screens/registerComponent';
import FlashMessage from 'react-native-flash-message';
import WelcomeScreen from '../screens/welcomeScreeen';
import {useAuth0} from 'react-native-auth0';
import DashboardScreen from '../screens/dashboardScreen';

const Stack = createNativeStackNavigator();

function Navigator(): JSX.Element {
  const {user} = useAuth0();
  console.log(user);
  // const isDarkMode = useColorScheme() === 'dark';
  //   const myLocalFlashMessage = useRef('myLocalFlashMessage');
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  const route = useMemo(() => {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={user?.sub ? 'dashboard' : 'welcome'}
          screenOptions={{headerShown: false}}>
          {user?.sub ? (
            <Stack.Screen name="dashboard" component={DashboardScreen} />
          ) : (
            <Stack.Screen name="welcome" component={WelcomeScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }, [user]);
  return route;
}

export default Navigator;
