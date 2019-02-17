
import React from 'react';
import { View } from 'react-native';
import Styles from "./Styles";

const CardSection = ({ children, onPress, style }) => {
    const { cardSectionContainer } = Styles;

    return (
        <View style={[cardSectionContainer, style]} onPress={onPress}>
            {children}</View>
    );
};


export { CardSection };