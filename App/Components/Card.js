
import React from 'react';
import { View } from 'react-native';

const Card = ({ children, style }) => {


    return (
        <View style={style}>
            {children}</View>
    );
};


export { Card };
