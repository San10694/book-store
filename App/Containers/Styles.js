const React = require('react-native');

const { Dimensions } = React;

import { Colors } from '../Themes';
import Fonts from '../Themes/Fonts';

export default {
    // date container
    dateContainer: {
        padding: 10
    },
    normalText: { fontSize: Fonts.size.regular_17, fontFamily: Fonts.type.sans_serif_light },
    favContainer: {
        position: 'absolute',
        right: 10,
        top: 10
    },
    imgContainer: {
        width: Dimensions.get('screen').width * 0.45, height: 100,

        position: 'relative'
    },
    bookImg: {
        width: Dimensions.get('screen').width * 0.45, height: 100, top: 45, left: 70, position: 'absolute'
    },
    priceContainer: { paddingTop: 50 },
    bookName: { fontSize: Fonts.size.medium, fontWeight: '600', fontFamily: Fonts.type.sans_serif },
    priceText: { fontSize: Fonts.size.medium, fontFamily: Fonts.type.sans_serif },
    iconMainContainer: { margin: 20 },
    iconContainer: { borderRadius: 100, width: 60, height: 60, padding: 10, backgroundColor: Colors.background },
    icon: { textAlign: 'center' },
    iconNm: { color: Colors.green, paddingTop: 10, paddingLeft: 10 },
    cardStyle: { marginTop: 5, marginLeft: 1, marginBottom: 5 },
    advrCardSection: { backgroundColor: 'transparent', padding: 0, width: Dimensions.get('screen').width * 0.90 },
    advrImg: { position: 'relative', borderWidth: 4.0, borderColor: Colors.background, borderRadius: 5, width: Dimensions.get('screen').width * 0.90, height: 100 },
    advrContainer:
        { bottom: 17, right: 7, position: 'absolute', flexDirection: 'row', paddingRight: 30 },
    boldText: { fontSize: Fonts.size.h6, color: Colors.background, fontWeight: '600', textAlign: 'right', paddingRight: 15 },
    saleCardsection: { backgroundColor: Colors.background, padding: 5, width: Dimensions.get('screen').width * 0.40, height: 200 },
    saleImg: { position: 'relative', width: Dimensions.get('screen').width * 0.37, height: 120 },
    favIcon: { position: 'absolute', top: 5, right: 7, paddingRight: 5, paddingTop: 5 },
    headText: { fontSize: Fonts.size.h6, paddingLeft: 20, fontWeight: 'bold', fontFamily: Fonts.type.sans_serif },
    featureContainer: { backgroundColor: Colors.background, padding: 5, width: Dimensions.get('screen').width * 0.46, height: 200 },
    featureImg: { position: 'relative', width: Dimensions.get('screen').width * 0.43, height: 120 },
    bookContainer: { backgroundColor: Colors.background, padding: 5, width: Dimensions.get('screen').width * 0.90, height: 200 },
    bookConImg: { position: 'relative', width: Dimensions.get('screen').width * 0.87, height: 120 },
    categoryContainer: {
        position: 'absolute',
        top: 15,
        left: 10,
        paddingRight: 20,
        paddingTop: 5,
        flexDirection: 'row'
    },
    CategoryCardSection: { borderRadius: 10, backgroundColor: 'transparent', padding: 0, width: Dimensions.get('screen').width },
    categoryImg: { borderRadius: 10, position: 'relative', width: Dimensions.get('screen').width * 0.91, height: 140 },
    categoryCardStyle: { margin: 5 }
}