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
import { Colors } from "../Themes";
import CategoryScreen from '../Containers/CategoryScreen';
import SubCategoryScreen from '../Containers/SubCategoryScreen';
import SubSubCategoryScreen from '../Containers/SubSubCategoryScreen';
import LoginScreen from "../Containers/LoginScreen";
import RegistrationScreen from "../Containers/RegistrationScreen";
import CartScreen from "../Containers/CartScreen";
import WishListScreen from "../Containers/WishListScreen";
import OrderScreen from "../Containers/OrderScreen";

const DrawerNavigator = createDrawerNavigator(Routes, {
  initialRouteName: "ProductListScreen",
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
    },
    CategoryScreen: {
      name: "CategoryScreen",
      description: "CategoryScreen",
      screen: CategoryScreen,
      navigationOptions: {
        title: "Category Screen",
        header: null
      }
    },
    SubCategoryScreen: {
      name: "SubCategoryScreen",
      description: "SubCategoryScreen",
      screen: SubCategoryScreen,
      navigationOptions: {
        title: "Sub Category Screen",
        header: null
      }
    },
    SubSubCategoryScreen: {
      name: "SubSubCategoryScreen",
      description: "SubSubCategoryScreen",
      screen: SubSubCategoryScreen,
      navigationOptions: {
        title: "Sub Category Screen",
        header: null
      }
    },
    // LoginScreen: {
    //   name: "LoginScreen",
    //   description: "LoginScreen",
    //   screen: LoginScreen,
    //   navigationOptions: {
    //     title: "Login Screen"
    //   }
    // },
    // RegistrationScreen: {
    //   name: "RegistrationScreen",
    //   description: "RegistrationScreen",
    //   screen: RegistrationScreen,
    //   navigationOptions: {
    //     title: "Registration Screen"
    //   }
    // },
    // CartScreen: {
    //   name: "CartScreen",
    //   description: "CartScreen",
    //   screen: CartScreen,
    //   navigationOptions: {
    //     title: "Cart Screen"
    //   }
    // },
    // WishListScreen: {
    //   name: "WishListScreen",
    //   description: "WishListScreen",
    //   screen: WishListScreen,
    //   navigationOptions: {
    //     title: "WishList Screen"
    //   }
    // },
    // OrderScreen: {
    //   name: "OrderScreen",
    //   description: "OrderScreen",
    //   screen: OrderScreen,
    //   navigationOptions: {
    //     title: "OrderScreen"
    //   }
    // },
  },
  {
    navigationOptions: ({ navigation }) => ({
      //headerMode: 'none',
      // header: null,
      // title: "Book Store", // Title to appear in status bar
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
        backgroundColor: Colors.lightGrey,
        elevation: 0

      },
      headerTintColor: Colors.Text,
      headerTitleStyle: {
        fontWeight: "400"
      }
    })
  }
);

export default PrimaryNav;
