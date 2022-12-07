import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';

import About from '../../../screens/Root/About/About';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

export default function BottomTabStack() {
  const HomeIcon = require('../../../assets/images/Home-Tab.png');
  const HomeIconRed = require('../../../assets/images/Home-Tab-Red.png');
  const AccountIcon = require('../../../assets/images/Account-Tab.png');
  const AccountIconRed = require('../../../assets/images/Account-Tab-Red.png');

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {height: 66},
      }}
      initialRouteName="News">
      <Tab.Screen
        name="News"
        component={HomeStack}
        options={{
          tabBarShowLabel: true,
          tabBarLabelStyle: styles.textStyleBottomBar,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={HomeIconRed} />
            ) : (
              <Image source={HomeIcon} />
            ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: 'About Me',
          tabBarLabelStyle: styles.textStyleBottomBar,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={AccountIconRed} />
            ) : (
              <Image source={AccountIcon} />
            ),
        }}
        listeners={({navigation}) => ({
          blur: () => navigation.setParams({screen: undefined}),
        })}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
  },
  textStyleBottomBar: {
    fontSize: 13,
    lineHeight: 18,
    fontFamily: 'sans-serif',
    fontWeight: '500',
  },
});
