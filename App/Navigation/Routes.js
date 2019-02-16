
import React from "react";
import HomeScreen from "../Containers/HomeScreen";
import ProfileScreen from "../Containers/ProfileScreen";
import AboutScreen from "../Containers/AboutScreen";
import ContactScreen from "../Containers/ContactScreen";
import { createTabNavigator, TabBarBottom } from "react-navigation";
import { Colors, Fonts } from "../Themes";

export default {

  // HomeScreen: {
  //   name: "HomeScreen",
  //   description: "HomeScreen",
  //   screen: HomeTab,
  //   navigationOptions: {
  //     title: "Home Screen"
  //   }
  // },

  HomeTab: createTabNavigator({
    Home: {
      screen: HomeScreen
    },
    About: {
      screen: AboutScreen,
      key: AboutScreen,
    },
    Profile: {
      screen: ProfileScreen
    },
  },
    {
      tabBarComponent: (props) => <TabBarBottom {...props} />,
      tabBarPosition: "bottom",
      animationEnabled: true,
      swipeEnabled: false,
      initialRouteName: "Home",

      tabBarOptions: {
        showIcon: true,
        style: {
          height: 56,
          paddingTop: 5,
          paddingBottom: 5,
          paddingHorizontal: 15,
          zIndex: 4,
          backgroundColor: '#fff',
          elevation: 4,
        },
        //tabStyle: styles.tabStyle,
        iconStyle: {
          width: 50,
          height: 30,
          padding: 0
        },
        labelStyle: {
          fontFamily: Fonts.type.gotham_medium,
          fontSize: 12,
          letterSpacing: 0,
        },
        activeTintColor: Colors.headerTintColor,
        inactiveTintColor: Colors.Text,
        //pressColor: ,
        upperCaseLabel: false,
        pressOpacity: 0.3,
        scrollEnabled: false,
        indicatorStyle: { height: 3 },
        allowFontScaling: false
      }
    }),

  ProfileScreen: {
    name: "ProfileScreen",
    description: "ProfileScreen",
    screen: ProfileScreen,
    navigationOptions: {
      title: "Profile Screen"
    }
  },
  AboutScreen: {
    name: "AboutScreen",
    description: "AboutScreen",
    screen: AboutScreen,
    navigationOptions: {
      title: "About Screen"
    }
  },
  ContactScreen: {
    name: "ContactScreen",
    description: "ContactScreen",
    screen: ContactScreen,
    navigationOptions: {
      title: "Contact Screen"
    }
  }
};


