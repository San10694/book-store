import React, { Component } from "react";
import Spinner from 'react-native-loading-spinner-overlay';
import { Colors } from "../Themes";

const ActivityIndicator = ({ isFetching }) => {
    return <Spinner
        visible={isFetching}
        color={Colors.charcoal}
        textContent={'Please wait...'}
        textStyle={{ color: Colors.charcoal }}
    />
}
export default ActivityIndicator;