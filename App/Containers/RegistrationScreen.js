import React, { Component } from "react";
import { TouchableOpacity, ScrollView, StyleSheet, TextInput, Text, View } from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import Api from "../Services";
import { userSignup } from '../Redux/UserRedux';
import { Colors } from "../Themes";
import ActivityIndicator from '../Components/ActivityIndicator';
// const api = Api.Api();

class RegistrationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: 0,
            name: '',
            email: '',
            isLoading: true
        }
    }

    static navigationOptions = {

    }

    componentDidMount() {
        //this.props.getRestaurantList();
    }

    onNumberEditHandle = (mobile) => {
        this.setState({ mobile: mobile })

    }
    onUsernameEditHandle = (name) => {
        this.setState({ name: name })

    }
    onUserEmailEditHandle = (email) => {
        this.setState({ email: email })

    }

    onSubmit(e, mobile, name, email) {
        console.log(mobile);
        this.props.userSignup(mobile);

        this.props.navigation.navigate("OtpScreen", { number: mobile, name: name, email: email });

    }


    render() {
        const { isLoading } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: Colors.white }}>
                <View style={styles.container}>
                    <ScrollView
                        style={{ backgroundColor: Colors.white }}
                        contentContainerStyle={styles.container}>

                        <View style={styles.subContain}>
                            <View style={styles.loginForm}>

                                <View style={styles.inputWrap}>
                                    <Icon
                                        name={"user-o"}
                                        size={20}
                                        color={Colors.primary}
                                    />
                                    <TextInput
                                        placeholder={"Enter Your Name"}
                                        keyboardType='name-phone-pad'
                                        onChangeText={(name) => this.onUsernameEditHandle(name)}
                                        value={this.state.name}
                                        style={{
                                            height: 50,
                                            borderRadius: 5,
                                        }}
                                    />
                                </View>
                                <View style={styles.inputWrap}>
                                    <Icon
                                        name={"envelope"}
                                        size={20}
                                        color={Colors.primary}
                                    />
                                    <TextInput
                                        placeholder={"Enter Your Email"}
                                        keyboardType='email-address'
                                        onChangeText={(email) => this.onUserEmailEditHandle(email)}
                                        value={this.state.email}
                                        style={{
                                            height: 50,
                                            borderRadius: 5,
                                        }}
                                    />
                                </View>
                                <View style={styles.inputWrap}>
                                    <Icon
                                        name={"phone"}
                                        size={20}
                                        color={Colors.primary}
                                    />
                                    <TextInput
                                        placeholder={"Enter Mobile No"}
                                        keyboardType="numeric"
                                        onChangeText={(mobile) => this.onNumberEditHandle(mobile)}
                                        value={this.state.mobile}
                                        style={{
                                            height: 50,
                                            borderRadius: 5,
                                        }}
                                    />
                                </View>

                            </View>

                            <TouchableOpacity
                                onPress={(e) => { this.onSubmit(e, this.state.mobile, this.state.name, this.state.email) }}
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

                                <Text style={{ color: Colors.white }}>Submit</Text>

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
        userSignup: (value) => dispatch(userSignup(value))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegistrationScreen);

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
