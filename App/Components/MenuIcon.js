import React from "react";
import { View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from "../Themes";


export const MenuIcon = ({ navigation }) => {
  if (!navigation.state.isDrawerOpen) {
    return (
      <View style={{ margin: 10 }}>
        <Icon name="menu" size={25} color={Colors.primary}>
        </Icon>
      </View>
    );
  } else {
    return (
      <View style={{ margin: 10 }}>
        <Icon name="keyboard-backspace" size={25} color={Colors.Text}>
        </Icon>
      </View>
    );
  }
};


      // <Image
      //   style={{ margin: 10, height: 20, width: 20 }}
      //   source={require("../Assets/menu-button.png")}
      // />
