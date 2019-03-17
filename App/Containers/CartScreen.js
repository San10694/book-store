import React, { Component } from "react";
import { Text, View, Image, ScrollView, FlatList, TouchableOpacity, Alert } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Fonts from '../Themes/Fonts';
import Ripple from "react-native-material-ripple";
import { connect } from "react-redux";
import { addToCart, deleteCartItem, removeCartItem, saveGrandTotal } from '../Redux/CartRedux';
import Styles from './Styles';
import { Colors, Images, Constants } from "../Themes";


class CartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            subTotal: this.props.cartItems.subTotal,
            grandTotal: this.props.cartItems.grandTotal,
        }
    }

    static navigationOptions = {

    }

    componentDidMount() {
        this.updateData(this.props.cart);
    }


    //increase product quantity
    add(e, item) {
        this.setState({ count: this.state.count + 1 });
        //  con sole.log("add-----");
        this.props.addCartItem(item);
        this.setState({
            subTotal: this.props.cartItems.subTotal,
            grandTotal: this.props.cartItems.grandTotal,
            payMoney: this.props.cartItems.grandTotal,
        });
        this.updateData(this.props.cart);
    }

    //decrease product quantity
    remove(e, item) {
        this.state.count >= 1
            ? this.setState({ count: this.state.count - 1 })
            : this.setState({ count: this.state.count });
        // console.log('state', this.state.count);
        this.props.removeCartItem(item);
        this.setState({
            subTotal: this.props.cartItems.subTotal,
            grandTotal: this.props.cartItems.grandTotal,
            payMoney: this.props.cartItems.grandTotal,
        });
        this.updateData(this.props.cart);
    }

    async updateData(cart) {
        var subTotal = 0.0;
        var grandTotal = 0.0;
        var payMoney = 0.0;
        var tax = 0.0;
        if (cart.length === 0) {
            await this.setState({
                subTotal: 0.0,
                grandTotal: 0.0,
            });
        } else {
            var subTotal = 0.0;
            var grandTotal = 0.0;
            var tax = 0.0;
            this.props.cart.map(item => {
                item.totalPrice = item.quantity * item.sale_price;
                subTotal = subTotal + item.totalPrice;
            });
            await this.setState({
                active: true,
                subTotal: subTotal,
                grandTotal: subTotal
            });
        }
    }
    // delete card item
    deleteToCart(item) {
        Alert.alert(
            '',
            'Are you sure you want to remove this product ?',
            [
                {
                    text: 'Cancel',
                    onPress: console.log('cancel'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => this.deleteCartData(item) },
            ],
            { cancelable: false }
        );

    }

    async  deleteCartData(item) {
        await this.props.deleteCartItem(item);
        this.updateData(this.props.cart);
    }
    // move to pay
    moveToPay() {
        if (this.props.user.user && this.props.user.isLoggedIn) {
            this.props.navigation.navigate('AddressListScreen', { amount: this.state.subTotal });
            this.props.saveGrandTotal(this.state.subTotal);

        } else {
            this.props.navigation.navigate('LoginScreen')

        }
    }

    showAlert(item) {
        Alert.alert(
            '',
            'Are you sure you want to remove this product?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => this.deleteToCart(item) },
            ]
        );
    }

    render() {
        const { cartItems } = this.props
        console.log("Cart Items - ", cartItems)
        if (cartItems.cart.length == 0) {
            return <View style={{ flex: 1, paddingTop: 20, alignItems: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: '600', color: Colors.primary }}>Your Cart is empty </Text>
                {/* <Ripple
                    style={{
                        width: 100,
                        height: 35,
                        backgroundColor: Colors.primary,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 5,
                        alignSelf: 'center',
                        marginTop: 20
                    }}
                    onPress={() => { this.props.navigation.navigate("HomeTab") }}
                >
                    <Text style={Styles.btnText}>Add Items</Text>
                </Ripple> */}

            </View>
        }
        else {
            return (
                <View style={{ flex: 1 }}>
                    <ScrollView style={Styles.productDetailContainer}>
                        <View style={{ borderBottomColor: Colors.lightgrey, borderBottomWidth: 1 }}>
                            <View style={{ padding: 15, justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text style={{ fontSize: Fonts.size.regular_17, fontWeight: '500' }}>Total Price :</Text>
                                <Text style={{ fontSize: Fonts.size.regular_17, color: Colors.primary, fontWeight: '500' }}>{Constants.rupee}{this.state.subTotal}</Text>
                            </View>
                        </View>
                        <FlatList
                            data={cartItems.cart}
                            renderItem={({ item }) => (
                                <View key={item.product_id} style={{ borderBottomColor: Colors.lightgrey, borderBottomWidth: 1 }}>

                                    <View style={{ padding: 20, flex: 1, flexDirection: 'row', }}>
                                        <View style={{
                                            flex: .3, width: 85, height: 85, marginRight: 5,
                                        }}>
                                            <Image source={{ uri: item.image ? Constants.IMAGE_URL + item.image[0].path : null }}
                                                style={{
                                                    width: 85, height: 85,
                                                    borderWidth: 1,
                                                    borderColor: Colors.lightGrey
                                                }} />
                                        </View>
                                        <View style={{ flex: .75, position: 'relative' }}>
                                            <Text style={{ paddingLeft: 8, fontSize: Fonts.size.medium_15 }}>{item.title}</Text>
                                            <Text style={{ padding: 8, fontSize: Fonts.size.medium_15, color: Colors.primary, fontWeight: '600' }}>{Constants.rupee}{item.sale_price}</Text>
                                            <Ripple style={{ paddingLeft: 8 }} onPress={() => this.deleteToCart(item)} >
                                                <Icon name='trash-o' size={25} color={Colors.lightgrey} />
                                            </Ripple>
                                        </View>
                                        <View style={{ flex: .1 }}>
                                            <View style={{ backgroundColor: Colors.lightGrey, alignItems: 'center', width: 25, height: 85, borderColor: Colors.lightgrey, borderWidth: 1, borderRadius: 25 }}>
                                                <Ripple onPress={(e) => this.add(e, item)}><Icon name='caret-up' size={25} color={Colors.lightgrey} /></Ripple>
                                                <View style={{ paddingTop: 6, paddingBottom: 6 }}><Text>{item.quantity}</Text></View>
                                                <Ripple onPress={(e) => {
                                                    if (item.quantity > 1)
                                                        this.remove(e, item)
                                                }}><Icon name='caret-down' size={25} color={Colors.lightgrey} /></Ripple>
                                            </View>
                                        </View>
                                    </View>

                                </View>
                            )}
                            keyExtractor={(item, index) => item.id}
                        />

                    </ScrollView>
                    <View style={Styles.checkoutContainer}>
                        <Ripple
                            style={Styles.buyButton}
                            onPress={() => this.moveToPay()}
                        >
                            <Text style={Styles.btnText}>Checkout</Text>
                        </Ripple>
                    </View>
                </View>
            );
        }
    }
}

const mapStateToProps = state => {
    const { cartItems, user } = state;
    const { cart } = state.cartItems;
    console.log('cartitem USER-> ', user);
    return {
        cartItems, cart, user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addCartItem: item => dispatch(addToCart(item)),
        removeCartItem: item => dispatch(removeCartItem(item)),
        deleteCartItem: item => dispatch(deleteCartItem(item)),
        saveGrandTotal: item => dispatch(saveGrandTotal(item)),
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartScreen);

