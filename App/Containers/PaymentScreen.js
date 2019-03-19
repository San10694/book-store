import React, { Component } from "react";
import { StyleSheet, Text, View, Alert, Linking, WebView } from "react-native";
import { Colors } from "../Themes";
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import Styles from './Styles';
import Api from "../Services";
import Ripple from "react-native-material-ripple";
import { clearCartItem } from '../Redux/CartRedux';
import { connect } from 'react-redux';
import RazorpayCheckout from 'react-native-razorpay';
import Snackbar from 'react-native-snackbar';


const api = Api.Api();

const paymentTypes = [
    { selected: false, type: 'Rajor Pay ', value: 'rajor_pay' },
    { selected: false, type: 'Cash on Delivery', value: 'cod' },
];
class PaymentScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSelect: false,
            orderDetails: props.navigation.state.params.orderDetails,
            amount: props.navigation.state.params.amount,
            source: null,
            ref_id: null,
            paymentType: null
        }
    }

    selectPaymentMethod(index, value, paymentType) {
        console.log('paymentType ', paymentType)
        this.setState({
            isSelect: true,
            paymentType: paymentType.value
        })
    }

    placeOrder() {
        const { orderDetails, amount } = this.state;
        console.log('this.state.orderDetails -', orderDetails);
        console.log('this.state.amount -', amount);
        const { user } = this.props.user;
        const { user_data } = user;
        if (this.state.isSelect === false) {
            Alert.alert('Please,', 'Select Payment Type !', [{ text: 'OK', onPress: () => console.log('ok') }], {
                canceLabel: false,
            });
        } else if (this.state.paymentType === 'rajor_pay') {
            var options = {
                description: 'Credits towards consultation',
                image: 'https://i.imgur.com/3g7nmJC.png',
                currency: 'INR',
                key: 'rzp_test_pGs9haNVuQh2Cz',
                amount: amount ? amount * 100 : '5000',
                name: 'foo',
                prefill: {
                    email: user_data.email,//'san10694@gmail.com',
                    contact: user_data.phone,//'9140631442',
                    name: 'Razorpay Software'
                },
                theme: { color: '#F37254' }
            }
            RazorpayCheckout.open(options).then((data) => {
                console.log("Rajor pay sucess ", data)
                this.showToast("payment successfull.");
                //alert(`Success: ${data.razorpay_payment_id}`);
                //let orderObj = this.state.orderDetails;
                let orderObj = {
                    customer_id: orderDetails.customer_id,
                    data: orderDetails.data,
                    shipping_id: orderDetails.shipping_id,
                    promo_id: 18,
                }
                orderObj.payment_key = data.razorpay_payment_id;
                api.orderPlacePayment(orderObj).then(response => {
                    console.log("orderPlacePayment Response --", response);
                    // this.setState({ ref_id: response.data.ref_id })
                    this.showToast(response.data ? response.data.message : null);
                    this.props.clearCartItem()
                    this.props.navigation.push('OrderScreen');
                })

            }).catch((error) => {
                console.log("Rajor pay Error ", error)
                // handle failure
                alert(`Error: ${error.code} | ${error.description}`);
            });

        } else {
            // let orderObj = {
            //     customer_id: orderDetails.customer_id,
            //     data: orderDetails.data,
            //     shipping_id: orderDetails.shipping_id,
            //     shipping_id: 21,
            //     // promo_id: 18,
            //     payment_type_id: 6,
            //     promo_balance: 50
            // }
            let orderObj = {
                customer_id: 7,//orderDetails.customer_id,
                data: orderDetails.data,
                shipping_id: 53,//orderDetails.shipping_id,
                promo_id: 18,
            }
            api.orderPlace(orderObj).then(response => {
                console.log("COD Response --", response);
                this.showToast(response.data ? response.data.message : null);
                // this.setState({ ref_id: response.data.ref_id })
                this.props.clearCartItem()
                this.props.navigation.push('OrderScreen');

            })

        }
    }

    showToast(message) {
        Snackbar.show({
            title: message,
            duration: Snackbar.LENGTH_LONG,
        });
    }


    _onNavigationStateChange(webViewState) {
        console.log("webViewState ", webViewState)

    }

    onLoadEnd(event) {
        console.log("onLoadEnd ", event)
        event.persist()

    }


    onMessage(e) {
        console.log(" onMessage Event ", e)
        // retrieve event data
        var data = e.nativeEvent.data;
        // maybe parse stringified JSON
        try {
            data = JSON.parse(data)
        } catch (e) {
            console.error("onMessage Error - ", e);
        }
        // check if this message concerns us
        if ('object' == typeof data && data.external_url_open) {
            // proceed with URL open request
            return Alert.alert(
                'External URL',
                'Do you want to open this URL in your browser?',
                [
                    { text: 'Cancel', style: 'cancel' },
                    { text: 'OK', onPress: () => Linking.openURL(data.external_url_open) },
                ],
                { cancelable: false }
            );
        }
    }



    render() {
        // const uri = 'http://68.183.94.56/api/payment/' + this.state.ref_id;
        // console.log("this.state.URI ", uri)
        // if (this.state.ref_id) {
        //     return <WebView
        //         // userAgent="Mobile"
        //         // key={"WebView"}
        //         ref="paymentWebview"
        //         // mixedContentMode={"always"}
        //         // allowUniversalAccessFromFileURLs={true}
        //         // domStorageEnabled={true}
        //         startInLoadingState={true}
        //         source={{ uri: 'https://www.google.com' }}
        //         onLoadEnd={(data) => this.onLoadEnd(data)}
        //         onNavigationStateChange={(webViewState) => this._onNavigationStateChange(webViewState)}
        //         onError={console.error.bind(console, 'error')}
        //         javaScriptEnabled={true}
        //         onMessage={this.onMessage.bind(this)}
        //         injectedJavaScript={jsCode}
        //     // style={{ marginTop: 20 }}
        //     />
        // }

        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: Colors.white, marginTop: 20 }}>
                    <RadioGroup
                        size={20}
                        thickness={2}
                        color={Colors.primary}
                        highlightColor={Colors.lightgrey}
                        onSelect={(index, value) => this.selectPaymentMethod(index, value, paymentTypes[index])}
                    >
                        {paymentTypes.map(paymentType => {
                            return (
                                <RadioButton value={paymentType.type} key={paymentType.type}>
                                    <View style={{
                                        marginLeft: 10,
                                        paddingBottom: 20
                                    }}>
                                        <Text style={{ width: '100%' }}>{paymentType.type}</Text>
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