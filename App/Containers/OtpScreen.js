import React, { Component } from "react";
import { TouchableOpacity, ScrollView, StyleSheet, TextInput, Text, View, Alert, AsyncStorage, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from "../Themes";
import ActivityIndicator from '../Components/ActivityIndicator';
import { NavigationActions } from "react-navigation";
import { otpVerifyReg } from '../Redux/UserRedux';
import { connect } from "react-redux";



class OtpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            otp: '',
            mobile: this.props.navigation.state.params.number,
            name: this.props.navigation.state.params.name,
            email: this.props.navigation.state.params.email,
            fcm: '',
            numberValid: true,
            valid: false
        }

    }

    static navigationOptions = {

    }

    async componentDidMount() {
        let fcmToken = await AsyncStorage.getItem('fcmToken');
        this.setState({ fcm: fcmToken })
    }

    onOTPEditHandle = (otp) => {
        this.setState({ otp: otp })
    }

    onSubmit(e, otp) {
        // let fcmToken = await AsyncStorage.getItem('fcmToken');
        // this.setState({ fcm: fcmToken })
        const { navigation } = this.props;
        var data = { mobile: this.state.mobile, otp: otp, fcm: this.state.fcm, name: this.state.name, email: this.state.email, navigate: navigation.navigate }
        this.props.otpVerifyReg(data, navigation);
    }

    validate(text) {
        if (text.length === 4) {
            this.setState({
                numberValid: true,
                valid: true,
                otp: text
            })
        }
        else {
            this.setState({
                numberValid: false,
                valid: false,
                otp: text
            })
        }
    }

    render() {
        const { isLoading } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: Colors.white }}>
                <View style={styles.container}>
                    <ScrollView
                        style={{ backgroundColor: Colors.white }}
                        contentContainerStyle={styles.container}>

                        <View style={styles.subContain}>
                            <View style={styles.loginForm}>
                                <View style={styles.inputWrap}>
                                    <TextInput
                                        placeholder={"Enter  OTP"}
                                        keyboardType="numeric"
                                        onChangeText={(otp) => this.validate(otp)}
                                        value={this.state.otp}
                                        style={[{
                                            height: 50,
                                            borderRadius: 5,
                                            width: Dimensions.get('screen').width * .88
                                        }, !this.state.numberValid ? { borderColor: Colors.red, borderWidth: 1 } : null]}
                                    />
                                </View>
                                <Text
                                    style={{ color: Colors.red, marginLeft: 24 }}
                                >{!this.state.numberValid ? 'Invalid OTP, must be 4 digits' : ''}</Text>
                            </View>

                            <TouchableOpacity
                                onPress={(e) => {
                                    if (!this.state.valid) {
                                        Alert.alert(
                                            'Please',
                                            'Enter Correct OTP',
                                            [
                                                {
                                                    text: 'Cancel',
                                                    onPress: console.log('cancel'),
                                                    style: 'cancel',
                                                },
                                                { text: 'OK', onPress: () => console.log('ok') },
                                            ],
                                            { cancelable: false }
                                        );
                                    }
                                    else {
                                        this.onSubmit(e, this.state.otp)
                                    }
                                }}
                                style={{
                                    width: 100,
                                    height: 40,
                                    backgroundColor: Colors.primary,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 5,
                                    marginTop: 15,
                                    marginHorizontal: 100
                                }}
                            >

                                <Text style={{ color: Colors.white }}>Verify OTP</Text>

                            </TouchableOpacity>
                        </View>

                        {isLoading ? <ActivityIndicator mode="overlay" /> : null}
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const { user } = state;
    console.log("State in user Screen- ", JSON.stringify(user));
    return {
        user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        otpVerifyReg: (value, navigation) => dispatch(otpVerifyReg(value, navigation))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OtpScreen);



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        //alignItems: "center",
        backgroundColor: Colors.lightGrey
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: Colors.Text,
        marginBottom: 5
    },
    ubContain: {
        paddingHorizontal: 10,
        paddingBottom: 50,
    },
    loginForm: {},
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
    },
    input: {
        color: Colors.text,
        borderColor: "#9B9B9B",
        height: 40,
        marginTop: 10,
        marginLeft: 10,
        paddingHorizontal: 10,
        paddingTop: 0,
        paddingBottom: 8,
        flex: 1,
        textAlign: "left",
    },
    loginButton: {
        marginTop: 20,
        backgroundColor: Colors.login.default,
        borderRadius: 5,
        elevation: 1,
    },
    textLogin: {
        color: '#FFF'
    },
    separatorWrap: {
        paddingVertical: 15,
        flexDirection: "row",
        alignItems: "center",
    },
    separator: {
        borderBottomWidth: 1,
        flexGrow: 1,
        borderColor: Colors.blackTextDisable,
    },
    separatorText: {
        color: Colors.blackTextDisable,
        paddingHorizontal: 10,
    },
    fbButton: {
        backgroundColor: Colors.login.facebook,
        borderRadius: 5,
    },
});
