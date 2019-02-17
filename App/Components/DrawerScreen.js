import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { DrawerActions } from "react-navigation";
import { Colors } from '../Themes'



const menuItems =
  [{ 'title': 'SHOP', 'route': 'HomeScreen' },
  { 'title': 'CATEGORY', 'route': 'HomeScreen' },
  { 'title': 'ABOUT US', 'route': 'AboutScreen' },
  { 'title': 'CONTACT', 'route': 'ContactScreen' },
  { 'title': 'SETTING', 'route': 'HomeScreen' },
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
            {menuItems.map((item) => {
              return (
                <TouchableOpacity style={styles.menuItem}>
                  <Text
                    style={styles.textItem}
                    onPress={this.navigateToScreen(item.route)}
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
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
    backgroundColor: Colors.white,
    paddingTop: 80
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  menuItem: {
    padding: 10,
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
