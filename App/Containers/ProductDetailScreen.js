import React, { Component } from "react";
import { Text, View, ScrollView, Image, Dimensions, TouchableOpacity } from "react-native";
import { Colors, Images } from "../Themes";
import Fonts from '../Themes/Fonts';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './Styles';
import Api from "../Services";
import { connect } from "react-redux";
import { getProducts } from "../Redux/ProductRedux";
import axios from 'axios';

detail = { title: 'Harry Poter part -1', price: 50, shopname: 'Student shop', image: Images.burdon, description: 'Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.' }

const imageUrl = 'http://vemulate.com/image/'
const api = Api.Api();

export default class ProductDetailScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.navigation.state.params.product_id,
      productDetail: props.navigation.state.params.product
    }
    console.log('rrrrrrrrrrrrr', JSON.stringify(this.props.navigation.state.params.product));
  }

  componentDidMount() {
    this.setState({ productDetail: this.props.navigation.state.params.product })
  }

  render() {
    const { productDetail } = this.state;
    if (productDetail == null) {
      return <View></View>
    }
    return (
      <View style={Styles.productDetailContainer}>

        <View style={Styles.productdetailSubContainer}>
          <Image source={productDetail.image ? imageUrl + productDetail.image.path : null} style={Styles.ProductDetailImg} />
          <Icon name='heart' size={25} color={Colors.lightGrey} style={Styles.productDetailFav} />
        </View>
        <View style={Styles.productPriceContainer}>
          <Text style={{ fontSize: Fonts.size.h6, fontWeight: '600' }}>{productDetail.title}</Text>
          {/* <Text style={{ fontSize: Fonts.size.input, fontWeight: '400' }}>{productDetail.shopname}</Text> */}
          <Text style={{ fontSize: Fonts.size.regular_17, fontWeight: '300' }}>${productDetail.sale_price}</Text>
        </View>
        <View style={Styles.productDescription}>
          <Text>{detail.description}</Text>
        </View>
        <View style={Styles.buyContainer}>
          <View style={Styles.buySubContainer}>
            <TouchableOpacity
              style={Styles.buyButton}
            //onPress={this.onSignUpHandle}
            >
              <Text style={Styles.btnText}>Shopping</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.buySubContainer}>
            <TouchableOpacity
              style={Styles.buyButton}
            //onPress={this.onSignUpHandle}
            >

              <Text style={Styles.btnText}>Buy Now</Text>

            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}


// const mapStateToProps = state => {
//   const { product } = state;
//   console.log('ffffffffffffffff', product);
//   return {
//     product
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {

//     getProducts: (flag) => dispatch(getProducts(flag)),
//   };
// };
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ProductDetailScreen);