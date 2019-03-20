import React, { Component } from "react";
import { TouchableOpacity, ScrollView, StyleSheet, Text, View, AsyncStorage } from "react-native";
import { MenuIcon } from '../Components/MenuIcon';
import { DrawerActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ripple from 'react-native-material-ripple';
import { Colors, Fonts } from "../Themes";
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';



class ProfileScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: ''
        }

    }


    render() {
        const { user_data } = this.props.user.user;
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.lightGrey }}>
                <View style={styles.container}>
                    <ScrollView style={{ backgroundColor: Colors.white }}>
                        <View style={styles.userWrapper}>
                            <View style={styles.avatar}>

                                <View>
                                    <Icon name="account-circle-outline" size={90} color={Colors.primary}>
                                    </Icon>
                                </View>
                            </View>
                            <Text style={styles.userName}>
                                {this.props.user.user && user_data ? user_data != null ? user_data.name : null : 'GUEST'}

                            </Text>
                        </View>
                        <View style={{ height: 10, backgroundColor: Colors.lightGrey }}></View>
                        <View style={{ backgroundColor: Colors.white }}>
                            <View style={styles.menuItem}>
                                <Text style={styles.textItem}>Name : {user_data.name}</Text>
                            </View>
                            <View style={styles.menuItem}>
                                <Text style={styles.textItem}>Email : {user_data.email}</Text>
                            </View>
                            <View style={styles.menuItem}>
                                <Text style={styles.textItem}>Mobile No : {user_data.phone}</Text>
                            </View>
                            {/* <View style={styles.menuItem}>
                            <Text style={styles.textItem}>Name : {user_data.name}</Text>
                        </View> */}
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => {
    const { user } = state;
    //console.log("user in Profile Screen- ", JSON.stringify(user));
    return {
        user
    };
};



export default connect(
    mapStateToProps,
    null
)(ProfileScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.lightGrey
    },
    userWrapper: {
        width: '100%',
        alignItems: 'center',
        height: 150,
        marginTop: 20,
        backgroundColor: Colors.white
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 100,
        borderColor: Colors.white,
        borderWidth: 1
    },
    userName: {
        marginTop: 12,
        fontSize: 16,
        fontWeight: 'bold'
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    menuItem: {
        padding: 10,
        paddingLeft: 15,
        borderBottomWidth: 0.5,
        borderColor: "#d6d7da",
        height: 50,
    },
    textItem: {
        fontSize: 16,
        fontWeight: "400",
        color: Colors.charcoal,
        fontFamily: Fonts.type.gotham_medium,
    }
});
