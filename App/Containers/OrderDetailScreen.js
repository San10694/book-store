import React, { Component } from "react";
import { Text, View, ScrollView, Image, FlatList, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Colors, Images, Constants } from "../Themes";
import Fonts from '../Themes/Fonts';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './Styles';
import Api from "../Services";
import { connect } from "react-redux";
import { addToCart } from '../Redux/CartRedux';
import Ripple from "react-native-material-ripple";
import ActivityIndicator from "../Components/ActivityIndicator";
import Moment from 'moment';


detail = { title: 'Fundamentals of Engineering Drawing', price: 300, shopname: 'Student shop', image: Images.burdon, description: 'Fundamentals of Engineering Drawing-Luzadder Warren J.Duff John M.' }

const imageUrl = 'http://vemulate.com/image/'
const api = Api.Api();

class OrderDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderDetails: null,
            id: props.navigation.state.params.id,
            isFetching: false
        }

    }


    componentDidMount() {
        // this.setState({ productDetail: this.props.navigation.state.params.product })
        this.setState({ isFetching: true })
        api.getOrderDetail(17).then(response => {
            const { data } = response ? response.data : []
            console.log('getOrderDetail -', data);
            this.setState({ orderDetails: data, isFetching: false })
        })
    }


    render() {
        const { orderDetails, isFetching } = this.state;
        if (!orderDetails) {
            return <ActivityIndicator isFetching={isFetching} />
        }
        // console.log(imageUrl + productDetail.image[0].path);
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={Styles.productDetailContainer}>
                    <FlatList
                        data={orderDetails.product_details}
                        renderItem={({ item }) => (
                            <View key={item.inventory_id} style={styleSheet.ItemContainer}>
                                <View style={styleSheet.ItemImgContent}>
                                    <View style={styleSheet.ImgWrapper}>
                                        <Image source={Images.burdon} style={styleSheet.Img} />
                                    </View>
                                </View>
                                <View style={styleSheet.ItemContent}>
                                    <Text style={styleSheet.Title}>Title : {item.title}</Text>
                                    <Text style={styleSheet.Date}>Quantity : {item.quantity}</Text>
                                    <Text style={styleSheet.Date}>Price : {item.unit_price}</Text>
                                </View>
                            </View>
                        )}
                        keyExtractor={(item, index) => item.order_id}
                    />

                    {/* <View style={Styles.productdetailSubContainer}>
                        <Image source={detail.image}
                            style={Styles.ProductDetailImg} />
                    </View>
                    <View style={Styles.productPriceContainer}>
                        <Text style={{ fontSize: Fonts.size.h6, fontWeight: '600' }}>{detail.title}</Text>
                        <Text style={{ fontSize: Fonts.size.regular_17, fontWeight: '300' }}>{Constants.rupee}{detail.price}</Text>
                    </View>
                    <View style={Styles.productDescription}>
                        <Text>{detail.description}</Text>
                    </View> */}
                    <View style={{ flex: 1, padding: 10, marginTop: 20 }}>
                        <View style={{
                            borderBottomWidth: 1,
                            borderBottomColor: Colors.charcoal
                        }}><Text style={styleSheet.Title}>Order Summary</Text></View>
                        < Text style={styleSheet.listItem}>Shipping Address : {orderDetails.shipping_address}</Text>
                        <Text style={styleSheet.listItem}>Order Id : {orderDetails.order_no}</Text>
                        <Text style={styleSheet.listItem}>Order Date : {Moment(orderDetails.sale_datetime).format('DD-MMM-YYYY')}</Text>
                        <Text style={styleSheet.listItem}>Delivery Status : {orderDetails.delivery_status}</Text>
                        <View>
                            <Text style={styleSheet.Price}>Total : {Constants.rupee}{orderDetails.total}</Text>
                        </View>
                        <View>
                            <Text style={styleSheet.Price}>Grand Total : {Constants.rupee}{orderDetails.grand_total}</Text>
                        </View>
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

const styleSheet = StyleSheet.create({
    Container: {
        // backgroundColor: Colors.background,
        // padding: 5,
        marginBottom: 12,
        paddingHorizontal: 6,
        paddingVertical: 12
    },
    ItemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.white,
        padding: 4,
        borderRadius: 2,
        shadowColor: Colors.lightgrey,
        minHeight: 100,
        marginBottom: 12,
        //marginTop: 6,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 1,
        shadowOpacity: 0.5,

    },
    ItemContent: {
        flex: 0.7,
        padding: 4,
        paddingLeft: 12,
    },
    ItemImgContent: {
        flex: 0.3,
    },
    ImgWrapper: {
        height: 90,
        overflow: 'hidden',
    },
    Img: {
        width: '100%',
        height: '100%',
        borderRadius: 2,
    },

    Title: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.blackTextSecondary,
        marginBottom: 6,
    },
    Price: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.primary,
        marginBottom: 4,
    },
    Date: {
        fontSize: 14,
        color: Colors.blackTextSecondary,
        marginBottom: 4,
        paddingRight: 10,
        overflow: 'hidden',
    },
    btnWrap: {
        flex: 0.2,
        right: 10,
        justifyContent: 'center'
    },
    btn: {
        width: '100%',
        backgroundColor: Colors.primary,
        borderRadius: 1,
        height: 30,
        paddingLeft: 10,
        position: 'relative',
        marginBottom: 4,
    },
    btnText: {
        position: 'absolute',
        top: 5,
        alignSelf: 'center',
        color: Colors.white,
        fontSize: 12,
        fontWeight: '500',
    },
    emptyText: {
        textAlign: 'center',
        fontSize: 18,
    },
    emptyIcon: {
        alignSelf: 'center',
        marginTop: 100,
    },
    listItem: {
        fontSize: 14,
        color: Colors.blackTextSecondary,
        marginBottom: 4,
        paddingRight: 10,
        overflow: 'hidden',
        // borderBottomWidth: 1,
        // borderBottomColor: Colors.charcoal
    }
});
