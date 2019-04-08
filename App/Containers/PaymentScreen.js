import React, { Component } from "react";
import { StyleSheet, Text, View, Alert, ScrollView, Linking, Platform, TextInput, KeyboardAvoidingView, WebView, Dimensions } from "react-native";
import { Colors, Constants, Fonts } from "../Themes";
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import Styles from './Styles';
import Api from "../Services";
import Ripple from "react-native-material-ripple";
import { clearCartItem } from '../Redux/CartRedux';
import { connect } from 'react-redux';
import RazorpayCheckout from 'react-native-razorpay';
import Snackbar from 'react-native-snackbar';
import { SafeAreaView } from 'react-navigation';


const api = Api.Api();

const paymentTypes = [
    { selected: false, type: 'Credit/Debit Card, UPI', value: 'rajor_pay' },
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
            paymentType: null,
            couponCode: null,
            promo_id: '',
            discount_amount: null,
            shippingCharges: 49,
            updatedAmount: 0,
            grandTotal: props.navigation.state.params.amount + 49,
            appliedCouponCode: null
        }
    }

    selectPaymentMethod(index, value, paymentType) {
        // console.log('paymentType ', paymentType)
        this.setState({
            isSelect: true,
            paymentType: paymentType.value
        })
    }

    placeOrder() {
        const { orderDetails, grandTotal, amount, updatedAmount } = this.state;
        // console.log('this.state.orderDetails -', orderDetails);
        // console.log('this.state.amount -', amount);
        const { user } = this.props.user;
        const { user_data } = user;
        if (this.state.isSelect === false) {
            Alert.alert('', 'Please Select Payment Type', [{ text: 'OK', onPress: () => console.log('ok') }], {
                canceLabel: false,
            });
        } else if (this.state.paymentType === 'rajor_pay') {
            var options = {
                description: 'Credits towards consultation',
                image: 'https://i.imgur.com/3g7nmJC.png',
                currency: 'INR',
                key: 'rzp_test_pGs9haNVuQh2Cz',
                amount: grandTotal * 100,
                name: 'foo',
                prefill: {
                    email: user_data.email,//'san10694@gmail.com',
                    contact: user_data.phone,//'9140631442',
                    name: 'Razorpay Software'
                },
                theme: { color: Colors.primary }
            }
            RazorpayCheckout.open(options).then((data) => {
                // console.log("Rajor pay sucess ", data)
                this.showToast("payment successfull.");
                let orderObj = {
                    customer_id: orderDetails.customer_id,
                    data: orderDetails.data,
                    shipping_id: orderDetails.shipping_id,
                    promo_id: this.state.promo_id,
                }
                orderObj.payment_key = data.razorpay_payment_id;
                api.orderPlacePayment(orderObj).then(response => {
                    // console.log("orderPlacePayment Response --", response);
                    // this.setState({ ref_id: response.data.ref_id })
                    this.showToast(response.data ? response.data.message : null);
                    this.props.clearCartItem()
                    this.props.navigation.replace('OrderScreen');
                })

            }).catch((error) => {
                // console.log("Rajor pay Error ", error)
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
                customer_id: orderDetails.customer_id,
                data: orderDetails.data,
                shipping_id: orderDetails.shipping_id,
                promo_id: this.state.promo_id,

            }
            api.orderPlace(orderObj).then(response => {
                // console.log("COD Response --", response);
                this.showToast(response.data ? response.data.message : null);
                // this.setState({ ref_id: response.data.ref_id })
                this.props.clearCartItem()
                this.props.navigation.replace('OrderScreen');

            })

        }
    }

    showToast(message) {
        Snackbar.show({
            title: message,
            duration: Snackbar.LENGTH_LONG,
        });
    }


    applyPromo() {
        const { orderDetails, amount, couponCode, appliedCouponCode } = this.state;
        if (couponCode) {
            if (couponCode.toUpperCase() === appliedCouponCode && appliedCouponCode.toUpperCase()) {
                this.showToast("This Coupon is already applied.");
                return
            }
            this.setState({ discount_amount: null })
            let data = {
                customer_id: orderDetails.customer_id,
                total_amount: amount,
                shipping_id: orderDetails.shipping_id,
                couponCode: couponCode,
            }
            api.getCoupons(data).then(response => {
                // console.log("getCoupons response --", response);
                this.setState({ couponCode: null });
                const { data } = response ? response : null;
                if (data && data.error === '000000' && data.data.discount_amount) {
                    this.showToast(data.Message || data.message + ' - ' + Constants.rupee + data.data.discount_amount);
                    let updatedAmount = amount - data.data.discount_amount;
                    this.setState({
                        updatedAmount: updatedAmount,
                        grandTotal: updatedAmount + 49,
                        promo_id: data.data.promo_id,
                        discount_amount: data.data.discount_amount,
                        appliedCouponCode: data.data.code
                    });
                }
                else {
                    this.setState({
                        updatedAmount: amount,
                        grandTotal: amount + 49,
                        promo_id: '',
                        discount_amount: null,
                        appliedCouponCode: null
                    });
                    this.showToast(data.Message || data.message);
                }
            })
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
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.lightGrey }}>
                <View style={styles.container}>
                    <ScrollView >
                        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "position" : "padding"} enabled>
                            <View style={{ paddingHorizontal: 10, paddingVertical: 5, justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text style={{ fontSize: Fonts.size.medium_15, fontWeight: '500' }}>Total Price :</Text>
                                <Text style={{ fontSize: Fonts.size.medium_15, color: Colors.primary, fontWeight: '500' }}>{Constants.rupee}{this.state.amount}</Text>
                            </View>
                            <View style={{ paddingHorizontal: 10, paddingVertical: 5, justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text style={{ fontSize: Fonts.size.medium_15, fontWeight: '500' }}>Shipping :</Text>
                                <Text style={{ fontSize: Fonts.size.medium_15, color: Colors.primary, fontWeight: '500' }}>{Constants.rupee}{this.state.shippingCharges}</Text>
                            </View>
                            {
                                this.state.discount_amount ?
                                    <View>
                                        <View style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
                                            <Text style={{ fontSize: Fonts.size.medium_15, color: Colors.primary, fontWeight: '400' }}>Coupon Applied Successfully</Text>
                                            {/* <Text style={{ fontSize: Fonts.size.medium_15, color: Colors.primary, fontWeight: '500' }}> - {Constants.rupee} {this.state.discount_amount}</Text> */}
                                        </View>
                                        <View style={{ paddingHorizontal: 10, paddingVertical: 5, justifyContent: 'space-between', flexDirection: 'row' }}>
                                            <Text style={{ fontSize: Fonts.size.medium_15, fontWeight: '500' }}>Discount Price :</Text>
                                            <Text style={{ fontSize: Fonts.size.medium_15, color: Colors.primary, fontWeight: '500' }}> - {Constants.rupee}{this.state.discount_amount}</Text>
                                        </View>
                                        {/* <View style={{ paddingHorizontal: 10, paddingVertical: 5, justifyContent: 'space-between', flexDirection: 'row' }}>
                                            <Text style={{ fontSize: Fonts.size.medium_15, fontWeight: '500' }}>Updated Price :</Text>
                                            <Text style={{ fontSize: Fonts.size.medium_15, color: Colors.primary, fontWeight: '500' }}>{Constants.rupee}{this.state.updatedAmount}</Text>
                                        </View> */}
                                    </View> : null
                            }
                            <View style={{ paddingHorizontal: 10, paddingVertical: 5, justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text style={{ fontSize: Fonts.size.medium_15, fontWeight: '500' }}>Grand Total :</Text>
                                <Text style={{ fontSize: Fonts.size.medium_15, color: Colors.primary, fontWeight: '500' }}>{Constants.rupee}{this.state.grandTotal}</Text>
                            </View>
                            <View style={{
                                // backgroundColor: Colors.white,
                                paddingVertical: 20,
                                margin: 10,
                                borderWidth: 0.5,
                                borderRadius: 5,
                                borderColor: Colors.charcoal
                            }}>
                                <RadioGroup
                                    size={20}
                                    thickness={2}
                                    color={Colors.primary}
                                    highlightColor={Colors.lightgrey}
                                    onSelect={(index, value) => this.selectPaymentMethod(index, value, paymentTypes[index])}
                                >
                                    {paymentTypes.map(paymentType => {
                                        return (
                                            <RadioButton style={{ marginHorizontal: 5, }} value={paymentType.type} key={paymentType.type}>
                                                <View style={{
                                                    marginLeft: 10,
                                                    paddingBottom: 20,
                                                    // paddingVertical: 10
                                                }}>
                                                    <Text style={{ width: '100%' }}>{paymentType.type}</Text>
                                                </View>
                                            </RadioButton>
                                        );
                                    })}
                                </RadioGroup>
                            </View>
                            <View style={{ flexDirection: 'row', backgroundColor: Colors.white, paddingBottom: 20 }}>
                                <View style={styles.inputWrap}>
                                    <TextInput
                                        placeholder={"Enter Prome Code Here"}
                                        onChangeText={(code) => this.setState({ couponCode: code })}
                                        value={this.state.couponCode}
                                        style={{
                                            paddingLeft: 10,
                                            height: 50,
                                            borderRadius: 5,
                                            width: Dimensions.get('screen').width * 0.5
                                        }}
                                    />
                                </View>
                                <Ripple
                                    style={[Styles.buyButton, {
                                        width: Dimensions.get('screen').width * 0.3
                                    }]}
                                    onPress={() => {
                                        this.applyPromo()
                                    }}
                                >
                                    <Text style={Styles.btnText}>Apply</Text>
                                </Ripple>
                            </View>
                            <Text style={{ fontSize: Fonts.size.medium_15, fontWeight: '500', marginLeft: 10 }}>Available Offers : </Text>

                            {
                                this.getCoupons(this.props.product.banner.offers)
                            }
                        </KeyboardAvoidingView>
                    </ScrollView>
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
            </SafeAreaView>
        );
    }

    getCoupons(Coupons) {
        return Coupons.map((item, index) => {
            return (
                <View key={index} style={{
                    paddingLeft: 20,
                    width: 300,
                    marginVertical: 5,
                    marginLeft: 10,
                    paddingVertical: 5,
                    borderWidth: 0.5,
                    borderRadius: 5,
                    borderColor: Colors.primary
                }}>
                    <Text style={{ fontSize: Fonts.size.medium_15 }}>{item.name} </Text>
                    <Text style={{ fontSize: Fonts.size.medium_15, color: Colors.primary, fontWeight: '500' }}>CODE : {item.code}</Text>
                    <Text style={{ fontSize: Fonts.size.medium_15, }}> {item.description}</Text>
                </View>
            )
        })
    }
}



const mapStateToProps = state => {
    const { user, product } = state;
    return {
        user,
        product
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
        backgroundColor: Colors.white,
        paddingBottom: Platform.OS == "ios" ? 100 : 60

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
    },
    inputWrap: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: Colors.blackDivide,
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5
        // paddingHorizontal: 10
    }
});