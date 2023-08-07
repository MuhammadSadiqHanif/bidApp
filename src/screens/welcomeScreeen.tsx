/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import InputComponent from '../components/inputComponent';
import ButtonComponent from '../components/buttonComponent';
import Auth0, {useAuth0} from 'react-native-auth0';

// const auth0 = new Auth0({
//   clientId: '2DCw2ISNStMZPLpNIhgt8N7f16kY8eJV',
//   domain: 'dev-d7uehcl57ysmt1sv.us.auth0.com',
// });
function WelcomeScreen({navigation}: any): JSX.Element {
  const {authorize} = useAuth0();
  let [accessToken, setAccessToken] = useState<any>(null);
  let [loader, setLoader] = useState<boolean>(false);
  const onPress = async () => {
    try {
      setLoader(true);
      await authorize()
        .then((credentials: any) => {
          Alert.alert('AccessToken: ' + credentials.accessToken);
          setAccessToken(credentials.accessToken);
          navigation('dashboard');
          setLoader(false);
        })
        .catch((error: any) => {
          setLoader(false);
          console.log(error);
        });
    } catch (e) {
      setLoader(false);
      console.log(e);
    }
    // auth0.webAuth
    // .authorize({
    //   scope: 'openid profile email',
    // })
    // .then((credentials: any) => {
    //   // Alert.alert('AccessToken: ' + credentials.accessToken);
    //   setAccessToken(credentials.accessToken);
    //   // navigation.navigate('dashboard');
    // })
    // .catch((error: any) => console.log(error));
  };
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Image style={styles.image} source={require('../assets/welcome2.png')} />
      <View style={styles.headerParent}>
        <Text style={styles.heading}>Welcome</Text>
      </View>
      <View style={styles.sectionChild}>
        <View style={styles.bidparent}>
          <Text style={styles.bidHeading}>BID APP</Text>
          <Text style={styles.bidText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt u
          </Text>
        </View>
        <ButtonComponent
          loading={loader}
          value={'Login'}
          type={'outlined'}
          onPress={onPress}
          buttonStyle={{marginTop: 100}}
        />
        {/* <ButtonComponent
          value={'Regiser'}
          type={'outlined'}
          buttonStyle={{marginTop: 20}}
        /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
    // paddingHorizontal: 16,
    // paddingVertical: 14,
    backgroundColor: '#fff',
  },
  bidHeading: {
    fontSize: 36,
    color: '#fff',
    fontWeight: '800',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
  bidText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginTop: 20,
  },
  bidparent: {
    // marginTop: 80,
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },
  sectionChild: {
    width: '94%',
    height: '90%',
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
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
  headerParent: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    textAlign: 'center',
    color: '#fff',
    letterSpacing: 1,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default WelcomeScreen;
