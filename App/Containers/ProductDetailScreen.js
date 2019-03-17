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
import Snackbar from 'react-native-snackbar';


detail = { title: 'Harry Poter part -1', price: 50, shopname: 'Student shop', image: Images.burdon, description: 'Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.' }

const api = Api.Api();

class ProductDetailScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.navigation.state.params.product_id,
      productDetail: null,//props.navigation.state.params.product
      isFavourite: false,
    }

  }


  addToWishList() {
    if (!this.state.isFavourite) {
      console.log('addddd')
      this.props.addWishListItem(this.state.productDetail);
    } else {
      console.log('remove')
      this.props.removeWishListItem(this.state.productDetail);
    }
    this.setState({ isFavourite: !this.state.isFavourite })
  }

  findMyId() {
    if (this.props.wishList.wishListItems.length > 0) {
      this.props.wishList.wishListItems.forEach(item => {
        if (item.product.product_id === this.state.id) {
          this.setState({ isFavourite: true })
        }
      })
    }
  }

  componentDidMount() {
    // this.setState({ productDetail: this.props.navigation.state.params.product })
    api.getProductDetails(this.state.id).then(response => {
      // console.log("getProductDetails--", response, "--id ", this.state.id);
      const { data } = response ? response.data : []
      this.setState({ productDetail: data[0] })
    })
    this.findMyId();
  }

  // add to cart
  addProductToCart() {
    this.props.addToCart(this.state.productDetail);
    this.props.navigation.navigate('CartScreen');
  }

  showToast(message) {
    Snackbar.show({
      title: message,
      duration: Snackbar.LENGTH_LONG,
    });
  }

  render() {
    const { productDetail } = this.state;
    if (productDetail == null) {
      return <View></View>
    }

    return (
      <View style={{ flex: 1, backgroundColor: Colors.lightGrey }}>
        <ScrollView style={Styles.productDetailContainer}>
          <View style={Styles.productdetailSubContainer}>
            <Image source={{ uri: productDetail.image ? Constants.IMAGE_URL + productDetail.image[0].path : null }}
              style={Styles.ProductDetailImg} />
            {this.state.isFavourite ?
              <Ripple style={Styles.productDetailFav}
                onPress={() => {
                  this.setState({ isFavourite: !this.state.isFavourite });
                  this.props.removeWishListItem(productDetail);
                  this.showToast("Product removed from wishlist")
                }}>
                <Icon name='heart' size={25} color={Colors.error} />
              </Ripple>
              :
              <Ripple style={Styles.productDetailFav}
                onPress={() => {
                  this.setState({ isFavourite: !this.state.isFavourite });
                  this.props.addWishListItem(productDetail);
                  this.showToast("Product added to wishlist")

                }}>
                <Icon name='heart' size={25} color={Colors.primary} />
              </Ripple>
            }
          </View>
          <View style={Styles.productPriceContainer}>
            <Text style={{ fontSize: Fonts.size.h6, fontWeight: '600' }} numberOfLines={2}>{productDetail.title}</Text>
            {/* <Text style={{ fontSize: Fonts.size.input, fontWeight: '400' }}>{productDetail.shopname}</Text> */}
          </View>
          <View style={Styles.productDescription}>
            <Text numberOfLines={1}>{productDetail.description}</Text>
          </View>


        </ScrollView>
        <View style={Styles.BuyContainer}>
          <Ripple
            style={[Styles.detailBottomPriceBtn]}
          // onPress={() => this.addProductToCart()}
          >
            <Text style={{ fontSize: Fonts.size.regular_17, fontWeight: '500' }}>{Constants.rupee}{productDetail.sale_price}/-</Text>

          </Ripple>
          <Ripple
            style={Styles.detailBottomButton}
            onPress={() => this.addProductToCart()}
          >
            <Text style={Styles.btnText}>Buy Now</Text>
          </Ripple>
        </View>
      </View >
    );
  }
}

const mapStateToProps = state => {
  const { cartItems, wishList } = state;
  return {
    cartItems, wishList
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
