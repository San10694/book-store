import React, { Component } from "react";
import { Text, View, ScrollView, Image, Dimensions, TouchableOpacity } from "react-native";
import { Colors, Images, Constants } from "../Themes";
import Fonts from '../Themes/Fonts';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './Styles';
import Api from "../Services";
import { connect } from "react-redux";
import { addToCart } from '../Redux/CartRedux';
import Ripple from "react-native-material-ripple";

detail = { title: 'Harry Poter part -1', price: 50, shopname: 'Student shop', image: Images.burdon, description: 'Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.' }

const imageUrl = 'http://vemulate.com/image/'
const api = Api.Api();

class ProductDetailScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.navigation.state.params.product_id,
      productDetail: null//props.navigation.state.params.product
    }
    // console.log('productDetails--', JSON.stringify(this.props.navigation.state.params.product));
  }


  componentDidMount() {
    // this.setState({ productDetail: this.props.navigation.state.params.product })
    api.getProductDetails(this.state.id).then(response => {
      console.log("res--", response);
      const { data } = response ? response.data : []
      console.log('getProductDetails -', data[0]);
      this.setState({ productDetail: data[0] })
      // console.log('getProductDetails -', JSON.stringify(data));
    })

    // this.addProductData();

  }

  // addProductData() {
  //   var bodyFormData = new FormData();
  //   var data = { 'key': 'A123456789', 'id': this.state.id };
  //   bodyFormData.append(data);
  //   console.log(JSON.stringify(bodyFormData));
  //   axios.post(BASE_URL + '/api/products', bodyFormData).then(response => {
  //     console.log(JSON.stringify(response));
  //   }).catch(error => {
  //     console.log(JSON.stringify(error));
  //   });
  // }

  // add to cart
  addProductToCart() {
    var product = this.state.productDetail;
    console.log('product-->' + JSON.stringify(product));
    this.props.addCartItem(product);
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
            <Icon name='heart' size={25} color={Colors.lightGrey} style={Styles.productDetailFav} />
          </View>
          <View style={Styles.productPriceContainer}>
            <Text style={{ fontSize: Fonts.size.h6, fontWeight: '600' }}>{productDetail.title}</Text>
            {/* <Text style={{ fontSize: Fonts.size.input, fontWeight: '400' }}>{productDetail.shopname}</Text> */}
            <Text style={{ fontSize: Fonts.size.regular_17, fontWeight: '300' }}>{Constants.rupee}{productDetail.sale_price}</Text>
          </View>
          <View style={Styles.productDescription}>
            <Text>{detail.description}</Text>
          </View>

        </ScrollView>
        <View style={Styles.buyContainer}>
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
  const { cartItems } = state;
  console.log('cartitem -> ', cartItems);
  return {
    cartItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCartItem: item => dispatch(addToCart(item)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailScreen);
