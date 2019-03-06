import React, { Component } from "react";
import { Text, View, Image, ScrollView, FlatList, TouchableOpacity, Alert } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Fonts from '../Themes/Fonts';
import Ripple from "react-native-material-ripple";
import { connect } from "react-redux";
import { addToCart, deleteCartItem, removeCartItem } from '../Redux/CartRedux';
import Styles from './Styles';
import { Colors, Images, Constants } from "../Themes";

const imageUrl = 'http://vemulate.com/image/'


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
    async remove(e, item) {
        console.log('remove cartItems!!-');
        this.state.count >= 1
            ? this.setState({ count: this.state.count - 1 })
            : this.setState({ count: this.state.count });
        console.log('state', this.state.count);
        await this.props.removeCartItem(item);
        this.setState({
            subTotal: this.props.cartItems.subTotal,
            grandTotal: this.props.cartItems.grandTotal,
            payMoney: this.props.cartItems.grandTotal,
        });
        this.updateData(this.props.cart);
    }

    async updateData(cart) {
        console.log('qqqqqqqqqqqqqqqqq', cart[0].min_order_quantity);
        var subTotal = 0.0;
        var grandTotal = 0.0;
        var payMoney = 0.0;
        var tax = 0.0;
        if (cart.length === 0) {
            await this.setState({
                subTotal: 0.0,
                grandTotal: 0.0,
            });
            this.props.cartItems.subTotal = this.state.subTotal;
            this.props.cartItems.grandTotal = this.state.grandTotal;
        } else {
            var subTotal = 0.0;
            var grandTotal = 0.0;
            var tax = 0.0;
            // console.log('state.cart.length', this.props.cart.length);
            this.props.cart.map(item => {
                item.totalPrice = Number(item.quantity) * item.sale_price;
                subTotal = subTotal + item.quantity * item.sale_price;
                this.props.cartItems.subTotal = subTotal;
                this.props.cartItems.grandTotal = subTotal;
                this.props.cartItems.payMoney = subTotal;
                console.log('state.grandTotal', subTotal);
                console.log('priceeeeeeeee', Number(item.quantity))
            });
            await this.setState({
                active: true,
                subTotal: this.props.cartItems.subTotal,
                grandTotal: this.props.cartItems.grandTotal
            });
            this.state.subTotal = this.props.cartItems.subTotal;
            this.state.grandTotal = this.props.cartItems.grandTotal;
            console.log(
                "grandtotal====>" + this.props.cartItems.subTotal + "" + this.state.subTotal
            );
            console.log('cart length', this.props.cart.length);
        }

    }
    // delete card item
    deleteToCart(e, item) {
        Alert.alert(
            'ohhhh!', 'Do you want to remove cart!',
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
        if (this.props.user.isLoggedIn === false) {
            this.props.navigation.navigate('LoginScreen')
        } else {
            this.props.navigation.navigate('AddressListScreen')
        }
    }

    render() {

        if (this.props.cartItems.cart.length == 0) {
            return <View></View>
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
                            data={this.props.cartItems.cart}
                            renderItem={({ item }) => (
                                <View style={{ borderBottomColor: Colors.lightgrey, borderBottomWidth: 1 }}>

                                    <View style={{ padding: 20, flex: 1, flexDirection: 'row', }}>
                                        <View style={{
                                            flex: .3, width: 85, height: 85, marginRight: 5,
                                        }}>
                                            <Image source={{ uri: item.image ? imageUrl + item.image[0].path : null }} style={{
                                                width: 85, height: 85, borderWidth: 3,
                                                borderColor: Colors.lightGrey
                                            }} />
                                        </View>
                                        <View style={{ flex: .75, position: 'relative' }}>
                                            <Text style={{ paddingLeft: 7, fontSize: Fonts.size.medium_15 }}>{item.title}</Text>
                                            <Text style={{ padding: 10, fontSize: Fonts.size.medium_15, color: Colors.primary, fontWeight: '600' }}>{Constants.rupee}{item.sale_price}</Text>
                                            <Ripple onPress={(e) => this.deleteToCart(e, item)}><Icon name='trash-o' size={25} color={Colors.lightgrey} /></Ripple>
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
    console.log('cartitem user---------->>>>>> ', JSON.stringify(state.user));
    return {
        cartItems, cart, user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addCartItem: item => dispatch(addToCart(item)),
        removeCartItem: item => dispatch(removeCartItem(item)),
        deleteCartItem: item => dispatch(deleteCartItem(item)),
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartScreen);

