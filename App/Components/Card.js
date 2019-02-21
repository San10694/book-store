
import React from 'react';
import { View } from 'react-native';
import Ripple from 'react-native-material-ripple';

const Card = ({ children, style }) => {
    return (
        <Ripple style={style}>
            {children}
        </Ripple>
    );
};


export { Card };
