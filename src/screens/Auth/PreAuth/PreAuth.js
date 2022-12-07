import {View, Text, ActivityIndicator} from 'react-native';
import React, {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {COLORS} from '../../../constants';

const PreAuth = ({navigation}) => {
  useFocusEffect(
    useCallback(() => {
      async function fetchUser() {}
      fetchUser();
      return () => {};
    }, []),
  );
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <ActivityIndicator color={COLORS.red} size={50} />
    </View>
  );
};

export default PreAuth;
