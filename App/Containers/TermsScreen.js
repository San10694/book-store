import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from "../Themes";



class TermsScreen extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {

    }



    render() {
        return (
            <View style={{ flex: 1, backgroundColor: Colors.white }}>
                <View style={styles.container}>
                    <Text style={styles.welcome}>Welcome to TermsScreen !</Text>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        state
    };
};


export default connect(
    mapStateToProps,
    null
)(TermsScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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
    }
});
