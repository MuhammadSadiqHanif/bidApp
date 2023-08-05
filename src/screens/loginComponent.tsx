/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
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
// import {
//   GoogleSignin,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';
// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

function LoginComponent({navigation}: any): JSX.Element {
  // const [googleLoader, setGoogleLoader] = useState(false);
  // useEffect(() => {
  //   // Settings.initializeSDK();
  //   GoogleSignin.configure({
  //     // scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  //     // webClientId:
  //     //   '600592089866-8torq1ednbj0stkkud9p564gak91vcf1.apps.googleusercontent.com',
  //     // // iosClientId:
  //     // //   '727890035834-psjmhccvi3nkd5spbpnds5q023vob9dg.apps.googleusercontent.com',
  //     // offlineAccess: true,
  //   //   iosClientId:
  //   //     '212483350599-bhl4fr612quamms5i3t9qenf53mkp45a.apps.googleusercontent.com',
  //   });
  // }, []);
  // const googlesignIn = async () => {
  //   try {
  //     setGoogleLoader(true);
  //     await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  //     console.log(GoogleSignin.hasPlayServices());
  //     const userInfo = await GoogleSignin.signIn();
  //     console.log(userInfo);
  //   } catch (error: any) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //       console.log(statusCodes.SIGN_IN_CANCELLED);
  //       showMessage({
  //         message: `user cancelled the login flow`,
  //         type: 'danger',
  //         duration: 2000,
  //         autoHide: true,
  //       });
  //       console.log(error);
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       // console.log(error);
  //       showMessage({
  //         message: 'in progress',
  //         type: 'danger',
  //         duration: 2000,
  //         autoHide: true,
  //       });
  //       // operation (e.g. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       console.log(error);
  //       // play services not available or outdated
  //       showMessage({
  //         message: `play services not available or outdated`,
  //         type: 'danger',
  //         duration: 2000,
  //         autoHide: true,
  //       });
  //     } else {
  //       console.log(error, statusCodes);
  //       console.log(error.code);
  //       showMessage({
  //         message: error.code,
  //         type: 'danger',
  //         duration: 2000,
  //         autoHide: true,
  //       });
  //       // console.log(statusCodes.code);
  //     }
  //   }
  // };
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Image style={styles.image} source={require('../assets/boxShadow.png')} />
      <View style={styles.sectionChild}>
        <Text style={styles.header}>Welcome back! Glad to see you, Again!</Text>
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
          <TouchableOpacity onPress={() => navigation.navigate('register')}>
            <Text style={{fontSize: 15, color: '#1DAEFF', fontWeight: '600'}}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 15,
          }}>
          <Text style={{color: '#fff', fontSize: 16}}>Or Login with</Text>
        </View>
        <View style={styles.socialSection}>
          <TouchableOpacity style={styles.socialChild}>
            <Image source={require('../assets/google.png')} />
          </TouchableOpacity>
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
  account: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
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

export default LoginComponent;
