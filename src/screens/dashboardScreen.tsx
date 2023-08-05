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
  FlatList,
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
import {useAuth0} from 'react-native-auth0';
import BidModal from '../components/bidModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const auth0 = new Auth0({
//   clientId: '2DCw2ISNStMZPLpNIhgt8N7f16kY8eJV',
//   domain: 'dev-d7uehcl57ysmt1sv.us.auth0.com',
// });
let data = [
  {
    id: 1,
    img: 'https://res.cloudinary.com/ddqr01cgw/image/upload/v1691161893/shoes1_ht1qus.png',
    title: 'Modern Sneaker',
    Minimal: 15,
    price: '15$',
  },
  {
    id: 2,
    img: 'https://res.cloudinary.com/ddqr01cgw/image/upload/v1691161893/shoes4_ytjidu.png',
    title: 'Vintage Sneaker',
    Minimal: 10,
    price: '10$',
  },
  {
    id: 3,
    img: 'https://res.cloudinary.com/ddqr01cgw/image/upload/v1691161893/shoes2_wg2wxx.png',
    title: 'Sport Sneaker',
    Minimal: 25,
    price: '25$',
  },
  {
    id: 4,
    img: 'https://res.cloudinary.com/ddqr01cgw/image/upload/v1691161893/shoes3_qcjquo.png',
    title: 'Vintage Sneaker',
    Minimal: 35,
    price: '35$',
  },
  {
    id: 5,
    img: 'https://res.cloudinary.com/ddqr01cgw/image/upload/v1691161893/shoes1_ht1qus.png',
    title: 'track Sneaker',
    Minimal: 3,
    price: '15$',
  },
  {
    id: 6,
    img: 'https://res.cloudinary.com/ddqr01cgw/image/upload/v1691161893/shoes4_ytjidu.png',
    title: 'Vintage Sneaker',
    Minimal: 9,
    price: '9$',
  },
  {
    id: 7,
    img: 'https://res.cloudinary.com/ddqr01cgw/image/upload/v1691161893/shoes2_wg2wxx.png',
    title: 'track Sneaker',
    Minimal: 8,
    price: '8$',
  },
  {
    id: 8,
    img: 'https://res.cloudinary.com/ddqr01cgw/image/upload/v1691161893/shoes3_qcjquo.png',
    title: 'Vintage Sneaker',
    Minimal: 5,
    price: '5$',
  },
];
function DashboardScreen({navigation}: any): JSX.Element {
  const {clearCredentials} = useAuth0();
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [modalData, setModalData] = useState<any>({});
  const [biddingData, setBiddingData] = useState<any>([]);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  useEffect(() => {
    AsyncStorage.getItem('biddingHistory')
      .then((data: any) => {
        if (JSON.parse(data)?.length) {
          setBiddingData(JSON.parse(data));
          console.log(JSON.parse(data).length, 'data');
        } else {
          setBiddingData([]);
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  const logout = async () => {
    try {
      await clearCredentials();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View style={styles.sectionChild}>
        <View style={styles.headerParent}>
          <Text style={styles.heading}>Home</Text>
          <TouchableOpacity
            style={{position: 'absolute', right: 10, top: 10}}
            onPress={logout}>
            <Text style={styles.logoutbtn}>Logout</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          numColumns={2}
          data={data}
          renderItem={({item, index}: any) => {
            let bidData = biddingData?.length
              ? biddingData?.filter((obj: any) => obj?.id === item?.id)
              : [];
            return (
              <View style={styles.cardasset} key={index}>
                <Image style={styles.image} source={{uri: item?.img}} />
                <View style={styles.assetChild}>
                  <Text style={styles.assetText}>{item.title}</Text>
                  <View style={styles.priceParent}>
                    <View>
                      <Text style={styles.price}>{item?.price}</Text>
                      {bidData[0]?.id === item?.id ? (
                        <Text style={{fontSize: 8, color: '#707070'}}>
                          (you bid {bidData[0]?.bidValue}$ on this)
                        </Text>
                      ) : null}
                    </View>
                    <TouchableOpacity
                      style={[
                        styles.bidbutton,
                        {opacity: bidData[0]?.id === item?.id ? 0.7 : 1},
                      ]}
                      onPress={() => {
                        setModalData(item);
                        toggleModal();
                      }}
                      disabled={bidData[0]?.id === item?.id ? true : false}>
                      <Text style={{fontSize: 12, color: '#fff'}}>bid now</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
          keyExtractor={(item): any => item.id}
        />
      </View>
      <BidModal
        show={isModalVisible}
        onClose={toggleModal}
        data={modalData}
        setData={setModalData}
        setBiddingData={setBiddingData}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    alignItems: 'center',
    height: '100%',
    width: '100%',
    // paddingHorizontal: 16,
    // paddingVertical: 14,
    backgroundColor: '#fff',
  },
  sectionChild: {
    justifyContent: 'center',
  },
  cardasset: {
    width: '50%',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  assetChild: {},
  bidbutton: {
    width: 75,
    height: 25,
    backgroundColor: '#FF4949',
    // backgroundColor: '#FF4949',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  priceParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  assetText: {
    fontSize: 16,
    fontFamily: 'Poppins',
    fontWeight: '700',
    color: '#313737',
    marginTop: 10,
    marginBottom: 6,
  },
  price: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: '800',
    color: '#313737',
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 10,
  },
  headerParent: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    textAlign: 'center',
    color: '#FF4949',
    letterSpacing: 1,
    fontSize: 16,
    fontWeight: '600',
  },
  logoutbtn: {
    textAlign: 'center',
    color: '#FF4949',
    letterSpacing: 1,
    fontSize: 14,
    fontWeight: '600',
  },
});

export default DashboardScreen;
