import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants';
import {saveCredentials} from '../../../redux/features/authSlice';
import {useDispatch} from 'react-redux';

export const FormattedParagraph = ({text, type, noLine}) => {
  return type == 'body' ? (
    <View
      style={{
        marginBottom: noLine ? 0 : 10,
      }}>
      <Text style={styles.text}>
        {text
          .replace(/[\r\n]/gm, ' ')
          .replace(/\s+/g, ' ')
          .trim()}
      </Text>
    </View>
  ) : type == 'heading' ? (
    <View
      style={{
        marginTop: noLine ? 0 : 10,
        marginBottom: 2,
      }}>
      <Text style={[styles.heading, noLine && {textDecorationLine: 'none'}]}>
        {text
          .replace(/[\r\n]/gm, ' ')
          .replace(/\s+/g, ' ')
          .trim()}
      </Text>
    </View>
  ) : (
    type == 'bullet' && (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 5,
          paddingRight: 15,
        }}>
        <View
          style={{
            width: 5,
            height: 5,
            borderRadius: 2.5,
            backgroundColor: 'black',
            marginRight: 15,
            marginTop: 5,
          }}
        />
        <Text style={styles.bulletText}>
          {text
            .replace(/[\r\n]/gm, ' ')
            .replace(/\s+/g, ' ')
            .trim()}
        </Text>
      </View>
    )
  );
};
const About = ({navigation}) => {
  const dispatch = useDispatch();
  const BackSpace = require('../../../assets/images/white-keyboard-backspace.png');
  const SignOutSvg = require('../../../assets/images/sign-out.png');

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={BackSpace} />
            </TouchableOpacity>
            <Text style={styles.title}>About me</Text>
          </View>
          <TouchableOpacity onPress={() => dispatch(saveCredentials(null))}>
            <Image source={SignOutSvg} />
          </TouchableOpacity>
        </View>

        <View style={[styles.halfModal]}>
          <ScrollView showsVerticalScrollIndicator={true}>
            <Image
              style={{
                width: 200,
                height: 250,
                borderRadius: 50,
                alignSelf: 'center',
                marginVertical: 20,
              }}
              resizeMode="contain"
              source={require('../../../assets/images/passportHameedpreview.png')}
            />
            <FormattedParagraph type={'heading'} text={'Personal Info.'} />
            <FormattedParagraph
              type={'body'}
              text={`A spirited software developer, IoT engineer and researcher that aims
                    to contribute to software, IoT solutions and research using built up
                    knowledge and experience.`}
            />

            <FormattedParagraph type={'heading'} text={'Contact Info'} />
            <FormattedParagraph
              type={'body'}
              text={'Email: ijadunolahameed@gmail.com'}
            />
            <FormattedParagraph type={'body'} text={'Phone: +2349024547592'} />
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default About;

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
    paddingTop: 30,
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
    fontWeight: '500',
    fontSize: 16,
  },
  cancel: {
    right: 20,
    position: 'absolute',
  },
  heading: {
    color: COLORS.black,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'sans-serif',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  text: {
    color: COLORS.gray,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'sans-serif',
    fontWeight: '400',
  },
});
