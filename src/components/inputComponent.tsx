import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
type SectionProps = PropsWithChildren<{
  value?: any;
  onChangeText?: (text: any) => void;
  Placeholder?: string;
  inputStyle?: any;
  keyboardType?: any;
  secureTextEntry?: any;
  inputMode?: any;
}>;
const InputComponent = ({
  onChangeText,
  value,
  Placeholder,
  keyboardType,
  inputStyle,
  secureTextEntry,
  inputMode
}: SectionProps) => {
  return (
    <TextInput
      style={[styles.input, inputStyle]}
      placeholderTextColor={'#5F5F5F'}
      onChangeText={onChangeText}
      value={value}
      placeholder={Placeholder}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      inputMode={inputMode}
    />
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    height: 50,
    width: '100%',
    color: '#5F5F5F',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 10,
  },
});
