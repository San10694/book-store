import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import { getRestaurantList } from "../Redux/ListRedux";
import { MenuIcon } from '../Components/MenuIcon';
import {
  DrawerActions
} from "react-navigation";
import { Colors } from "../Themes";


const myButton = (
  <Icon.Button
    name="facebook"
    backgroundColor="#3b5998"
    onPress={this.loginWithFacebook}
  >
    Login with Facebook
  </Icon.Button>
);
class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }


  static navigationOptions = {
    headerStyle: {
      backgroundColor: Colors.lightGrey,
      elevation: 0

    },
  }

  componentDidMount() {
    //this.props.getRestaurantList();
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        {/* <TouchableOpacity
          onPress={() => {
            this.props.navigation.dispatch(DrawerActions.toggleDrawer());
          }}
        >
          <MenuIcon navigation={this.props.navigation} />
        </TouchableOpacity> */}

        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to Home!</Text>
          <Text style={styles.instructions}>Start Buying Books form this page</Text>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("ProfileScreen")}
          >
            <Icon.Button
              name="facebook"
              backgroundColor="#3b5998"
              onPress={this.loginWithFacebook}
            >
              Login with Facebook
         </Icon.Button>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { restaurantList } = state;
  console.log("State in Home Screen- ", restaurantList);
  return {
    restaurantList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRestaurantList: () => dispatch(getRestaurantList())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.lightGrey
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: Colors.Text,
    marginBottom: 5
  }
});
