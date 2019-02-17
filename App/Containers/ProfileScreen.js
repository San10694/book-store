import React, { Component } from "react";
import { TouchableOpacity, ScrollView, StyleSheet, Text, View } from "react-native";
import { MenuIcon } from '../Components/MenuIcon';
import { DrawerActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ripple from 'react-native-material-ripple';
import { Colors, Fonts } from "../Themes";


const menuItems =
  [{ 'title': 'Cart', 'route': 'HomeScreen' },
  { 'title': 'My Orders', 'route': 'HomeScreen' },
  { 'title': 'WishList', 'route': 'AboutScreen' },
  { 'title': 'Contact Us', 'route': 'ContactScreen' },
  { 'title': 'Privacy Polices', 'route': 'HomeScreen' },
  { 'title': 'Terms & Conditions', 'route': 'HomeScreen' },
  { 'title': 'About Us', 'route': 'HomeScreen' },
  ]
export default class ProfileScreen extends Component {

  // static navigationOptions = ({ navigation }) => ({
  //   //  header: null,
  //   headerLeft: (
  //     <TouchableOpacity
  //       onPress={() => {
  //         navigation.dispatch(DrawerActions.toggleDrawer());
  //       }}
  //     >
  //       <MenuIcon navigation={navigation} />
  //     </TouchableOpacity>
  //   ),
  //   headerStyle: {
  //     backgroundColor: "#fff",
  //     shadowOpacity: 1

  //   },
  //   headerTintColor: Colors.Text,
  //   headerTitleStyle: {
  //     fontWeight: "400"
  //   }
  // })

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ backgroundColor: Colors.white }}>
          <View style={styles.userWrapper}>
            <View style={styles.avatar}>
              {/* <Image style = {styles.avatarImg} source = {require('../../Images/profile.jpg')} /> */}
              {/* <Image
                  style={styles.avatarImg}
                  source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                /> */}
              <View>
                <Icon name="account-circle-outline" size={75} color={Colors.primary}>
                </Icon>
              </View>
            </View>
            <Text style={styles.userName}>
              GUEST
			       	</Text>
          </View>
          <View style={{ height: 10, backgroundColor: Colors.lightGrey }}></View>
          <View style={{ backgroundColor: Colors.white }}>
            {menuItems.map((item) => {
              return (
                <Ripple style={styles.menuItem}>
                  <Text
                    style={styles.textItem}
                    onPress={() => this.props.navigation.navigate(item.route)}
                  >
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGrey
  },
  userWrapper: {
    width: '100%',
    alignItems: 'center',
    height: 120,
    marginTop: 20,
    backgroundColor: Colors.white
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 100,
    borderColor: Colors.white,
    borderWidth: 1
  },
  userName: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: 'bold'
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
  },
  menuItem: {
    padding: 10,
    paddingLeft: 15,
    borderBottomWidth: 0.5,
    borderColor: "#d6d7da",
    height: 50,
  },
  textItem: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.Text,
    fontFamily: Fonts.type.gotham_medium,
  }
});
