import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../Themes";
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import Styles from './Styles';
import Ripple from "react-native-material-ripple";


const paymentTypes = [
    // { selected: false, type: 'Stripe', value: 'stripe' },
    { selected: false, type: 'COD', value: 'cod' },
];
export default class PaymentScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSelect: false,
        }
    }

    selectPaymentMethod(index, value, paymentType) {
        this.setState({
            isSelect: true
        })
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
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}><Text style={{ width: '100%' }}>{paymentType.type}</Text>
                                        <Text></Text></View>
                                </RadioButton>
                            );
                        })}
                    </RadioGroup>
                </View>
                <View style={Styles.checkoutContainer}>
                    <Ripple
                        style={Styles.buyButton}
                        onPress={() => this.props.navigation.navigate('HomeTab')}
                    >
                        <Text style={Styles.btnText}>Proceed To Pay</Text>
                    </Ripple>
                </View>

            </View>
        );
    }
}

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
