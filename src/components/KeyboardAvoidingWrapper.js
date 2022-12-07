import React from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';

const KeyboardAvoidingWrapper = ({children}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled
      style={{backgroundColor: '#00000000'}}>
      <TouchableWithoutFeedback
        style={{backgroundColor: '#00000009'}}
        onPress={Keyboard.dismiss}>
        {children}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWrapper;
