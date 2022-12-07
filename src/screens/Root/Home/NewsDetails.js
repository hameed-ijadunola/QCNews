import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Image,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants/index';
import {WebView} from 'react-native-webview';

const NewsDetails = ({navigation, route}) => {
  const params = route.params;
  const BackSpace = require('../../../assets/images/white-keyboard-backspace.png');
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{paddingHorizontal: 10}}
              onPress={() => navigation.goBack()}>
              <Image source={BackSpace} />
            </TouchableOpacity>
            <View style={{flex: 1}}>
              <Text numberOfLines={1} style={styles.title}>
                {params?.title}
              </Text>
            </View>
          </View>
        </View>

        <View style={[styles.halfModal]}>
          <WebView style={styles.container} source={{uri: params.url}} />
        </View>
      </View>
    </>
  );
};

export default NewsDetails;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  halfModal: {
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: COLORS.white,
    paddingHorizontal: 24,
    paddingTop: 5,
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: COLORS.white,
    marginLeft: 10,
    fontFamily: 'serif',
    fontWeight: '600',
    fontSize: 16,
  },
});
