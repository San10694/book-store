import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage,
  Alert,
  Linking,
  Platform
} from "react-native";
import { DrawerActions } from "react-navigation";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ripple from 'react-native-material-ripple';
import { Colors, Fonts } from '../Themes'
import { connect } from "react-redux";
import { logout } from "../Redux/UserRedux";

const phoneNumber = 8147464241;

const menuItems =
  [{ 'title': 'SHOP', 'route': 'Home', 'icon': 'shopping' },
  // { 'title': 'CATEGORY', 'route': 'Categories', 'icon': 'apps' },
  { 'title': 'REQUEST/ EXCHANGE', 'route': 'ReturnScreen', 'icon': 'message-outline' },
  { 'title': 'ABOUT US', 'route': 'AboutScreen', 'icon': 'book-open-outline' },
    // { 'title': 'Contact Us', 'route': '' },
    //{ 'title': 'LOGIN', 'route': 'LoginScreen' },
  ]

class DrawerScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    }

  }

  // shouldComponentUpdate() {
  //   return false
  // }

  navigateToScreen(route) {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
  };

  makePhoneCall() {
    let contact;
    contact = Platform.OS !== 'android' ? `telprompt:${phoneNumber}` : `tel:${phoneNumber}`;
    Linking.canOpenURL(contact)
      .then(supported => {
        if (!supported) {
          Alert.alert('', 'Phone number is not available');
        } else {
          return Linking.openURL(contact);
        }
      })
      .catch(err => console.log(err));
  };
  // Linking.openURL(`tel:${phoneNumber}`);

  // }


  logout() {
    Alert.alert(
      '',
      'Are you sure you want to logout ?',
      [
        {
          text: 'Cancel',
          onPress: console.log('cancel'),
          style: 'cancel',
        },
        {
          text: 'OK', onPress: () => {
            this.navigateToScreen("LoginScreen");
            this.props.logout()
          }
        },
      ],
      { cancelable: false }
    );
  }


  render() {
    const { user } = this.props.user;
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
                {user && user.user_data ? user.user_data != null ? user.user_data.name : null : 'GUEST'}
              </Text>
            </View>
            {menuItems.map((item, index) => {
              return (
                <Ripple key={index} style={styles.menuItem} onPress={() => {
                  this.navigateToScreen(item.route)
                }}>
                  <View style={{ flexDirection: 'row', }}>
                    <Icon style={{ marginRight: 10 }} name={item.icon} size={22} color={Colors.primary}></Icon>
                    <Text style={styles.textItem}>
                      {item.title}
                    </Text>
                  </View>
                </Ripple>
              )
            })
            }
            {
              <Ripple style={styles.menuItem}
                onPress={() => {
                  this.makePhoneCall()
                }}
              >
                <View style={{ flexDirection: 'row', }}>
                  <Icon style={{ marginRight: 10 }} name={"phone"} size={22} color={Colors.primary}></Icon>
                  <Text style={styles.textItem}>
                    CONTACT US
                </Text>
                </View>
              </Ripple>
            }
            {user && this.props.user.isLoggedIn ?
              <Ripple style={styles.menuItem}
                onPress={() => { this.logout() }}
              >
                <View style={{ flexDirection: 'row', }}>
                  <Icon style={{ marginRight: 10 }} name={"logout"} size={22} color={Colors.primary}></Icon>
                  <Text style={styles.textItem}>
                    LOGOUT
                  </Text>
                </View>
              </Ripple> :
              <Ripple style={styles.menuItem}
                onPress={() => {
                  this.navigateToScreen("LoginScreen");
                }}
              >
                <View style={{ flexDirection: 'row', }}>
                  <Icon style={{ marginRight: 10 }} name={"login"} size={22} color={Colors.primary}></Icon>
                  <Text style={styles.textItem}>
                    LOGIN
                  </Text>
                </View>
              </Ripple>
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state;
  return {
    user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
  };
};



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerScreen);


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
    fontSize: 16,
    fontWeight: "400",
    color: Colors.black,
    fontFamily: Fonts.type.gotham_medium,

  }
});

      // use native component for drawer
// import {DrawerItems, SafeAreaView } from "react-navigation";

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
