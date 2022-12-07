import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  BackHandler,
  Alert,
  ActivityIndicator,
  Platform,
  StatusBar,
  ToastAndroid,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {theme} from '../../../constants';

const {COLORS, SIZES, FONTS} = theme;
import KeyboardAvoidingWrapper from '../../../components/KeyboardAvoidingWrapper';
import {
  validateEmail,
  validatePassword,
} from '../../../helpers/validation/validation';
import {useFocusEffect} from '@react-navigation/native';
import {saveCredentials} from '../../../redux/features/authSlice';
import {useDispatch} from 'react-redux';
import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'UserDatabase.db'});

const SignIn = ({navigation}) => {
  const dispatch = useDispatch();
  const BackSpace = require('../../../assets/images/keyboard-backspace.png');

  const [hidePassword, setHidePassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState({
    email: null,
    password: null,
  });

  ///handle back action
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        Alert.alert('Exit QC News!', 'Are you sure you want to exit?', [
          {
            text: 'No',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'Yes', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      };

      // Add Event Listener for hardwareBackPress
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        // Once the Screen gets blur Remove Event Listener
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, []),
  );
  async function onSubmit() {
    try {
      setLoading(true);
      const emailError = validateEmail(state.email);
      const passwordError = null;
      if (emailError || passwordError) {
        setError({...error, email: emailError, password: passwordError});
        setLoading(false);
        return;
      } else {
        setError({email: null, password: null});
        db.transaction(tx => {
          tx.executeSql(
            'SELECT * FROM table_user WHERE user_email = ? AND user_password = ?',
            [state.email, state.password],
            (tx, results) => {
              var len = results.rows.length;
              console.log('len', len);
              if (len > 0) {
                console.log(results.rows.item(0));
                dispatch(saveCredentials(results.rows.item(0)));
              } else {
                ToastAndroid.show(
                  'Wrong username or password',
                  ToastAndroid.SHORT,
                );
              }
            },
          );
        });
      }
      setLoading(false);
    } catch (error) {
      console.log('error in screens/SignIn ln:117', error);
      setLoading(false);
    }
  }

  return (
    <>
      <StatusBar style="dark" />
      <View
        style={{
          position: 'absolute',
          left: 15,
          top: 60,
          zIndex: 1,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Image source={BackSpace} />
        </TouchableOpacity>
      </View>

      <ScrollView style={{backgroundColor: COLORS.white}}>
        <View style={styles.safeArea}>
          <View
            style={{
              marginTop: 70,
            }}>
            <Text style={styles.title}>{'Welcome\nBack'}</Text>
            <Text style={styles.desc}>
              Enter your email address and password to continue
            </Text>

            <KeyboardAvoidingView>
              <View>
                <MyTextInput
                  label="Email"
                  placeholder="Enter email"
                  placeholderTextColor={COLORS.placeholderTxt}
                  onChangeText={text => setState({...state, email: text})}
                  value={state.email}
                />
                {error.email !== null && (
                  <Text style={styles.errorText}>{error.email}</Text>
                )}

                <MyTextInput
                  label="Password"
                  placeholder="Enter password"
                  placeholderTextColor={COLORS.placeholderTxt}
                  onChangeText={text => setState({...state, password: text})}
                  value={state.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                {error.password !== null && (
                  <Text style={styles.errorText}>{error.password}</Text>
                )}

                <TouchableOpacity
                  style={!loading ? [styles.redBtn] : [styles.grayBtn]}
                  disabled={loading}
                  onPress={onSubmit}>
                  {!loading ? (
                    <Text style={styles.btnTxt}>Sign in</Text>
                  ) : (
                    <ActivityIndicator size="small" color={COLORS.white} />
                  )}
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.desc}>Don't have an account? </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SignUp');
                }}>
                <Text style={styles.linkTxt}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const MyTextInput = ({
  label,
  shift,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  const EyeOn = require('../../../assets/images/eye-outline.png');
  const EyeOff = require('../../../assets/images/eye-off-outline.png');
  return (
    <View>
      <TextInput style={styles.textInput} {...props} />
      {isPassword && (
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setHidePassword(!hidePassword)}>
          {hidePassword ? <Image source={EyeOff} /> : <Image source={EyeOn} />}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  txt: {
    fontSize: 40,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: COLORS.white,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    backgroundColor: COLORS.white,
  },
  title: {
    ...FONTS.title,
    color: COLORS.black,
    paddingTop: 10,
    marginBottom: 10,
  },
  subtitle: {
    ...FONTS.h2,
    color: COLORS.black,
    fontStyle: 'normal',
    marginTop: 30,
    marginBottom: 16,
  },
  desc: {
    ...FONTS.h3,
    color: COLORS.gray,
    paddingVertical: 10,
  },
  linkTxt: {
    ...FONTS.h3,
    fontFamily: 'serif',
    color: COLORS.red,
    paddingVertical: 10,
  },
  backIcon: {
    marginBottom: 30,
  },
  redBtn: {
    width: '100%',
    height: 48,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.red,
    marginVertical: 24,
    flexDirection: 'row',
  },
  grayBtn: {
    width: '100%',
    height: 48,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.inactive_btn,
    marginVertical: 24,
    flexDirection: 'row',
  },
  btnTxt: {
    ...FONTS.btn,
    color: COLORS.white,
  },
  textInput: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    marginTop: 16,
    paddingVertical: 16,
    width: '100%',
    height: 48,
    backgroundColor: COLORS.placeholder_gray,
    borderColor: COLORS.placeholder_border,
    borderWidth: 1,
    borderRadius: 5,
    ...FONTS.placeholder,
  },
  placeholderTxt: {
    ...FONTS.h4,
    color: COLORS.placeholder_gray,
  },
  eyeIcon: {
    right: 16,
    position: 'absolute',
    bottom: 12,
    zIndex: 1,
  },
  errorText: {
    color: COLORS.red,
    fontSize: 11,
  },
});
