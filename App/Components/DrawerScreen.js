import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { DrawerActions } from "react-navigation";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ripple from 'react-native-material-ripple';
import { Colors } from '../Themes'
import { connect } from "react-redux";
import { logout } from "../Redux/UserRedux";



const menuItems =
  [{ 'title': 'SHOP', 'route': 'Home' },
  { 'title': 'CATEGORY', 'route': 'Categories' },
  { 'title': 'ABOUT US', 'route': 'AboutScreen' },
  { 'title': 'CONTACT', 'route': 'ContactScreen' },
  { 'title': 'SETTING', 'route': 'Profile' },
    //{ 'title': 'LOGIN', 'route': 'LoginScreen' },
  ]

class DrawerScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    }

  }

  navigateToScreen(route) {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
  };


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
                {user && user.user_data ? user.user_data[0].name != null ? user.user_data[0].name : null : 'GUEST'}
              </Text>
            </View>
            {menuItems.map((item, index) => {
              return (
                <Ripple key={index} style={styles.menuItem} onPress={() => {
                  this.navigateToScreen(item.route)
                }}>
                  <Text style={styles.textItem}>
                    {item.title}
                  </Text>
                </Ripple>
              )
            })
            }
            {user ?
              <Ripple style={styles.menuItem}
                onPress={() => {
                  this.navigateToScreen("LoginScreen");
                  this.props.logout()
                }}
              >
                <Text style={styles.textItem}>
                  LOGOUT
                  </Text>
              </Ripple> :
              <Ripple style={styles.menuItem}
                onPress={() => {
                  this.navigateToScreen("LoginScreen");
                }}
              >
                <Text style={styles.textItem}>
                  LOGIN
                  </Text>
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
