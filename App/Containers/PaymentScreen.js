import React, { Component } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Colors } from "../Themes";
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import Styles from './Styles';
import Api from "../Services";
import Ripple from "react-native-material-ripple";
import { clearCartItem } from '../Redux/CartRedux';
import { connect } from 'react-redux';

const api = Api.Api();

const paymentTypes = [
    // { selected: false, type: 'Stripe', value: 'stripe' },
    { selected: false, type: 'CASH ON DELIVERY', value: 'cod' },
];
class PaymentScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSelect: false,
            orderDetails: props.navigation.state.params.orderDetails
        }
    }

    selectPaymentMethod(index, value, paymentType) {
        this.setState({
            isSelect: true
        })
    }

    placeOrder() {
        // console.log('this.state.orderDetails -', JSON.stringify(this.state.orderDetails));
        if (this.state.isSelect === false) {
            Alert.alert('Please,', 'Select Payment Type !', [{ text: 'OK', onPress: () => console.log('ok') }], {
                canceLabel: false,
            });
        } else {
            api.orderPlacePayment(this.state.orderDetails).then(response => {
                console.log("orderPlace Response --", response);
                this.props.clearCartItem()
                this.props.navigation.push('OrderScreen');

            })
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', backgroundColor: Colors.white, }}>
                    <RadioGroup
                        size={24}
                        thickness={2}
                        color={Colors.primary}
                        highlightColor={Colors.lightgrey}
                        onSelect={(index, value) => this.selectPaymentMethod(index, value, paymentTypes[index])}
                    >
                        {paymentTypes.map(paymentType => {
                            return (
                                <RadioButton value={paymentType.type} key={paymentType.type}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ width: '100%' }}>{paymentType.type}</Text>
                                        <Text></Text>
                                    </View>
                                </RadioButton>
                            );
                        })}
                    </RadioGroup>
                </View>
                <View style={Styles.checkoutContainer}>
                    <Ripple
                        style={Styles.buyButton}
                        onPress={() => {
                            this.placeOrder()
                        }}
                    >
                        <Text style={Styles.btnText}>Place Order</Text>
                    </Ripple>
                </View>

            </View>
        );
    }
}

const mapStateToProps = state => {
    const { user } = state;
    return {
        user
    };

};

const mapDispatchToProps = dispatch => {
    return {
        clearCartItem: () => dispatch(clearCartItem())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});
