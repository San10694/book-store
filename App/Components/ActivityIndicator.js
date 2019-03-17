import React, { Component } from "react";
import { View } from "react-native";
import Spinner from 'react-native-loading-spinner-overlay';
import { Colors } from "../Themes";

const ActivityIndicator = ({ isFetching }) => {
    return (
        <View>
            <Spinner
                visible={isFetching}
                color={Colors.charcoal}
                // textContent={'Please wait...'}
                textStyle={{ color: Colors.charcoal }}
            />
        </View>
    )
}
export default ActivityIndicator;