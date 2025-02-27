import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Colors } from "../Themes";

export default class AboutScreen extends Component {

  static navigationOptions = {
    title: "About Screen"
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to AboutScreen!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.lightGrey

  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
