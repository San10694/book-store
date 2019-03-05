import React, { Component } from "react";
import { TouchableOpacity, ScrollView, StyleSheet, TextInput, Text, View, Alert, AsyncStorage } from "react-native";
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
            otp: 0,
            mobile: this.props.navigation.state.params.number,
            name: this.props.navigation.state.params.name,
            email: this.props.navigation.state.params.email,
            fcm: ''
        }

    }

    static navigationOptions = {

    }

    componentDidMount() {
        //this.props.getRestaurantList();
    }

    onOTPEditHandle = (otp) => {
        this.setState({ otp: otp })

    }

    async  onSubmit(e, otp) {
        this.state.fcm = await AsyncStorage.getItem('fcmToken');
        const { navigate } = this.props.navigation;
        var data = { mobile: this.state.mobile, otp: otp, fcm: this.state.fcm, name: this.state.name, email: this.state.email, navigate: navigate }
        this.props.otpVerifyReg(data);
        // api.otpVerifyReg(data).then(response => {

        //     console.log('otp -', JSON.stringify(response));
        //     if (response.data.Error === '0000') {
        //         this.props.navigation.navigate("HomeTab")
        //     }
        //     else {
        //         Alert.alert(
        //             'Error ',
        //             'Invalid OTP',
        //             [
        //                 {
        //                     text: 'OK',
        //                     onPress: () => {
        //                         console.log('ok')
        //                     },
        //                 },
        //             ],
        //             {
        //                 cancelable: false,
        //             }
        //         );
        //     }

        // })
        // console.log(otp);
        // this.state.fcm = await AsyncStorage.getItem('fcmToken');
        // var data = { mobile: this.state.mobile, otp: otp, fcm: this.state.fcm }
        // this.props.otpVerify(data);
        // if (this.props.user.otp.Error == '0000') {
        //     this.props.navigation.navigate("HomeTab")
        // }
    }

    render() {
        const { isLoading } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: Colors.white }}>
                <View style={styles.container}>
                    <ScrollView
                        style={{ backgroundColor: Colors.white }}
                        contentContainerStyle={styles.container}>
                        {/* <View style={styles.logoWrap}>
                            <Image
                                source={Config.LogoWithText}
                                style={styles.logo}
                                resizeMode="contain"
                            />
                        </View> */}
                        <View style={styles.subContain}>
                            <View style={styles.loginForm}>
                                <View style={styles.inputWrap}>
                                    <Icon
                                        name={"phone"}
                                        size={20}
                                        color={Colors.primary}
                                    />
                                    <TextInput
                                        ref={(comp) => (this.username = comp)}
                                        placeholder={"Enter  OTP"}
                                        keyboardType="numeric"
                                        onChangeText={(otp) => this.onOTPEditHandle(otp)}
                                        //onSubmitEditing={this.focusPassword}
                                        returnKeyType="next"
                                        value={this.state.otp}
                                        style={{
                                            height: 50,
                                            borderRadius: 5,

                                        }}
                                    />
                                </View>
                                {/* <View style={styles.inputWrap}>
                                    <Icon
                                        name={"lock-outline"}
                                        size={20}
                                        color={Colors.primary}
                                    />
                                    <TextInput
                                        ref={(comp) => (this.password = comp)}
                                        placeholder={"password"}
                                        onChangeText={(password) => this.onPasswordEditHandle(password)}
                                        secureTextEntry
                                        returnKeyType="go"
                                        value={this.state.password}
                                    />
                                </View> */}
                                {/* <ButtonIndex
                                    text={Languages.Login.toUpperCase()}
                                    containerStyle={styles.loginButton}
                                    textStyle={styles.textLogin}
                                    onPress={this.onLoginPressHandle}
                                    textColor={text}
                                /> */}
                            </View>
                            {/* <View style={styles.separatorWrap}>
                                <View style={styles.separator} />
                                <Text style={styles.separatorText}>{Languages.Or}</Text>
                                <View style={styles.separator} />
                            </View> */}
                            {/* <ButtonIndex
                                text={Languages.FacebookLogin.toUpperCase()}
                                icon={Icons.MaterialCommunityIcons.Facebook}
                                containerStyle={styles.fbButton}
                                onPress={this.onFBLoginPressHandle}
                            /> */}
                            <TouchableOpacity
                                onPress={(e) => { this.onSubmit(e, this.state.otp) }}
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
                            //onPress={this.onSignUpHandle}
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
        otpVerifyReg: (value) => dispatch(otpVerifyReg(value))
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
        margin: 20,
        paddingHorizontal: 10
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
