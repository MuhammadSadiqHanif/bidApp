/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, Text} from 'react-native';
import Navigator from './src/navigation';
import {Auth0Provider} from 'react-native-auth0';

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  // return <Navigator />;
  return (
    <Auth0Provider
      domain={'dev-d7uehcl57ysmt1sv.us.auth0.com'}
      clientId={'2DCw2ISNStMZPLpNIhgt8N7f16kY8eJV'}>
      <Navigator />
    </Auth0Provider>
  );
}

export default App;
