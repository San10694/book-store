import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, AsyncStorage } from "react-native";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import Navigation from "./App/Navigation/AppNavigation";
import configureStore from "./App/Redux/ConfigureStore";
//import SplashScreen from 'react-native-smart-splash-screen';
import firebase from 'react-native-firebase';

// import Icon from 'react-native-vector-icons/FontAwesome';

export const store = configureStore();

export default class App extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }

  async componentDidMount() {
    this.checkPermission();
    //SplashScreen.close(SplashScreen.animationType.scale, 850, 500)
    // SplashScreen.close({
    //   animationType: SplashScreen.animationType.scale,
    //   duration: 850,
    //   delay: 500,
    // })
  }
  //1
  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      this.getToken();
    } else {
      this.requestPermission();
    }
  }

  //3
  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      console.log('fcm-token', fcmToken);
      if (fcmToken) {
        // user has a device token
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    }
  }

  //2
  async requestPermission() {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      this.getToken();
    } catch (error) {
      // User has rejected permissions
      console.log('permission rejected');
    }
  }
  render() {
    let persistor = persistStore(store);
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    );
  }
}

