const React = require('react-native');
import { Platform, StyleSheet, Dimensions } from 'react-native';
import Colors from '../Themes/Colors';
const { width } = Dimensions.get('window');



export default {
    // CardSection
    cardSectionContainer: {
        backgroundColor: Colors.background,
        margin: 10,
        padding: 10,
        borderRadius: 8,
        width: width * 0.95
    },

};