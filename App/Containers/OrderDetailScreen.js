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

class OrderDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderDetail: null,
            id: props.navigation.state.params.id,
        }

    }


    componentDidMount() {
        // this.setState({ productDetail: this.props.navigation.state.params.product })
        api.getOrderDetail(this.state.id).then(response => {
            const { data } = response ? response.data : []
            // console.log('getProductDetails -', data);
            console.log('getProductDetails -', JSON.stringify(data));
            this.setState({ orderDetail: data[0] })
        })
    }


    render() {
        const { orderDetail } = this.state;
        if (orderDetail == null) {
            return <View></View>
        }
        // console.log(imageUrl + productDetail.image[0].path);
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={Styles.productDetailContainer}>
                    <View style={Styles.productdetailSubContainer}>
                        <Image source={detail.image}
                            style={Styles.ProductDetailImg} />
                    </View>
                    <View style={Styles.productPriceContainer}>
                        <Text style={{ fontSize: Fonts.size.h6, fontWeight: '600' }}>{detail.title}</Text>
                        {/* <Text style={{ fontSize: Fonts.size.input, fontWeight: '400' }}>{productDetail.shopname}</Text> */}
                        <Text style={{ fontSize: Fonts.size.regular_17, fontWeight: '300' }}>{Constants.rupee}{detail.grand_total}</Text>
                    </View>
                    <View style={Styles.productDescription}>
                        <Text>{detail.description}</Text>
                    </View>

                </ScrollView>
                <View style={Styles.checkoutContainer}>
                    <Ripple
                        style={Styles.buyButton}
                        onPress={() => this.props.navigation.navigate("HomeTab")}
                    >
                        <Text style={Styles.btnText}>Continue Shopping</Text>
                    </Ripple>
                </View>
            </View>
        );
    }
}

// const mapStateToProps = state => {
//   const { cartItems } = state;
//   console.log('cartitem -> ', cartItems);
//   return {
//     cartItems
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     addToCart: item => dispatch(addToCart(item)),
//   }
// };

export default OrderDetailScreen;
