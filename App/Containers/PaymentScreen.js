import React, { Component } from "react";
import { StyleSheet, Text, View, Alert, WebView, Linking } from "react-native";
import { Colors } from "../Themes";
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import Styles from './Styles';
import Api from "../Services";
import Ripple from "react-native-material-ripple";
import { clearCartItem } from '../Redux/CartRedux';
import { connect } from 'react-redux';

const api = Api.Api();

const patchPostMessageFunction = function () {
    var originalPostMessage = window.postMessage;
    var patchedPostMessage = function (message, targetOrigin, transfer) {
        originalPostMessage(message, targetOrigin, transfer);
    };
    patchedPostMessage.toString = function () {
        return String(Object.hasOwnProperty).replace('hasOwnProperty', 'postMessage');
    };
    window.postMessage = patchedPostMessage;
};

const patchPostMessageJsCode = '(' + String(patchPostMessageFunction) + ')();';

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
        console.log('this.state.orderDetails -', this.state.orderDetails);
        if (this.state.isSelect === false) {
            Alert.alert('Please,', 'Select Payment Type !', [{ text: 'OK', onPress: () => console.log('ok') }], {
                canceLabel: false,
            });
        } else if (this.state.paymentType === 'rajor_pay') {
            api.orderPlacePayment(this.state.orderDetails).then(response => {
                console.log("RAJOR PAY Response --", response);
                this.setState({ ref_id: response.data.ref_id })
                // this.props.clearCartItem()
                // this.props.navigation.push('OrderScreen');

            })
        } else {
            api.orderPlace(this.state.orderDetails).then(response => {
                console.log("COD Response --", response);
                this.setState({ ref_id: response.data.ref_id })
                // this.props.clearCartItem()
                // this.props.navigation.push('OrderScreen');

            })

        }
    }

    objToString(obj) {
        var str = '';
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                str += p + '::' + obj[p] + '\n';
            }
        }
        return str;
    }

    // componentDidMount() {
    //     const { orderDetails } = this.state
    //     console.log('this.state.orderDetails -', orderDetails);
    //     let formData = new FormData();
    //     formData.append('key', 'A123456789');
    //     formData.append('customer_id', 7);
    //     formData.append('data', JSON.stringify(orderDetails.data));
    //     formData.append('address_id', 52);
    //     formData.append('promo_id', 18);
    //     this.setState({
    //         source: {
    //             uri: 'http://68.183.94.56/api/payment',
    //             headers: {
    //                 "content-type": "application/x-www-form-urlencoded"
    //             },
    //             body: JSON.stringify(formData),//this.state.orderDetails.toString('utf8'),
    //             method: 'POST'
    //         }
    //     })

    // }

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
        const uri = 'http://68.183.94.56/api/payment/' + this.state.ref_id;
        console.log("this.state.URI ", uri)
        let jsCode = `!function(){var e=function(e,n,t){if(n=n.replace(/^on/g,""),"addEventListener"in window)e.addEventListener(n,t,!1);else if("attachEvent"in window)e.attachEvent("on"+n,t);else{var o=e["on"+n];e["on"+n]=o?function(e){o(e),t(e)}:t}return e},n=document.querySelectorAll("a[href]");if(n)for(var t in n)n.hasOwnProperty(t)&&e(n[t],"onclick",function(e){new RegExp("^https?://"+location.host,"gi").test(this.href)||(e.preventDefault(),console.log(this.href),window.postMessage(JSON.stringify({external_url_open:this.href})))})}();`
        if (this.state.ref_id) {
            return <WebView
                // userAgent="Mobile"
                // key={"WebView"}
                ref="paymentWebview"
                // mixedContentMode={"always"}
                // allowUniversalAccessFromFileURLs={true}
                // domStorageEnabled={true}
                // startInLoadingState={true}
                source={{ uri: uri }}
                onLoadEnd={(data) => this.onLoadEnd(data)}
                onNavigationStateChange={(webViewState) => this._onNavigationStateChange(webViewState)}
                onError={console.error.bind(console, 'error')}
                javaScriptEnabled={true}
                onMessage={this.onMessage.bind(this)}
                injectedJavaScript={patchPostMessageJsCode}
            // style={{ marginTop: 20 }}
            />
        }

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