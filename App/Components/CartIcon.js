
import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ripple from 'react-native-material-ripple';
import { Colors } from "../Themes";
import { connect } from 'react-redux';


class CartIcon extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const { navigation, cart } = this.props;
    //console.log("FeatureCard  -", image)
    return (
      <Ripple onPress={() => {
        navigation.navigate("CartScreen");
      }} >
        <View style={{ margin: 10, right: 12 }}>
          <Icon name="cart-outline" size={25} color={Colors.primary}>
          </Icon>
        </View>
        {cart.length > 0 ?
          <Text style={styles.textStyle}>{cart.length}</Text> : null}
      </Ripple>
    );
  };
}


const mapStateToProps = state => {
  const { cart } = state.cartItems;
  // console.log("wishList in wishList Screen- ", wishList);
  return {
    cart
  };
};



export default connect(
  mapStateToProps,
  null
)(CartIcon);

const styles = StyleSheet.create({

  textStyle: {
    backgroundColor: Colors.primary,
    color: Colors.white,
    width: 18,
    height: 18,
    paddingVertical: 2,
    top: 6,
    right: 12,
    zIndex: 10,
    overflow: 'hidden',
    position: 'absolute',
    textAlign: 'center',
    borderRadius: 10,
    fontSize: 9,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: -0.13,
  }

})
