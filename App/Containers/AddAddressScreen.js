import React, { Component } from "react";
import { TouchableOpacity, ScrollView, StyleSheet, TextInput, Text, View, Dimensions } from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getRestaurantList } from "../Redux/ListRedux";
import { Colors } from "../Themes";
import ActivityIndicator from '../Components/ActivityIndicator';
import Fonts from '../Themes/Fonts';

const { width, height } = Dimensions.get('window');


class AddAdressScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            pincode: 0,
            mobile: 0,
            street: '',
            state: ''

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
    onNumberEditHandle = (mobile) => {
        this.setState({ mobile: mobile })
    }
    onStreetEditHandle = (street) => {
        this.setState({ street: street })
    }
    onStateEditHandle = (state) => {
        this.setState({ state: state })
    }
    onPincodeEditHandle = (pincode) => {
        this.setState({ pincode: pincode })
    }

    render() {
        const { isLoading } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: Colors.white }}>
                <View style={styles.container}>
                    <ScrollView
                        style={{ backgroundColor: Colors.white }}
                        contentContainerStyle={styles.container}>
                        <View>
                            <Text style={{ textAlign: 'center', fontSize: Fonts.size.regular_17, fontWeight: '500' }}>Enter Address</Text>
                        </View>
                        <View style={styles.subContain}>
                            <View style={styles.loginForm}>
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
                                        placeholder={"Enter Street Name"}
                                        onChangeText={(street) => this.onStreetEditHandle(street)}
                                        //onSubmitEditing={this.focusPassword}
                                        returnKeyType="next"
                                        value={this.state.street}
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
                                        keyboardType="numeric"
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
                                    width: width * 0.9,
                                    height: 40,
                                    backgroundColor: Colors.primary,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 5,
                                    marginTop: 15,
                                    marginLeft: 20
                                }}
                                onPress={() => this.props.navigation.navigate('AddressListScreen')}
                            >

                                <Text style={{ color: Colors.white }}>Add Address</Text>

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
    const { restaurantList } = state;
    console.log("State in Home Screen- ", restaurantList);
    return {
        restaurantList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getRestaurantList: () => dispatch(getRestaurantList())
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
