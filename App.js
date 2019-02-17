import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import Navigation from "./App/Navigation/AppNavigation";
import configureStore from "./App/Redux/ConfigureStore";
// import Icon from 'react-native-vector-icons/FontAwesome';

export const store = configureStore();

export default class App extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
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

