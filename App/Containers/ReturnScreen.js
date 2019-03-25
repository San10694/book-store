import React, { Component } from "react";
import { Platform, StyleSheet, WebView, Text, View } from "react-native";
import { Colors } from "../Themes";




export default class ReturnScreen extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <WebView
                    userAgent="Mobile"
                    key={"WebView"}
                    ref="paymentWebview"
                    startInLoadingState={true}
                    source={{ uri: 'http://68.183.94.56/api/request_book' }} />
            </View>
        )
    }
}

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
        color: "#333333",
        marginBottom: 5
    }
});
