import React, { Component } from "react";
import { TouchableOpacity, ScrollView, StyleSheet, TextInput, Text, View, Dimensions, Alert } from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { addAddress, getAddress } from "../Redux/UserAddressRedux";
import { Colors } from "../Themes";
import ActivityIndicator from '../Components/ActivityIndicator';
import Fonts from '../Themes/Fonts';
import { Picker } from 'react-native-picker-dropdown';
const { width, height } = Dimensions.get('window');


class AddAdressScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            pincode: '',
            mobile: 0,
            city: '',
            state: '',
            email: '',
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
        }
    }

    static navigationOptions = {

    }

    componentDidMount() {
        //this.props.getRestaurantList();
    }

    // onUsernameEditHandle = (name) => {
    //     this.setState({ name: name })

    // }
    // onCountryEditHandle = (country) => {
    //     this.setState({ country: country })
    // }
    // onNumberEditHandle = (mobile) => {
    //     this.setState({ mobile: mobile })
    // }
    // onCityEditHandle = (city) => {
    //     this.setState({ city: city })
    // }
    // onStateEditHandle = (state) => {
    //     this.setState({ state: state })
    // }
    // onPincodeEditHandle = (pincode) => {
    //     this.setState({ pincode: pincode })
    // }
    // onEmailEditHandle = (email) => {
    //     this.setState({ email: email })
    // }
    // onOtherEditHandle = (other) => {
    //     this.setState({ other: other })
    // }

    // onAddressLine2EditHandle = (address_line_2) => {
    //     this.setState({ address_line_2: address_line_2 })
    // }

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
            if (text.length > 4) {
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
        else if (type == 'city') {
            if (text.length > 2) {
                this.setState({
                    cityValidate: true,
                    city: text,
                    cityValid: true
                })
            }
            else {
                this.setState({
                    city: text,
                    cityValidate: false,
                    cityValid: false
                })
            }
        }
        else if (type == 'state') {
            if (text.length > 0) {
                this.setState({
                    stateValidate: true,
                    state: text,
                    stateValid: true
                })
            }
            else {
                this.setState({
                    state: text,
                    stateValidate: false,
                    stateValid: false
                })
            }
        }
        else if (type == 'country') {
            if (text.length > 2) {
                this.setState({
                    countryValidate: true,
                    country: text,
                    countryValid: true
                })
            }
            else {
                this.setState({
                    country: text,
                    countryValidate: false,
                    countryValid: false
                })
            }
        }
        else if (type == 'pincode') {
            if (text.length == 6) {
                this.setState({
                    pincodeValidate: true,
                    pincode: text,
                    pincodeValid: true
                })
            }
            else {
                this.setState({
                    pincode: text,
                    pincodeValidate: false,
                    pincodeValid: false
                })
            }
        }
        else if (type == 'other') {
            if (text.length > 10) {
                this.setState({
                    otherValidate: true,
                    other: text,
                    otherValid: true
                })
            }
            else {
                this.setState({
                    other: text,
                    otherValidate: false,
                    otherValid: false
                })
            }
        }
        else if (type == 'address') {
            if (text.length > 10) {
                this.setState({
                    address2Validate: true,
                    address: text,
                    address2Valid: true
                })
            }
            else {
                this.setState({
                    address2Validate: false,
                    address: text,
                    address2Valid: false
                })
            }
        }
        else { }
    }

    onSubmit(e) {
        var data = {
            mobile: this.state.mobile,
            name: this.state.name,
            address_type: this.state.address_type,
            email: this.state.email,
            city: this.state.city,
            state: this.state.state,
            pincode: this.state.pincode,
            other: this.state.other,
            set_default: this.state.address_type === 'primary' ? 'yes' : 'no',
            customer_id: this.props.user.user.user_data.id,
            country: this.state.country,
            address_line_2: this.state.address_line_2
        }
        var addressData = { data: data, navigate: this.props.navigation.push };
        // console.log('address formmmm', JSON.stringify(data))
        this.props.addAddress(addressData);

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
            <ScrollView style={{ flex: 1, backgroundColor: Colors.white }}>
                <View style={styles.container}>
                    <ScrollView
                        style={{ backgroundColor: Colors.white, marginTop: 20, marginBottom: 20 }}
                        contentContainerStyle={styles.container}>
                        <View>
                            <Text style={{ textAlign: 'center', fontSize: Fonts.size.regular_17, fontWeight: '500' }}>Enter Address</Text>
                        </View>
                        <View style={styles.subContain}>
                            <View style={styles.loginForm}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ paddingTop: 15, paddingLeft: 20, fontSize: Fonts.size.medium_15 }}>Address Type</Text>
                                    <Picker
                                        selectedValue={this.state.address_type}
                                        onValueChange={(itemValue, itemIndex) => this.selectAddress(itemValue, itemIndex)}
                                        prompt="Choose Address Type"
                                        style={{
                                            height: 50,
                                            width: 150,
                                            alignSelf: 'center',
                                            color: Colors.primary,
                                        }}
                                        cancel

                                    >
                                        <Picker.Item label="Primary" value="primary" />
                                        <Picker.Item label="Shipping" value="shipping" />
                                        <Picker.Item label="Billing" value="billing" />
                                    </Picker>
                                </View>
                                <View style={styles.inputWrap}>

                                    <TextInput
                                        placeholder={"Enter Your Name"}
                                        onChangeText={(name) => this.validate(name, 'name')}
                                        value={this.state.name}
                                        style={[{
                                            height: 50,
                                            borderRadius: 5,
                                            width: Dimensions.get('screen').width * .88
                                        }, !this.state.nameValidate ? { borderColor: Colors.red, borderWidth: 1 } : null]}
                                    />
                                </View>
                                <Text
                                    style={{ color: Colors.red, marginLeft: 24 }}
                                >{!this.state.nameValidate ? 'Must be greater than 4 characters' : ''}</Text>
                                <View style={styles.inputWrap}>

                                    <TextInput

                                        placeholder={"Enter Your Email"}
                                        onChangeText={(email) => this.validate(email, 'email')}
                                        keyboardType='email-address'
                                        value={this.state.email}
                                        style={[{
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
                                        placeholder={"Near by address..."}
                                        onChangeText={(other) => this.validate(other, 'other')}
                                        value={this.state.other}
                                        style={[{
                                            height: 50,
                                            borderRadius: 5,
                                            width: Dimensions.get('screen').width * .88
                                        }, !this.state.otherValidate ? { borderColor: Colors.red, borderWidth: 1 } : null]}
                                    />
                                </View>
                                <Text
                                    style={{ color: Colors.red, marginLeft: 24 }}
                                >{!this.state.otherValidate ? 'Address must be greater than 10 characters' : ''}</Text>
                                <View style={styles.inputWrap}>

                                    <TextInput
                                        placeholder={"Enter City Name"}
                                        onChangeText={(city) => this.validate(city, 'city')}
                                        value={this.state.city}
                                        style={[{
                                            height: 50,
                                            borderRadius: 5,
                                            width: Dimensions.get('screen').width * .88
                                        }, !this.state.cityValidate ? { borderColor: Colors.red, borderWidth: 1 } : null]}
                                    />
                                </View>
                                <Text
                                    style={{ color: Colors.red, marginLeft: 24 }}
                                >{!this.state.cityValidate ? 'City name must be greater than 4 characters' : ''}</Text>
                                <View style={styles.inputWrap}>

                                    <TextInput
                                        placeholder={"Enter State Name"}
                                        keyboardType='name-phone-pad'
                                        onChangeText={(state) => this.validate(state, 'state')}
                                        value={this.state.state}
                                        style={[{
                                            height: 50,
                                            borderRadius: 5,
                                            width: Dimensions.get('screen').width * .88
                                        }, !this.state.stateValidate ? { borderColor: Colors.red, borderWidth: 1 } : null]}
                                    />
                                </View>
                                <Text
                                    style={{ color: Colors.red, marginLeft: 24 }}
                                >{!this.state.stateValidate ? 'State name must be required' : ''}</Text>
                                <View style={styles.inputWrap}>

                                    <TextInput
                                        placeholder={"Enter floor No, House No"}
                                        keyboardType='name-phone-pad'
                                        onChangeText={(address) => this.validate(address, 'address')}

                                        value={this.state.address}
                                        style={[{
                                            height: 50,
                                            borderRadius: 5,
                                            width: Dimensions.get('screen').width * .88
                                        }, !this.state.address2Validate ? { borderColor: Colors.red, borderWidth: 1 } : null]}
                                    />
                                </View>
                                <Text
                                    style={{ color: Colors.red, marginLeft: 24 }}
                                >{!this.state.address2Validate ? 'Address must be greater than 10 characters' : ''}</Text>
                                <View style={styles.inputWrap}>

                                    <TextInput
                                        placeholder={"Enter Your Country Name"}
                                        keyboardType='name-phone-pad'
                                        onChangeText={(country) => this.validate(country, 'country')}

                                        value={this.state.country}
                                        style={[{
                                            height: 50,
                                            borderRadius: 5,
                                            width: Dimensions.get('screen').width * .88
                                        }, !this.state.countryValidate ? { borderColor: Colors.red, borderWidth: 1 } : null]}
                                    />
                                </View>
                                <Text
                                    style={{ color: Colors.red, marginLeft: 24 }}
                                >{!this.state.countryValidate ? 'Country name, must be greater than 4 characters' : ''}</Text>
                                <View style={styles.inputWrap}>

                                    <TextInput
                                        placeholder={"Enter Mobile No"}
                                        keyboardType="numeric"
                                        onChangeText={(mobile) => this.validate(mobile, 'phn')}

                                        value={this.state.mobile}
                                        style={[{
                                            height: 50,
                                            borderRadius: 5,
                                            width: Dimensions.get('screen').width * .88
                                        }, !this.state.mobileValidate ? { borderColor: Colors.red, borderWidth: 1 } : null]}
                                    />
                                </View>
                                <Text
                                    style={{ color: Colors.red, marginLeft: 24 }}
                                >{!this.state.mobileValidate ? 'Invalid phone number, must be 10 digits' : ''}</Text>
                                <View style={styles.inputWrap}>

                                    <TextInput
                                        placeholder={"Enter PinCode No"}
                                        onChangeText={(pincode) => this.validate(pincode, 'pincode')}

                                        keyboardType="numeric"
                                        value={this.state.pincode}
                                        style={[{
                                            height: 50,
                                            borderRadius: 5,
                                            width: Dimensions.get('screen').width * .88
                                        }, !this.state.pincodeValidate ? { borderColor: Colors.red, borderWidth: 1 } : null]}
                                    />

                                </View>
                                <Text
                                    style={{ color: Colors.red, marginLeft: 24 }}
                                >{!this.state.pincodeValidate ? 'Invalid Pincode, must be 6 digits' : ''}</Text>
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

                                    if (!this.state.nameValid ||
                                        !this.state.pincodeValid ||
                                        !this.state.mobileValid ||
                                        !this.state.cityValid ||
                                        !this.state.stateValid ||
                                        !this.state.emailValid ||
                                        !this.state.otherValid ||
                                        !this.state.countryValid ||
                                        !this.state.address2Valid) {
                                        Alert.alert(
                                            'Please Filled All Fields',
                                            'All Field is required and should be Validate',
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

                                <Text style={{ color: Colors.white }}>Add Address</Text>

                            </TouchableOpacity>
                        </View>

                        {isLoading ? <ActivityIndicator mode="overlay" /> : null}
                    </ScrollView>
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = state => {
    const { address, user } = state;
    console.log('userrrrrrrrrrrrrr', JSON.stringify(state.user.user.user_data));
    console.log("State in address Screen- ", address);
    return {
        address, user
    };

};

const mapDispatchToProps = dispatch => {
    return {
        addAddress: (value) => dispatch(addAddress(value)),
        getAddress: (value) => dispatch(getAddress(value))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddAdressScreen);

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
