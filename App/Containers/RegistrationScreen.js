import React, { Component } from "react";
import { TouchableOpacity, ScrollView, StyleSheet, TextInput, Text, View, Platform, KeyboardAvoidingView, Alert, Dimensions } from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import Api from "../Services";
import { Colors, Fonts } from "../Themes";
import ActivityIndicator from '../Components/ActivityIndicator';
const api = Api.Api();

class RegistrationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
            name: '',
            email: '',
            isLoading: true,
            numberValid: true,
            numberValidate: false,
            emailValidate: false,
            nameValidate: false,
            emailValid: true,
            nameValid: true
        }
    }

    static navigationOptions = {

    }



    componentDidMount() {
        // this.refs.input1.focus()
    }



    validate(text, type) {
        phn = /^(0|[1-9][0-9]{9})$/i;
        email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (type == 'phn') {
            if (phn.test(text)) {
                this.setState({
                    numberValid: true,
                    mobile: text,
                    nameValidate: true
                })
            }
            else {
                this.setState({
                    numberValid: false,
                    mobile: text,
                    nameValidate: false
                })
            }
        }
        else if (type == 'email') {
            if (email.test(text)) {
                this.setState({
                    emailValid: true,
                    email: text,
                    emailValidate: true
                })
            }
            else {
                this.setState({
                    email: text,
                    emailValid: false,
                    emailValidate: false
                })
            }
        }
        else {
            if (text.length > 4) {
                this.setState({
                    nameValid: true,
                    name: text,
                    nameValidate: true
                })
            }
            else {
                this.setState({
                    name: text,
                    nameValid: false,
                    nameValidate: false
                })
            }
        }
    }

    onSubmit(e, mobile, name, email) {
        api.userSignup(mobile).then(response => {
            if (response.data.Error === '0000') {
                this.props.navigation.navigate("OtpScreen", { number: mobile, name: name, email: email });

            }
            else {
                Alert.alert(
                    'Error ',
                    response.data.Message,
                    [
                        {
                            text: 'OK',
                            onPress: () => {
                                console.log('ok')
                            },
                        },
                    ],
                    {
                        cancelable: false,
                    }
                );
            }
            //console.log('register onSubmit - ', response)
        })
    }


    render() {
        const { isLoading } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: Colors.white }}>
                <View style={styles.container}>
                    <ScrollView
                        style={{ backgroundColor: Colors.white }}
                        contentContainerStyle={styles.container}>
                        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "position" : null} enabled>

                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontSize: Fonts.size.h4,
                                    marginBottom: 50,
                                    fontWeight: 'bold',
                                    color: Colors.primary,
                                    fontFamily: Fonts.type.gotham_bold
                                }}>Sign Up</Text>
                            <View style={styles.subContain}>
                                <View style={styles.loginForm}>

                                    <View style={styles.inputWrap}>

                                        <TextInput
                                            ref="input1"
                                            placeholder={"Enter Your Name"}
                                            keyboardType='name-phone-pad'
                                            onChangeText={(name) => this.validate(name, 'name')}
                                            value={this.state.name}
                                            style={[{
                                                paddingLeft: 10,
                                                height: 50,
                                                borderRadius: 5,
                                                width: Dimensions.get('screen').width * .88
                                            }, !this.state.nameValid ? { borderColor: Colors.red, borderWidth: 1 } : null]}
                                        />

                                    </View>
                                    <Text
                                        style={{ color: Colors.red, marginLeft: 24 }}
                                    >{!this.state.nameValid ? 'Must be greater then 4 characters' : ''}</Text>
                                    <View style={styles.inputWrap}>

                                        <TextInput
                                            placeholder={"Enter Your Email"}
                                            keyboardType='email-address'
                                            onChangeText={(email) => this.validate(email, 'email')}
                                            value={this.state.email}
                                            style={[{
                                                paddingLeft: 10,
                                                height: 50,
                                                borderRadius: 5,
                                                width: Dimensions.get('screen').width * .88
                                            }, !this.state.emailValid ? { borderColor: Colors.red, borderWidth: 1 } : null]}
                                        />
                                    </View>
                                    <Text
                                        style={{ color: Colors.red, marginLeft: 24 }}
                                    >{!this.state.emailValid ? 'Invalid email address' : ''}</Text>
                                    <View style={styles.inputWrap}>

                                        <TextInput
                                            placeholder={"Enter Mobile No"}
                                            keyboardType="numeric"
                                            onChangeText={(mobile) => this.validate(mobile, 'phn')}
                                            value={this.state.mobile}
                                            style={[{
                                                paddingLeft: 10,
                                                height: 50,
                                                borderRadius: 5,
                                                width: Dimensions.get('screen').width * .88
                                            }, !this.state.numberValid ? { borderColor: Colors.red, borderWidth: 1 } : null]}
                                        />
                                    </View>
                                    <Text
                                        style={{ color: Colors.red, marginLeft: 24 }}
                                    >{!this.state.numberValid ? 'Invalid phone number, must be 10 digits' : ''}</Text>
                                </View>

                                <TouchableOpacity
                                    onPress={(e) => {
                                        if (!this.state.numberValid || !this.state.nameValidate || !this.state.emailValidate) {
                                            Alert.alert(
                                                '',
                                                'Please fill all the inputs',
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
                                            this.onSubmit(e, this.state.mobile, this.state.name, this.state.email)
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
                                        alignSelf: 'center'
                                        // marginHorizontal: 100
                                    }}
                                //onPress={this.onSignUpHandle}
                                >

                                    <Text style={{ color: Colors.white }}>Submit</Text>

                                </TouchableOpacity>
                            </View>

                            {isLoading ? <ActivityIndicator mode="overlay" /> : null}
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </View>
        );
    }
}



export default RegistrationScreen;

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

        alignItems: "center",
        borderColor: Colors.blackDivide,
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 14
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
