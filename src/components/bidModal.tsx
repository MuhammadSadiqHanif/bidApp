import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';
import Modal from 'react-native-modal';
import InputComponent from './inputComponent';
import ButtonComponent from './buttonComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';

type SectionProps = PropsWithChildren<{
  show?: any;
  data?: any;
  setData?: any;
  onClose?: any;
  setBiddingData?: any;
}>;
const BidModal = ({
  show,
  data,
  setData,
  onClose,
  setBiddingData,
}: SectionProps) => {
  const [bidValue, setBidValue] = useState<any>(JSON.stringify(data?.Minimal));
  const bidFn = async () => {
    if (Number(bidValue) >= data?.Minimal) {
      let arr = [];
      let oldData: any = await AsyncStorage.getItem('biddingHistory');
      if (JSON.parse(oldData)?.length) {
        arr = JSON.parse(oldData);
      }
      arr.push({...data, bidValue: bidValue});
      let newarr = arr;
      AsyncStorage.setItem('biddingHistory', JSON.stringify(arr))
        .then(() => {
          setData({});
          setBiddingData(newarr);
          onClose();
          Alert.alert(`you bid ${bidValue}$ on this`);
          setBidValue('');
        })
        .catch(error => console.log(error));
    } else {
      Alert.alert(`bidding price should be more than ${data?.Minimal}`);
    }
  };
  return (
    <Modal isVisible={show} onBackdropPress={onClose}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          padding: 10,
          borderRadius: 10,
        }}>
        <Text style={styles.heading}>Bid</Text>

        <InputComponent
          onChangeText={text => setBidValue(text)}
          value={bidValue}
          Placeholder={'Minimum value'}
          keyboardType={'numeric'}
          inputMode="numeric"
        />
        <ButtonComponent
          value={'Bid'}
          type={'filled'}
          onPress={bidFn}
          buttonStyle={{marginTop: 40}}
        />
      </View>
    </Modal>
  );
};

export default BidModal;

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    color: '#FF4949',
    letterSpacing: 1,
    fontSize: 19,
    fontWeight: '600',
    marginBottom: 10,
  },
});
