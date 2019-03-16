import React from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import { Images, Colors, Fonts } from '../Themes';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './Styles';
import Ripple from "react-native-material-ripple";
import { getAddress } from '../Redux/UserAddressRedux';
import { connect } from "react-redux";
import ActivityIndicator from "../Components/ActivityIndicator";
import Api from '../Services';

// const bannerData = [
//     { key: 1, title: 'Hari', zip: 890076, state: 'karnataka', city: 'bangalore', mobile: 8976453210 },
//     { key: 2, title: 'Hari', zip: 890076, state: 'karnataka', city: 'bangalore', mobile: 8976453210 },
//     { key: 3, title: 'Hari', zip: 890076, state: 'karnataka', city: 'bangalore', mobile: 8976453210 },
//     { key: 4, title: 'Hari', zip: 890076, state: 'karnataka', city: 'bangalore', mobile: 8976453210 }
// ]
const api = Api.Api();

class AddressListScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelect: false,
            selectedAddress: null
        }
    }

    componentDidMount() {
        const { user, cartItems } = this.props;
        if (user.user) {
            this.props.getAddress(user.user.user_data.id);
        }
    }

    deleteAddressData(e, id) {
        Alert.alert('ohhhh!', 'Do you want to delete address!', [
            { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            {
                text: 'OK', onPress: () => this.deleteUserAddressData(id)
            },
        ], {
                canceLabel: false,
            });
    }

    deleteUserAddressData(id) {
        api.deleteAddress(id).then(response => {
            console.log('delete addd', JSON.stringify(response));
            this.props.getAddress(this.props.user.user.user_data.id);
        });
    }

    selectAddress(index, value, selectAddress) {
        const { user, cartItems } = this.props;
        this.setState({
            isSelect: true,
            selectedAddress: selectAddress
        })
        console.log('selectAddress', selectAddress);
        // var data = { customer_id: user.user.user_data.id, data: cartItems.cart, shipping_id: selectAddress.id, address_id: selectAddress.id, promo_balance: null, payment_type_id: null }
    }


    moveToPay() {

        if (this.state.isSelect === false) {
            Alert.alert('Please!', 'Select Address !', [{ text: 'OK', onPress: () => console.log('ok') }], {
                canceLabel: false,
            });
        } else {
            const { selectedAddress } = this.state;
            const { user, cartItems } = this.props;
            // var orderDetails = {
            //     customer_id: user.user && user.user.user_data ? user.user.user_data.id : null,
            //     data: cartItems.cart,
            //     shipping_id: selectedAddress.id,
            //     address_id: selectedAddress.id,
            //     promo_balance: 50,
            //     payment_type_id: 6
            // }
            var orderDetails = {
                key: 'A123456789',
                customer_id: 7,
                data: [{ "product_id": "40", "quantity": "2" }, { "product_id": "39", "quantity": "2" }],//cartItems.cart,
                //shipping_id: selectedAddress.id,
                address_id: 52,
                promo_id: 18,
                // payment_type_id: 6
            }
            // console.log('Order Details-', JSON.stringify(orderDetails))
            this.props.navigation.navigate('PaymentScreen', { orderDetails: orderDetails });
        }
    }


    render() {
        const { data, isFetching } = this.props.address.address
        // console.log("  product -- ", JSON.stringify(data));

        if (isFetching) {
            return (
                <View>
                    <ActivityIndicator isFetching={isFetching} />
                </View>
            )
        }


        return (
            <ScrollView style={{ backgroundColor: Colors.lightGrey }}>
                <View>
                    <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: Fonts.size.h6, fontWeight: '500' }}>Address List</Text>
                        <TouchableOpacity style={{ backgroundColor: Colors.primary, borderRadius: 5 }}
                            onPress={() => this.props.navigation.navigate('AddAddressScreen')}>
                            <Text style={{ padding: 8, fontSize: Fonts.size.medium_15, color: Colors.white }}>Add New Address</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginBottom: 20, backgroundColor: Colors.white }}>
                        <RadioGroup
                            size={24}
                            thickness={2}
                            color={Colors.primary}
                            highlightColor={Colors.lightgrey}
                            onSelect={(index, value) =>
                                this.selectAddress(index, value, data[index])
                            }
                        >
                            {data ? data.map((item, index) => {
                                return (
                                    <RadioButton value={item.name} key={item.id}>
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            marginLeft: 10,
                                            marginBottom: 10,
                                            borderBottomWidth: 0.5,
                                            borderColor: "#d6d7da",
                                            paddingBottom: 10
                                        }}>
                                            <View style={{ width: '80%' }}>
                                                <Text style={{ fontWeight: 'bold' }}>{item.name},</Text>
                                                <Text>{item.address}</Text>
                                                <Text>{item.city},{item.state},{item.country},</Text>
                                                <Text>{item.mobile},{item.pincode}</Text>

                                            </View>
                                            <View style={{
                                                width: '20%',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                                <TouchableOpacity onPress={(e) => this.deleteAddressData(e, item.id)}>
                                                    <Icon name='trash-o' size={25} color={Colors.primary} />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </RadioButton>
                                );
                            }) : null}
                        </RadioGroup>
                    </View>
                </View>
                <View>
                    {
                        data ?
                            <Ripple
                                style={Styles.buyButton}
                                onPress={() => this.moveToPay()}
                            >
                                <Text style={Styles.btnText}>Select Address</Text>
                            </Ripple>
                            : null
                    }

                </View>
            </ScrollView>
        );

    }
}


const mapStateToProps = state => {
    const { address, user, cartItems } = state;
    //console.log('user', JSON.stringify(state.user.user.user_data));
    //console.log("State in address Screen- ", JSON.stringify(address));
    return {
        address, user, cartItems
    };

};

const mapDispatchToProps = dispatch => {
    return {
        getAddress: (value) => dispatch(getAddress(value))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddressListScreen);
