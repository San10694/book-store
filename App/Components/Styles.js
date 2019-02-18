const React = require('react-native');
import { Platform, StyleSheet } from 'react-native';
import Colors from '../Themes/Colors';
const { Dimensions } = React;


export default {
    // CardSection
    cardSectionContainer: {
        backgroundColor: Colors.background, margin: 10, padding: 10, borderRadius: 8, width: Dimensions.get('screen').width * 0.95
    },

};