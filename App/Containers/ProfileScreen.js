import React, { Component } from "react";
import { TouchableOpacity, ScrollView, StyleSheet, Text, View, AsyncStorage } from "react-native";
import { MenuIcon } from '../Components/MenuIcon';
import { DrawerActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ripple from 'react-native-material-ripple';
import { Colors, Fonts } from "../Themes";
import { connect } from 'react-redux';


const menuItems =
  [
    { 'title': 'Cart', 'route': 'CartScreen' },
    { 'title': 'WishList', 'route': 'WishListScreen' },
    // { 'title': 'Contact Us', 'route': 'ContactScreen' },
    // { 'title': 'Privacy Polices', 'route': 'PrivacyScreen' },
    // { 'title': 'Terms & Conditions', 'route': 'TermsScreen' },
    { 'title': 'About Us', 'route': 'AboutScreen' },
  ]
class ProfileScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    }

  }


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
    const { user } = this.props.user;
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
              {user && user.user_data ? user.user_data != null ? user.user_data.name : null : 'GUEST'}

            </Text>
          </View>
          <View style={{ height: 10, backgroundColor: Colors.lightGrey }}></View>
          <View style={{ backgroundColor: Colors.white }}>

            {user && this.props.user.isLoggedIn ?
              <View>
                <Ripple style={styles.menuItem}
                  onPress={() => {
                    this.props.navigation.navigate("MyAccount");
                  }}
                >
                  <Text style={styles.textItem}>
                    My Account
                  </Text>
                </Ripple>
                <Ripple style={styles.menuItem}
                  onPress={() => {
                    this.props.navigation.navigate("OrderScreen");
                  }}
                >
                  <Text style={styles.textItem}>
                    My Orders
               </Text>
                </Ripple>
              </View> : null

            }
            {menuItems.map((item, index) => {
              return (
                <Ripple key={index} style={styles.menuItem}
                  onPress={() => this.props.navigation.navigate(item.route)}
                >
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

const mapStateToProps = state => {
  const { user } = state;
  //console.log("user in Profile Screen- ", JSON.stringify(user));
  return {
    user
  };
};



export default connect(
  mapStateToProps,
  null
)(ProfileScreen);

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
    color: Colors.charcoal,
    fontFamily: Fonts.type.gotham_medium,
  }
});
