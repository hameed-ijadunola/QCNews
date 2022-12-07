import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabStack from './BottomTabStack/BottomTabStack';
import {useSelector} from 'react-redux';
import AuthStack from '../AuthStack/AuthStack';

const Stack = createStackNavigator();

export default function RootStack({navigation}) {
  const {credentials} = useSelector(state => state.userAuth);

  React.useEffect(() => {
    console.log('credentials\n\n\n', credentials);
  }, [credentials]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {credentials ? (
        <Stack.Screen
          name="BottomTabStack"
          component={BottomTabStack}
          listeners={({navigation}) => ({
            blur: () => navigation.setParams({screen: undefined}),
          })}
        />
      ) : (
        <Stack.Screen
          name="AuthStack"
          component={AuthStack}
          listeners={({navigation}) => ({
            blur: () => navigation.setParams({screen: undefined}),
          })}
        />
      )}
    </Stack.Navigator>
  );
}
