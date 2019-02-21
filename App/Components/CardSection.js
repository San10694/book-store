
import React from 'react';
import { View } from 'react-native';
import Styles from "./Styles";

const CardSection = ({ children, onPress, style }) => {
    const { cardSectionContainer } = Styles;

    return (
        <View style={[cardSectionContainer, style]}>
            {children}
        </View>
    );
};


export { CardSection };