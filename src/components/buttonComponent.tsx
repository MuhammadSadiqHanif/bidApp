import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
type SectionProps = PropsWithChildren<{
  value?: any;
  onPress?: () => void;
  buttonStyle?: any;
  color?: any;
  type?: string;
}>;
const ButtonComponent = ({
  value,
  onPress,
  buttonStyle,
  color,
  type,
}: SectionProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        buttonStyle,
        type === 'filled'
          ? {backgroundColor: '#FF4949'}
          : {backgroundColor: '#fff'},
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.text,
          type === 'filled' ? {color: '#fff'} : {color: '#000'},
        ]}>
        {value}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});
