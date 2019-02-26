import React, { Component } from "react";
import { Text, View, Image, ScrollView, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors, Images } from "../Themes";
import Fonts from '../Themes/Fonts';
import Ripple from "react-native-material-ripple";
import { connect } from "react-redux";
import { addToCart } from '../Redux/CartRedux';
import Styles from './Styles';
const imageUrl = 'http://vemulate.com/image/'


class CartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
    }

    static navigationOptions = {

    }

    //increase product quantity
    add() {
        console.log('adddd', this.state.count);
        this.setState({ count: this.state.count + 1 });

    }

    //decrease product quantity
    remove() {
        console.log('remove cartItems!!-', this.state.count);
        this.state.count >= 1
            ? this.setState({ count: this.state.count - 1 })
            : this.setState({ count: this.state.count });

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
                        <Text style={{ fontSize: Fonts.size.regular_17, color: Colors.primary, fontWeight: '500' }}>${this.props.cartItems.grandTotal}</Text>
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
                                    <Ripple><Icon name='trash-o' size={25} color={Colors.lightgrey} style={{ position: 'absolute', bottom: 3, right: 30 }} /></Ripple>
                                </View>
                                <View style={{ flex: .1 }}>
                                    <View style={{ backgroundColor: Colors.lightGrey, alignItems: 'center', width: 25, height: 85, borderColor: Colors.lightgrey, borderWidth: 1, borderRadius: 25 }}>
                                        <Ripple onPress={() => this.add()}><Icon name='caret-up' size={25} color={Colors.lightgrey} /></Ripple>
                                        <View style={{ paddingTop: 6, paddingBottom: 6 }}><Text>{this.state.count ? this.state.count : 1}</Text></View>
                                        <Ripple onPress={() => this.remove()}><Icon name='caret-down' size={25} color={Colors.lightgrey} /></Ripple>
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
    console.log('cartitem---------->>>>>> ', JSON.stringify(state.cartItems));
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
)(CartScreen);

