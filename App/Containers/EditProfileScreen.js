import React, { Component } from "react";
import { TouchableOpacity, ScrollView, StyleSheet, TextInput, Text, Platform, View, Dimensions, KeyboardAvoidingView, Alert } from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { addAddress, getAddress } from "../Redux/UserAddressRedux";
import { Colors } from "../Themes";
import ActivityIndicator from '../Components/ActivityIndicator';
import Fonts from '../Themes/Fonts';
import { Picker } from 'react-native-picker-dropdown';
import { SafeAreaView } from 'react-navigation';
import Api from '../Services';
import Snackbar from 'react-native-snackbar';
import { updateUser } from "../Redux/UserRedux";

const { width, height } = Dimensions.get('window');


const api = Api.Api();



class EditProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.user.user.user_data.name,
            pincode: '',
            mobile: props.user.user.user_data.phone,
            city: '',
            state: '',
            email: props.user.user.user_data.email,
            other: '',
            address_type: 'primary',
            set_default: false,
            country: '',
            address: '',
            nameValidate: true,
            pincodeValidate: true,
            mobileValidate: true,
            cityValidate: true,
            stateValidate: true,
            emailValidate: true,
            otherValidate: true,
            countryValidate: true,
            address2Validate: true,
            nameValid: false,
            pincodeValid: false,
            mobileValid: false,
            cityValid: false,
            stateValid: false,
            emailValid: false,
            otherValid: false,
            countryValid: false,
            address2Valid: false,
            // amount: props.navigation.state.params.amount,
        }
    }

    static navigationOptions = {

    }

    componentDidMount() {
        //this.props.getRestaurantList();
        this.setState({

        })
    }


    validate(text, type) {
        phn = /^(0|[1-9][0-9]{9})$/i;
        email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (type == 'phn') {
            if (phn.test(text)) {
                this.setState({
                    mobileValidate: true,
                    mobile: text,
                    mobileValid: true
                })
            }
            else {
                this.setState({
                    mobileValidate: false,
                    mobile: text,
                    mobileValid: false
                })
            }
        }
        else if (type == 'email') {
            if (email.test(text)) {
                this.setState({
                    emailValidate: true,
                    email: text,
                    emailValid: true
                })
            }
            else {
                this.setState({
                    email: text,
                    emailValidate: false,
                    emailValid: false
                })
            }
        }
        else if (type == 'name') {
            if (text.length > 0) {
                this.setState({
                    nameValidate: true,
                    name: text,
                    nameValid: true
                })
            }
            else {
                this.setState({
                    name: text,
                    nameValidate: false,
                    nameValid: false
                })
            }
        }

    }

    showToast(message) {
        Snackbar.show({
            title: message,
            duration: Snackbar.LENGTH_LONG,
        });
    }

    onSubmit(e) {
        const { user } = this.props
        var dataObj = {
            mobile: this.state.mobile,
            name: this.state.name,
            email: this.state.email,
            customer_id: user.user.user_data.id ? user.user.user_data.id : user.user.user_data.customer_id
        }
        // var addressData = { data: data, navigate: this.props.navigation.replace };
        api.updateUserDetails(dataObj).then(response => {
            const { data } = response;
            console.log('updateUserDetails response ', data);
            if (data && data.Status === 'success') {
                this.props.updateUser(data)
                this.showToast(data.Message ? data.Message : "Your account has been updated successfully");
                // this.props.navigation.replace("ProfileScreen");
                this.props.navigation.replace('MyAccount');
            }
        });
        // console.log('address formmmm', JSON.stringify(data))
    }

    selectAddress(itemValue, itemIndex) {
        console.log(itemValue);
        this.setState({
            address_type: itemValue
        });
    }


    render() {
        const { isLoading } = this.props;
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.lightGrey }}>
                <ScrollView style={{ flex: 1, backgroundColor: Colors.white }}>
                    <View style={styles.container}>
                        <ScrollView
                            style={{ backgroundColor: Colors.white, marginTop: 20, marginBottom: 20 }}
                            contentContainerStyle={styles.container}>
                            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "padding"} enabled>

                                <View>
                                    <Text style={{ textAlign: 'center', fontSize: Fonts.size.regular_17, fontWeight: '500' }}>Enter Details</Text>
                                </View>
                                <View style={styles.subContain}>
                                    <View style={styles.loginForm}>

                                        <View style={styles.inputWrap}>

                                            <TextInput
                                                placeholder={"Enter Your Name"}
                                                onChangeText={(name) => this.validate(name, 'name')}
                                                value={this.state.name}
                                                style={[{
                                                    paddingLeft: 10,
                                                    height: 50,
                                                    borderRadius: 5,
                                                    width: Dimensions.get('screen').width * .88
                                                }, !this.state.nameValidate ? { borderColor: Colors.red, borderWidth: 1 } : null]}
                                            />
                                        </View>
                                        <Text
                                            style={{ color: Colors.red, marginLeft: 24 }}
                                        >{!this.state.nameValidate ? 'User Name is required.' : ''}</Text>
                                        <View style={styles.inputWrap}>

                                            <TextInput

                                                placeholder={"Enter Your Email"}
                                                onChangeText={(email) => this.validate(email, 'email')}
                                                keyboardType='email-address'
                                                value={this.state.email}
                                                style={[{
                                                    paddingLeft: 10,
                                                    height: 50,
                                                    borderRadius: 5,
                                                    width: Dimensions.get('screen').width * .88
                                                }, !this.state.emailValidate ? { borderColor: Colors.red, borderWidth: 1 } : null]}
                                            />
                                        </View>
                                        <Text
                                            style={{ color: Colors.red, marginLeft: 24 }}
                                        >{!this.state.emailValidate ? 'Invalid email address' : ''}</Text>

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
                                                }, !this.state.mobileValidate ? { borderColor: Colors.red, borderWidth: 1 } : null]}
                                            />
                                        </View>
                                        <Text
                                            style={{ color: Colors.red, marginLeft: 24 }}
                                        >{!this.state.mobileValidate ? 'Invalid phone number, must be 10 digits' : ''}</Text>

                                    </View>
                                    <TouchableOpacity
                                        style={{
                                            width: width * 0.9,
                                            height: 40,
                                            backgroundColor: Colors.primary,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 5,
                                            marginTop: 15,
                                            marginLeft: 20
                                        }}
                                        onPress={(e) => {

                                            if (!this.state.name ||
                                                !this.state.mobile ||
                                                !this.state.email
                                            ) {
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
                                                this.onSubmit(e)
                                            }
                                        }
                                        }
                                    >

                                        <Text style={{ color: Colors.white }}>Save Changes</Text>

                                    </TouchableOpacity>
                                </View>

                                {isLoading ? <ActivityIndicator mode="overlay" /> : null}
                            </KeyboardAvoidingView>
                        </ScrollView>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => {
    const { address, user } = state;
    // console.log('User', JSON.stringify(state.user.user.user_data));
    console.log("State in profile update ", user);
    return {
        address, user
    };

};

const mapDispatchToProps = dispatch => {
    return {
        updateUser: (value) => dispatch(updateUser(value))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProfileScreen);

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
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20
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
