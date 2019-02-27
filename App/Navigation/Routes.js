
import React from "react";
import HomeScreen from "../Containers/HomeScreen";
import ProfileScreen from "../Containers/ProfileScreen";
import AboutScreen from "../Containers/AboutScreen";
import ContactScreen from "../Containers/ContactScreen";
import { createTabNavigator, TabBarBottom } from "react-navigation";
import { Colors, Fonts } from "../Themes";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View } from 'react-native';
import CategoryScreen from '../Containers/CategoryScreen';
import LoginScreen from "../Containers/LoginScreen";
import RegistrationScreen from "../Containers/RegistrationScreen";
import CartScreen from "../Containers/CartScreen";
import WishListScreen from "../Containers/WishListScreen";
import OrderScreen from "../Containers/OrderScreen";
import ProductDetailScreen from '../Containers/ProductDetailScreen';
import AddAddressScreen from '../Containers/AddAddressScreen';

export default {

  HomeTab: createTabNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        // headerMode: 'none',
        // header: null,
        tabBarIcon: ({ tintColor }) => (
          <View style={{ marginTop: 5 }}>
            <Icon name="home-outline" size={20} color={tintColor}>
            </Icon>
          </View>
        ),
      },
    },
    Categories: {
      screen: CategoryScreen,
      key: CategoryScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View style={{ marginTop: 5 }}>
            <Icon name="apps" size={20} color={tintColor}>
            </Icon>
          </View>
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View style={{ marginTop: 5 }}>
            <Icon name="face-profile" size={20} color={tintColor}>
            </Icon>
          </View>
        ),
      },
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
          marginBottom: 5
        },
        activeTintColor: Colors.headerTintColor,
        inactiveTintColor: Colors.charcoal,
        //pressColor: ,
        upperCaseLabel: false,
        pressOpacity: 0.3,
        scrollEnabled: false,
        indicatorStyle: { height: 3 },
        allowFontScaling: false
      }
    }),
  AboutScreen: {
    name: "AboutScreen",
    description: "AboutScreen",
    screen: AboutScreen,
    navigationOptions: {
      title: "About Screen"
    }
  },
  // ProductDetailScreen: {
  //   name: "ProductDetailScreen",
  //   description: "ProductDetailScreen",
  //   screen: ProductDetailScreen,
  //   navigationOptions: {
  //     title: "Product Details",
  //     // header: null
  //   }
  // },
  ContactScreen: {
    name: "ContactScreen",
    description: "ContactScreen",
    screen: ContactScreen,
    navigationOptions: {
      title: "Contact Screen"
    }
  },

  LoginScreen: {
    name: "LoginScreen",
    description: "LoginScreen",
    screen: LoginScreen,
    navigationOptions: {
      title: "Login Screen"
    }
  },
  RegistrationScreen: {
    name: "RegistrationScreen",
    description: "RegistrationScreen",
    screen: RegistrationScreen,
    navigationOptions: {
      title: "Registration Screen"
    }
  },
  // CartScreen: {
  //   name: "CartScreen",
  //   description: "CartScreen",
  //   screen: CartScreen,
  //   navigationOptions: {
  //     title: "Cart Screen"
  //   }
  // },
  WishListScreen: {
    name: "WishListScreen",
    description: "WishListScreen",
    screen: WishListScreen,
    navigationOptions: {
      title: "WishList Screen"
    }
  },
  OrderScreen: {
    name: "OrderScreen",
    description: "OrderScreen",
    screen: OrderScreen,
    navigationOptions: {
      title: "OrderScreen"
    }
  },

};

//CategoryScreen
