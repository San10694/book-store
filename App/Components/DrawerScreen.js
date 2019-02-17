import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import { DrawerActions } from "react-navigation";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ripple from 'react-native-material-ripple';
import { Colors } from '../Themes'



const menuItems =
  [{ 'title': 'SHOP', 'route': 'HomeScreen' },
  { 'title': 'CATEGORY', 'route': 'CategoryScreen' },
  { 'title': 'ABOUT US', 'route': 'AboutScreen' },
  { 'title': 'CONTACT', 'route': 'ContactScreen' },
  { 'title': 'SETTING', 'route': 'ProfileScreen' },
  { 'title': 'LOGIN', 'route': 'HomeScreen' },
  { 'title': 'NEWS', 'route': 'HomeScreen' },
  ]

class DrawerScreen extends Component {


  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
  };


  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.userWrapper}>
              <View style={styles.avatar}>
                {/* <Image style = {styles.avatarImg} source = {require('../../Images/profile.jpg')} /> */}
                {/* <Image
                  style={styles.avatarImg}
                  source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                /> */}
                <View>
                  <Icon name="account-circle-outline" size={50} color={Colors.primary}>
                  </Icon>
                </View>
              </View>
              <Text style={styles.userName}>
                GUEST
			       	</Text>
            </View>
            {menuItems.map((item) => {
              return (
                <Ripple style={styles.menuItem} onPress={this.navigateToScreen(item.route)}>
                  <Text style={styles.textItem}>
                    {item.title}
                  </Text>
                </Ripple>
              )
            })
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default DrawerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white
  },
  userWrapper: {
    width: '100%',
    alignItems: 'center',
    height: 120,
    marginTop: 20
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderColor: Colors.white,
    borderWidth: 1
  },
  avatarImg: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  userName: {
    marginTop: 12,
    fontSize: 16,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  menuItem: {
    padding: 10,
    paddingLeft: 20,
    borderBottomWidth: 0.5,
    borderColor: "#d6d7da",
    width: 300,
  },
  textItem: {
    fontSize: 14,
    fontWeight: "400",
    color: Colors.black
  }
});

// use native component for drawer
// import { DrawerItems, SafeAreaView } from "react-navigation";

// const CustomDrawerContentComponent = props => (
//   <ScrollView>
//     <SafeAreaView
//       style={styles.container}
//       forceInset={{ top: "always", horizontal: "never" }}
//     >
//       <DrawerItems {...props} />
//     </SafeAreaView>
//   </ScrollView>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   }
// });
