import React from "react";
import {
  createStackNavigator,
  createDrawerNavigator,
  createTabNavigator,
  DrawerActions, TabBarBottom
} from "react-navigation";
import { TouchableOpacity } from "react-native";
import DrawerScreen from "../Components/DrawerScreen";
import { MenuIcon } from "../Components/MenuIcon";
import Routes from "./Routes";

import HomeScreen from "../Containers/HomeScreen";
import ProfileScreen from "../Containers/ProfileScreen";
import AboutScreen from "../Containers/AboutScreen";
import ContactScreen from "../Containers/ContactScreen";

const DrawerNavigator = createDrawerNavigator(Routes, {
  initialRouteName: "HomeTab",
  contentComponent: DrawerScreen,
  drawerWidth: 300,
  drawerBackgroundColor: "#F5FCFF",
  contentOptions: {
    activeTintColor: "blue",
    activeBackgroundColor: "grey",
    inactiveBackgroundColor: "black",
    itemsContainerStyle: {
      backgroundColor: "grey"
    },
    iconContainerStyle: {
      opacity: 1
    },
    activeLabelStyle: {},
    inactiveLabelStyle: {}
  }
});

// const HOME = createTabNavigator({
//   HomeScreen: {
//     screen: HomeScreen
//   },
//   ProfileScreen: {
//     screen: ProfileScreen,

//   },
//   AboutScreen: {
//     screen: AboutScreen,
//     key: AboutScreen,
//   }
// },
//   {
//     tabBarComponent: (props) => <TabBarBottom {...props} />,
//     tabBarPosition: "bottom",
//     animationEnabled: false,
//     swipeEnabled: false,
//     initialRouteName: HomeScreen,


//   })

const PrimaryNav = createStackNavigator(
  {
    /*important: key and screen name (i.e. DrawerNavigator) should be same
     while using the drawer navigator inside stack navigator.*/
    DrawerNavigator: {
      screen: DrawerNavigator
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: "React Native Starter", // Title to appear in status bar
      headerLeft: (
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer());
          }}
        >
          <MenuIcon navigation={navigation} />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: "#333"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "400"
      }
    })
  }
);

export default PrimaryNav;
