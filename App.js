/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RootStack from './src/navigation/RootStack/RootStack';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
const Stack = createStackNavigator();
import {openDatabase} from 'react-native-sqlite-storage';
import SplashScreen from 'react-native-splash-screen';

var db = openDatabase({name: 'UserDatabase.db'});

const App = () => {
  const [initialRoute, setInitialRoute] = useState('RootStack');
  let persistor = persistStore(store);

  useEffect(() => {
    async function prepare() {
      try {
        db.transaction(tx => {
          tx.executeSql(
            'CREATE TABLE IF NOT EXISTS table_user (id INTEGER PRIMARY KEY AUTOINCREMENT, user_name TEXT, user_email TEXT, user_password TEXT)',
          );
        });
      } catch (e) {
        console.warn(e);
      } finally {
        SplashScreen.hide();
      }
    }

    prepare();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName={initialRoute}>
            <Stack.Screen name="RootStack" component={RootStack} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontFamily: 'Montserrat',
    fontSize: 30,
  },
});

export default App;
