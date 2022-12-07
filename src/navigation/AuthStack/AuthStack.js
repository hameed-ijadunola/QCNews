import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../../screens/Auth/SignIn/SignIn';
import SignUp from '../../screens/Auth/SignUp/SignUp';

const Stack = createStackNavigator();

export default function AuthStack({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
