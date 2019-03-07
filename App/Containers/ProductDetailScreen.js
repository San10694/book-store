import React, { Component } from "react";
import { Text, View, ScrollView, Image, Dimensions, TouchableOpacity } from "react-native";
import { Colors, Images, Constants } from "../Themes";
import Fonts from '../Themes/Fonts';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './Styles';
import Api from "../Services";
import { connect } from "react-redux";
import { addToCart } from '../Redux/CartRedux';
import { addWishListItem, removeWishListItem } from '../Redux/WishListRedux';
import Ripple from "react-native-material-ripple";

detail = { title: 'Harry Poter part -1', price: 50, shopname: 'Student shop', image: Images.burdon, description: 'Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.' }

const imageUrl = 'http://vemulate.com/image/'
const api = Api.Api();

class ProductDetailScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.navigation.state.params.product_id,
      productDetail: null,//props.navigation.state.params.product
      isFavourite: false
    }
    // console.log('productDetails--', JSON.stringify(this.props.navigation.state.params.product));
  }

  addToWishList() {
    if (!this.state.isFavourite) {
      this.props.addToWishList(this.state.productDetail);
    } else {
      this.props.removeWishListItem(this.state.productDetail);
    }
    this.setState({ isFavourite: !this.state.isFavourite })
  }

  componentDidMount() {
    // this.setState({ productDetail: this.props.navigation.state.params.product })
    api.getProductDetails(this.state.id).then(response => {
      // console.log("res--", response);
      const { data } = response ? response.data : []
      // console.log('getProductDetails -', data[0]);
      this.setState({ productDetail: data[0] })

      // console.log('getProductDetails -', JSON.stringify(data));
    })
  }

  // add to cart
  addProductToCart() {

    console.log('product----------->' + JSON.stringify(this.state.productDetail));
    this.props.addToCart(this.state.productDetail);
    this.props.navigation.navigate('CartScreen');
  }

  render() {
    const { productDetail } = this.state;
    if (productDetail == null) {
      return <View></View>
    }
    console.log(imageUrl + productDetail.image[0].path);
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={Styles.productDetailContainer}>
          <View style={Styles.productdetailSubContainer}>
            <Image source={{ uri: productDetail.image ? imageUrl + productDetail.image[0].path : null }}
              style={Styles.ProductDetailImg} />
            <Ripple style={Styles.productDetailFav}
              onPress={() => this.addToWishList()}>
              {this.state.isFavourite ?
                <Icon name='heart' size={25} color={Colors.error} /> :
                <Icon name='heart' size={25} color={Colors.Text} />
              }
            </Ripple>
          </View>
          <View style={Styles.productPriceContainer}>
            <Text style={{ fontSize: Fonts.size.h6, fontWeight: '600' }}>{productDetail.title}</Text>
            {/* <Text style={{ fontSize: Fonts.size.input, fontWeight: '400' }}>{productDetail.shopname}</Text> */}
            <Text style={{ fontSize: Fonts.size.regular_17, fontWeight: '300' }}>{Constants.rupee}{productDetail.sale_price}</Text>
          </View>
          <View style={Styles.productDescription}>
            <Text>{productDetail.description}</Text>
          </View>

        </ScrollView>
        <View style={Styles.checkoutContainer}>
          <Ripple
            style={Styles.buyButton}
            onPress={() => this.addProductToCart()}
          >
            <Text style={Styles.btnText}>Buy Now</Text>
          </Ripple>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { cartItems, wishItems } = state;
  console.log('wishItems -> ', JSON.stringify(wishItems));
  return {
    cartItems, wishItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: item => dispatch(addToCart(item)),
    addWishListItem: item => dispatch(addWishListItem(item)),
    removeWishListItem: item => dispatch(removeWishListItem(item)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailScreen);
