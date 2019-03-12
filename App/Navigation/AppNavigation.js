import React, { Component } from "react";
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
import { Colors } from "../Themes";
import CategoryScreen from '../Containers/CategoryScreen';
import SubCategoryScreen from '../Containers/SubCategoryScreen';
import SubSubCategoryScreen from '../Containers/SubSubCategoryScreen';
import LoginScreen from "../Containers/LoginScreen";
import RegistrationScreen from "../Containers/RegistrationScreen";
import CartScreen from "../Containers/CartScreen";
import WishListScreen from "../Containers/WishListScreen";
import OrderScreen from "../Containers/OrderScreen";
import ProductListScreen from "../Containers/ProductListScreen";
import ProductDetailScreen from '../Containers/ProductDetailScreen';
import OtpScreen from "../Containers/OtpScreen";
import LoginOtpScreen from "../Containers/LoginOtpScreen";
import AddAddressScreen from '../Containers/AddAddressScreen';
import AddressListScreen from '../Containers/AddressListScreen';
import OrderDetailScreen from '../Containers/OrderDetailScreen';
import PaymentScreen from '../Containers/PaymentScreen';
import TermsScreen from '../Containers/TermsScreen';
import PrivacyScreen from '../Containers/PrivacyScreen';
import MyAccount from "../Containers/MyAccountScreen";

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
     wimport ProductDetailScreen from '../Containers/ProductDetailScreen';
hile using the drawer navigator inside stack navigator.*/
    DrawerNavigator: {
      screen: DrawerNavigator
    },
    SubCategoryScreen: {
      name: "SubCategoryScreen",
      description: "SubCategoryScreen",
      screen: SubCategoryScreen,
      navigationOptions: {
        // title: "Sub Categories",
        // header: null
      }
    },
    SubSubCategoryScreen: {
      name: "SubSubCategoryScreen",
      description: "SubSubCategoryScreen",
      screen: SubSubCategoryScreen,
      navigationOptions: {
        // title: "Sub Categories",
        // header: null
      }
    },
    ProductListScreen: {
      name: "ProductListScreen",
      description: "ProductListScreen",
      screen: ProductListScreen,
      navigationOptions: {
        // title: "Book List",
        //header: null
      }
    },
    ProductDetailScreen: {
      name: "ProductDetailScreen",
      description: "ProductDetailScreen",
      screen: ProductDetailScreen,
      navigationOptions: {
        title: "Book Details",
        // header: null
      }
    },
    CartScreen: {
      name: "CartScreen",
      description: "CartScreen",
      screen: CartScreen,
      navigationOptions: {
        title: "Cart",
        // header: null
      }
    },
    OtpScreen: {
      name: "OtpScreen",
      description: "OtpScreen",
      screen: OtpScreen,
      navigationOptions: {
        title: "OTP",
        // header: null
      }
    },
    AddAddressScreen: {
      name: "AddAddressScreen",
      description: "AddAddressScreen",
      screen: AddAddressScreen,
      navigationOptions: {
        title: "Add address",
        // header: null
      }
    },
    AddressListScreen: {
      name: "AddressListScreen",
      description: "AddressListScreen",
      screen: AddressListScreen,
      navigationOptions: {
        title: "Address List",
        // header: null
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
    OrderScreen: {
      name: "OrderScreen",
      description: "OrderScreen",
      screen: OrderScreen,
      navigationOptions: {
        title: "Your Orders"
      }
    },
    OrderDetailScreen: {
      name: "OrderDetailScreen",
      description: "OrderDetailScreen",
      screen: OrderDetailScreen,
      navigationOptions: {
        title: "Order Details"
      }
    },

    LoginOtpScreen: {
      name: "LoginOtpScreen",
      description: "LoginOtpScreen",
      screen: LoginOtpScreen,
      navigationOptions: {
        title: "OTP"
      }
    },
    PaymentScreen: {
      name: "PaymentScreen",
      description: "PaymentScreen",
      screen: PaymentScreen,
      navigationOptions: {
        title: "Payment"
      }
    },

    MyAccount: {
      name: "MyAccount",
      description: "MyAccount",
      screen: MyAccount,
      navigationOptions: {
        title: "My Account"
      }
    },

    WishListScreen: {
      name: "WishListScreen",
      description: "WishListScreen",
      screen: WishListScreen,
      navigationOptions: {
        title: "WishList"
      }
    },
    ContactScreen: {
      name: "ContactScreen",
      description: "ContactScreen",
      screen: ContactScreen,
      navigationOptions: {
        title: "Contact Screen"
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
    PrivacyScreen: {
      name: "PrivacyScreen",
      description: "PrivacyScreen",
      screen: PrivacyScreen,
      navigationOptions: {
        title: "Privacy Policy"
      }
    },
    TermsScreen: {
      name: "TermsScreen",
      description: "TermsScreen",
      screen: TermsScreen,
      navigationOptions: {
        title: "Terms And Conditions"
      }
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      //headerMode: 'none',
      // header: null,
      // title: "Book Store", // Title to appear in status bar
      headerLeft: (
        <TouchableOpacity
          onPress={() => {
            const { routeName } = navigation.state
            routeName === 'DrawerNavigator' ?
              navigation.dispatch(DrawerActions.toggleDrawer())
              : navigation.goBack();
          }}
        >
          <MenuIcon navigation={navigation} />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: Colors.lightGrey,
        elevation: navigation.state.routeName === 'DrawerNavigator' ? 0 : 1

      },
      headerTintColor: Colors.Text,
      headerTitleStyle: {
        fontWeight: "400"
      }
    })
  }
);

export default PrimaryNav;
