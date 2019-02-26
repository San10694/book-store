import React, { Component } from "react";
import { Text, View, Image, ScrollView, FlatList, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors, Images } from "../Themes";
import Fonts from '../Themes/Fonts';
import Ripple from "react-native-material-ripple";
import { connect } from "react-redux";
import { addToCart, deleteCartItem, removeCartItem } from '../Redux/CartRedux';
import Styles from './Styles';
const imageUrl = 'http://vemulate.com/image/'


class CartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            subTotal: this.props.cartItems.subTotal,
            grandTotal: this.props.cartItems.grandTotal,
        }
        this.updateData(this.props.cart);
    }

    static navigationOptions = {

    }

    //increase product quantity
    add(e, item) {
        this.setState({ count: this.state.count + 1 });
        //  console.log("add-----");

        this.props.addCartItem(item);
        this.setState({
            subTotal: this.props.cartItems.subTotal,
            grandTotal: this.props.cartItems.grandTotal,
            payMoney: this.props.cartItems.grandTotal,
        });
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
            this.props.cartItems.subTotal = this.state.subTotal;
            this.props.cartItems.grandTotal = this.state.grandTotal;
        } else {
            var subTotal = 0.0;
            var grandTotal = 0.0;
            var tax = 0.0;
            // console.log('state.cart.length', this.props.cart.length);
            this.props.cart.map(item => {
                subTotal = subTotal + item.totalPrice;
                this.props.cartItems.subTotal = subTotal;
                this.props.cartItems.grandTotal = grandTotal;
                this.props.cartItems.payMoney = grandTotal;
                // console.log('state.grandTotal', grandTotal);
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
    async deleteToCart(e, item) {
        console.log("delete cartItems!!");
        await this.props.deleteCartItem(item);
        this.updateData(this.props.cart);
    }

    render() {

        if (this.props.cartItems == null) {
            return <View></View>
        }
        console.log('data   ======', this.props.cartItems);
        return (
            <ScrollView style={Styles.cartContainer}>
                <View style={{ borderBottomColor: Colors.lightgrey, borderBottomWidth: 1 }}>
                    <View style={{ padding: 15, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={{ fontSize: Fonts.size.regular_17, fontWeight: '500' }}>Total Price :</Text>
                        <Text style={{ fontSize: Fonts.size.regular_17, color: Colors.primary, fontWeight: '500' }}>${this.state.grandTotal}</Text>
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
                                    <Image source={{ uri: item.image ? imageUrl + item.image.path : null }} style={{
                                        width: 85, height: 85, borderWidth: 3,
                                        borderColor: Colors.lightGrey
                                    }} />
                                </View>
                                <View style={{ flex: .75, position: 'relative' }}>
                                    <Text style={{ paddingLeft: 7, fontSize: Fonts.size.medium_15 }}>{item.title}</Text>
                                    <Text style={{ padding: 10, fontSize: Fonts.size.medium_15, color: Colors.primary, fontWeight: '600' }}>${item.sale_price}</Text>
                                    <Ripple onPress={(e) => this.deleteToCart(e, item)}><Icon name='trash-o' size={25} color={Colors.lightgrey} /></Ripple>
                                </View>
                                <View style={{ flex: .1 }}>
                                    <View style={{ backgroundColor: Colors.lightGrey, alignItems: 'center', width: 25, height: 85, borderColor: Colors.lightgrey, borderWidth: 1, borderRadius: 25 }}>
                                        <Ripple onPress={(e) => this.add(e, item)}><Icon name='caret-up' size={25} color={Colors.lightgrey} /></Ripple>
                                        <View style={{ paddingTop: 6, paddingBottom: 6 }}><Text>{item.quantity}</Text></View>
                                        <Ripple onPress={(e) => this.remove(e, item)}><Icon name='caret-down' size={25} color={Colors.lightgrey} /></Ripple>
                                    </View>
                                </View>
                            </View>

                        </View>
                    )}
                    keyExtractor={(item, index) => item.id}
                />
            </ScrollView>
        );
    }
}

const mapStateToProps = state => {
    const { cartItems } = state;
    const { cart } = state.cartItems;
    console.log('cartitem---------->>>>>> ', JSON.stringify(state.cartItems));
    return {
        cartItems, cart
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

