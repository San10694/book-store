import React from "react";
import { View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from "../Themes";


export const MenuIcon = ({ navigation }) => {
  const { isDrawerOpen, routeName } = navigation.state;
  if (routeName === 'DrawerNavigator') {
    if (!isDrawerOpen) {
      return (
        <View style={{ margin: 10 }}>
          <Icon name="menu" size={25} color={Colors.primary}>
          </Icon>
        </View>
      );
    } else {
      return (
        <View style={{ margin: 10 }}>
          <Icon name="arrow-left" size={25} color={Colors.primary}>
          </Icon>
        </View>
      );
    }
  } return (
    <View style={{ margin: 10 }}>
      <Icon name="arrow-left" size={25} color={Colors.primary}>
      </Icon>
    </View>
  );

};


      // <Image
      //   style={{ margin: 10, height: 20, width: 20 }}
      //   source={require("../Assets/menu-button.png")}
      // />
