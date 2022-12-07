import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../../screens/Root/Home/Home';
import NewsDetails from '../../../screens/Root/Home/NewsDetails';

const Stack = createStackNavigator();

export default function HomeStack({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NewsDetails" component={NewsDetails} />
    </Stack.Navigator>
  );
}
