import React, { Component } from "react";
import { TouchableOpacity, ScrollView, StyleSheet, TextInput, Text, View, Dimensions } from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { addAddress } from "../Redux/UserAddressRedux";
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
            pincode: 0,
            mobile: 0,
            city: '',
            state: '',
            email: '',
            other: '',
            address_type: 'primary',
            set_default: false,
            country: '',
            address_line_2: ''
        }
    }

    static navigationOptions = {

    }

    componentDidMount() {
        //this.props.getRestaurantList();
    }

    onUsernameEditHandle = (name) => {
        this.setState({ name: name })

    }
    onCountryEditHandle = (country) => {
        this.setState({ country: country })
    }
    onNumberEditHandle = (mobile) => {
        this.setState({ mobile: mobile })
    }
    onCityEditHandle = (city) => {
        this.setState({ city: city })
    }
    onStateEditHandle = (state) => {
        this.setState({ state: state })
    }
    onPincodeEditHandle = (pincode) => {
        this.setState({ pincode: pincode })
    }
    onEmailEditHandle = (email) => {
        this.setState({ email: email })
    }
    onOtherEditHandle = (other) => {
        this.setState({ other: other })
    }
    onTypeEditHandle = (other) => {
        this.setState({ other: other })
    }
    onAddressLine2EditHandle = (address_line_2) => {
        this.setState({ address_line_2: address_line_2 })
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
            customer_id: this.props.user.user.user_data[0].id,
            country: this.state.country,
            address_line_2: this.state.address_line_2
        }
        console.log('address formmmm', JSON.stringify(data))
        this.props.addAddress(data);
        this.props.navigation.push('AddressListScreen');

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
                                        ref={(comp) => (this.username = comp)}
                                        placeholder={"Enter Your Name"}
                                        onChangeText={(name) => this.onUsernameEditHandle(name)}
                                        //onSubmitEditing={this.focusPassword}
                                        returnKeyType="next"
                                        value={this.state.name}
                                        style={{
                                            height: 50,
                                            borderRadius: 5,

                                        }}
                                    />
                                </View>
                                <View style={styles.inputWrap}>

                                    <TextInput
                                        ref={(comp) => (this.username = comp)}
                                        placeholder={"Enter Your Email"}
                                        onChangeText={(email) => this.onEmailEditHandle(email)}
                                        //onSubmitEditing={this.focusPassword}
                                        returnKeyType="next"
                                        keyboardType='email-address'
                                        value={this.state.email}
                                        style={{
                                            height: 50,
                                            borderRadius: 5,

                                        }}
                                    />
                                </View>
                                <View style={styles.inputWrap}>

                                    <TextInput
                                        ref={(comp) => (this.username = comp)}
                                        placeholder={"Near by address..."}
                                        onChangeText={(name) => this.onOtherEditHandle(name)}
                                        //onSubmitEditing={this.focusPassword}
                                        returnKeyType="next"
                                        value={this.state.other}
                                        style={{
                                            height: 50,
                                            borderRadius: 5,

                                        }}
                                    />
                                </View>
                                <View style={styles.inputWrap}>

                                    <TextInput
                                        ref={(comp) => (this.username = comp)}
                                        placeholder={"Enter City Name"}
                                        onChangeText={(city) => this.onCityEditHandle(city)}
                                        //onSubmitEditing={this.focusPassword}
                                        returnKeyType="next"
                                        value={this.state.city}
                                        style={{
                                            height: 50,
                                            borderRadius: 5,

                                        }}
                                    />
                                </View>
                                <View style={styles.inputWrap}>

                                    <TextInput
                                        ref={(comp) => (this.username = comp)}
                                        placeholder={"Enter State Name"}
                                        keyboardType='name-phone-pad'
                                        onChangeText={(state) => this.onStateEditHandle(state)}
                                        //onSubmitEditing={this.focusPassword}
                                        returnKeyType="next"
                                        value={this.state.state}
                                        style={{
                                            height: 50,
                                            borderRadius: 5,

                                        }}
                                    />
                                </View>
                                <View style={styles.inputWrap}>

                                    <TextInput
                                        ref={(comp) => (this.username = comp)}
                                        placeholder={"Enter floor No, House No"}
                                        keyboardType='name-phone-pad'
                                        onChangeText={(address_line_2) => this.onAddressLine2EditHandle(address_line_2)}
                                        //onSubmitEditing={this.focusPassword}
                                        returnKeyType="next"
                                        value={this.state.address_line_2}
                                        style={{
                                            height: 50,
                                            borderRadius: 5,

                                        }}
                                    />
                                </View>
                                <View style={styles.inputWrap}>

                                    <TextInput
                                        ref={(comp) => (this.username = comp)}
                                        placeholder={"Enter Your Country Name"}
                                        keyboardType='name-phone-pad'
                                        onChangeText={(country) => this.onCountryEditHandle(country)}
                                        //onSubmitEditing={this.focusPassword}
                                        returnKeyType="next"
                                        value={this.state.country}
                                        style={{
                                            height: 50,
                                            borderRadius: 5,

                                        }}
                                    />
                                </View>
                                <View style={styles.inputWrap}>

                                    <TextInput
                                        ref={(comp) => (this.username = comp)}
                                        placeholder={"Enter Mobile No"}
                                        keyboardType="numeric"
                                        onChangeText={(mobile) => this.onNumberEditHandle(mobile)}
                                        //onSubmitEditing={this.focusPassword}
                                        returnKeyType="next"
                                        value={this.state.mobile}
                                        style={{
                                            height: 50,
                                            borderRadius: 5,

                                        }}
                                    />
                                </View>
                                <View style={styles.inputWrap}>

                                    <TextInput
                                        ref={(comp) => (this.username = comp)}
                                        placeholder={"Enter PinCode No"}
                                        onChangeText={(pincode) => this.onPincodeEditHandle(pincode)}
                                        //onSubmitEditing={this.focusPassword}
                                        returnKeyType="next"
                                        keyboardType="numeric"
                                        value={this.state.pincode}
                                        style={{
                                            height: 50,
                                            borderRadius: 5,

                                        }}
                                    />

                                </View>
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
                                onPress={(e) => this.onSubmit(e)}
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
        addAddress: (value) => dispatch(addAddress(value))
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
