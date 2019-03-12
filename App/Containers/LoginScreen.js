import React, { Component } from "react";
import { TouchableOpacity, ScrollView, StyleSheet, TextInput, Text, View, Alert, Dimensions } from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors, Fonts } from "../Themes";
import ActivityIndicator from '../Components/ActivityIndicator';
import Ripple from "react-native-material-ripple";
import { userLogin } from '../Redux/UserRedux';



class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: 0,
            numberValid: true,
            valid: false
        }
    }

    static navigationOptions = {

    }

    onUserNumberEditHandle = (mobile) => {
        this.setState({ mobile: mobile })

    }

    onSubmit(e, mobile) {
        var data = { mobile: mobile, navigate: this.props.navigation.navigate }
        this.props.userLogin(data);


    }


    validate(text, type) {
        phn = /^(0|[1-9][0-9]{9})$/i;
        if (type == 'phn') {
            if (phn.test(text)) {
                this.setState({
                    numberValid: true,
                    valid: true,
                    mobile: text
                })
            }
            else {
                this.setState({
                    numberValid: false,
                    valid: false,
                    mobile: text
                })
            }
        }
    }


    render() {
        const { isLoading } = this.props.user;
        console.log("isLoading ", isLoading)
        // if (isLoading) {
        //     return (
        //         <View>
        //             <ActivityIndicator isFetching={isLoading} />
        //         </View>
        //     )
        // }
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
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: Fonts.size.h4,
                                marginBottom: 50,
                                fontWeight: 'bold',
                                color: Colors.primary,
                                fontFamily: Fonts.type.gotham_bold
                            }}>Login</Text>
                        <View style={styles.subContain}>
                            <View style={styles.loginForm}>
                                <View style={styles.inputWrap}>
                                    {/* <Icon
                                        name={"phone"}
                                        size={20}
                                        color={Colors.primary}
                                    /> */}
                                    <TextInput

                                        placeholder={"Enter Mobile No"}
                                        keyboardType="numeric"
                                        onChangeText={(mobile) => this.validate(mobile, 'phn')}
                                        value={this.state.mobile}
                                        style={[{
                                            height: 50,
                                            borderRadius: 5,
                                            width: Dimensions.get('screen').width * .88
                                        }, !this.state.numberValid ? { borderColor: Colors.red, borderWidth: 1 } : null]}
                                    />
                                </View>
                                <Text
                                    style={{ color: Colors.red, marginLeft: 24 }}
                                >{!this.state.numberValid ? 'Invalid phone number, must be 10 digits' : ''}</Text>
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
                                onPress={(e) => {
                                    if (!this.state.valid) {
                                        Alert.alert(
                                            '',
                                            'Please enter Your Valid Mobile Number',
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
                                        this.onSubmit(e, this.state.mobile)
                                    }
                                }}
                            >
                                <Text style={{ color: Colors.white }}>SEND OTP</Text>
                            </TouchableOpacity>
                        </View>
                        <ActivityIndicator isFetching={isLoading} />
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('RegistrationScreen') }}>
                            <Text style={{ textAlign: 'center', paddingTop: 40, color: Colors.primary }}>Don't have an Account? Sign up.</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </View>
        );
    }
}
const mapStateToProps = state => {
    const { user } = state;
    console.log("State in Login Screen- ", user);
    return {
        user
    };
};
const mapDispatchToProps = dispatch => {
    return {
        userLogin: (value) => dispatch(userLogin(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);


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