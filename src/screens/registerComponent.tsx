/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InputComponent from '../components/inputComponent';
import ButtonComponent from '../components/buttonComponent';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
const Stack = createNativeStackNavigator();

function RegisterComponent({navigation}: any): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Image style={styles.image} source={require('../assets/boxShadow.png')} />
      <View style={styles.sectionChild}>
        <Text style={styles.header}>Welcome back! Glad to see you, Again!</Text>
        <Text style={styles.inputText}>Username</Text>
        <InputComponent
          Placeholder={'enter Email'}
          inputStyle={{marginBottom: 10}}
        />
        <Text style={styles.inputText}>Email</Text>
        <InputComponent
          Placeholder={'enter Email'}
          inputStyle={{marginBottom: 10}}
        />
        <Text style={styles.inputText}>Password</Text>
        <InputComponent
          inputStyle={{marginBottom: 10}}
          Placeholder={'Enter Password'}
          secureTextEntry={true}
        />
        <ButtonComponent value={'Login'} buttonStyle={{marginTop: 40}} />
        <View style={styles.account}>
          <Text style={{fontSize: 15, color: '#81818A', fontWeight: '600'}}>
            Don’t have an account ?{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text style={{fontSize: 15, color: '#1DAEFF', fontWeight: '600'}}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 15,
          }}>
          <Text style={{color: '#fff', fontSize: 16}}>Or Signup with</Text>
        </View>
        <View style={styles.socialSection}>
          <View style={styles.socialChild}>
            <Image source={require('../assets/google.png')} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    // paddingHorizontal: 16,
    // paddingVertical: 14,
    backgroundColor: '#000',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },
  account: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  socialSection: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  socialChild: {
    height: 50,
    width: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#141414',
    // borderWidth: 1,
  },
  sectionChild: {
    width: '94%',
    paddingTop: 40,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'left',
    paddingLeft: 10,
  },
  inputText: {
    fontSize: 14,
    fontFamily: '400',
    color: '#fff',
    marginHorizontal: 4,
    marginVertical: 4,
    lineHeight: 20,
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

export default RegisterComponent;
