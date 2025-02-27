import React, { Component } from "react";
import { TouchableOpacity, ScrollView, StyleSheet, TextInput, Text, View } from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import { getRestaurantList } from "../Redux/ListRedux";
import { Colors } from "../Themes";



class LoginScreen extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {

    }

    componentDidMount() {
        //this.props.getRestaurantList();
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
                                        name={"email-outline"}
                                        size={20}
                                        color={Colors.Text}
                                    />
                                    <TextInput
                                        ref={(comp) => (this.username = comp)}
                                        placeholder={"Email"}
                                        keyboardType="email-address"
                                        // onChangeText={this.onUsernameEditHandle}
                                        //onSubmitEditing={this.focusPassword}
                                        returnKeyType="next"
                                        value={"name"}
                                        style={{
                                            height: 40,
                                            borderRadius: 5,
                                        }}
                                    />
                                </View>
                                <View style={styles.inputWrap}>
                                    <Icon
                                        name={"lock-outline"}
                                        size={20}
                                        color={Colors.Text}
                                    />
                                    <TextInput
                                        ref={(comp) => (this.password = comp)}
                                        placeholder={"password"}
                                        //onChangeText={this.onPasswordEditHandle}
                                        secureTextEntry
                                        returnKeyType="go"
                                        value={"123"}
                                    />
                                </View>
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
                                    marginTop: 20,
                                    marginHorizontal: 50
                                }}
                            //onPress={this.onSignUpHandle}
                            >

                                <Text style={styles.highlight}>Login</Text>

                            </TouchableOpacity>
                        </View>

                        {isLoading ? <Spinner mode="overlay" /> : null}
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
)(LoginScreen);

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
        borderBottomWidth: 1,
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
