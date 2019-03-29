import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../Themes';
import Fonts from '../Themes/Fonts';

const { width, height } = Dimensions.get('window');


export default {
    // date container
    dateContainer: {
        padding: 10
    },
    normalText: {
        fontSize: Fonts.size.regular_17,
        fontFamily: Fonts.type.sans_serif_light
    },
    favContainer: {
        position: 'absolute',
        right: 10,
        top: 10
    },
    imgContainer: {
        // width: width * 0.45,
        // height: 100,
        // width: width * 0.95,
        // height: height * 0.30,
        position: 'relative',

    },
    bookImg: {
        width: width * 0.93,
        height: height * 0.285,
        // top: 25,
        // left: 70,
        //position: 'absolute',
        borderRadius: 5,
    },
    priceContainer: { paddingTop: 50 },
    bookName: {
        fontSize: Fonts.size.medium,
        //fontWeight: '700',
        fontFamily: Fonts.type.sans_serif,
        textAlign: 'left'
    },
    priceText: {
        fontSize: Fonts.size.medium,
        fontFamily: Fonts.type.sans_serif
    },
    iconMainContainer: {
        margin: 5,
        width: 90,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    iconContainer: {
        borderRadius: 100,
        width: 60,
        height: 60,
        padding: 10,
        backgroundColor: Colors.background
    },
    icon: { textAlign: 'center' },
    iconNm: {
        color: Colors.green,
        paddingTop: 10,
        textAlign: 'center',
        fontSize: 12
    },
    cardStyle: {
        marginTop: 5,
        marginLeft: 1,
        marginBottom: 5
    },
    advrCardSection: {
        // backgroundColor: 'transparent',
        padding: 0,
        width: width * 0.80,
        borderWidth: 4.0,
        borderRadius: 5,
        borderColor: Colors.background,
    },
    advrImg: {
        position: 'relative',
        borderRadius: 5,
        width: width * 0.78,
        height: 120
    },
    advrContainer: {
        bottom: 17,
        right: 7,
        position: 'absolute',
        flexDirection: 'row',
        paddingRight: 30
    },
    boldText: {
        fontSize: Fonts.size.h6,
        color: Colors.background,
        fontWeight: '600',
        textAlign: 'right',
        paddingRight: 15
    },
    saleCardsection: {
        backgroundColor: Colors.background,
        padding: 5,
        paddingTop: 20,
        width: width * 0.40,
        height: 200,
    },
    saleImg: {
        position: 'relative',
        width: width * 0.37,
        height: 120,
        borderRadius: 5

    },
    favIcon: {
        position: 'absolute',
        top: 5,
        right: 7,
        paddingRight: 5,
        paddingTop: 5
    },
    headText: {
        fontSize: Fonts.size.h6,
        paddingLeft: 20,
        fontWeight: 'bold',
        fontFamily: Fonts.type.sans_serif
    },
    featureContainer: {
        backgroundColor: Colors.background,
        padding: 5,
        width: width * 0.46,
        height: 200,
        paddingTop: 20
    },
    featureImg: {
        position: 'relative',
        width: width * 0.43,
        height: 120,
        borderRadius: 5
    },
    bookContainer: {
        backgroundColor: Colors.background,
        padding: 5,
        width: width * 0.90,
        height: 200,
        paddingTop: 20
    },
    bookConImg: {
        position: 'relative',
        width: width * 0.87,
        height: 120
    },
    categoryContainer: {
        position: 'absolute',
        top: 15,
        left: 10,
        paddingRight: 20,
        paddingTop: 5,
        flexDirection: 'row'
    },
    CategoryCardSection: {
        borderRadius: 10,
        backgroundColor: 'transparent',
        padding: 0,
        width: width
    },
    categoryImg: {
        borderRadius: 10,
        position: 'relative',
        width: width * 0.90,
        height: 140
    },
    categoryCardStyle: { margin: 5 },



    ///category screen
    categoryscnContainer: { borderBottomColor: Colors.primary, borderBottomWidth: .5 },
    categorySubContainer: { flexDirection: 'row', padding: 20, flex: 1 },
    categoryIcon: { width: 40, height: 40, flex: .2 },
    categoryName: { flex: .7, paddingTop: 10, fontWeight: '500' },
    categoryBackIcon: { flex: .1, alignSelf: 'center' },

    productContainer: {
        backgroundColor: Colors.background,
        padding: 5,
        width: width * 0.44,
        height: 200,
        paddingTop: 20
    },
    productImg: {
        position: 'relative',
        width: width * 0.43,
        height: 120,
        borderRadius: 5
    },


    // product detail screen

    productDetailContainer: {
        backgroundColor: Colors.white,
        padding: 10,
        position: 'relative',
        height: height * .88
    },
    productdetailSubContainer: {
        backgroundColor: 'transparent',
        width: width * 0.6,
        position: 'relative',
        alignSelf: 'center',
        marginBottom: 10,
        marginTop: 20,
        borderRadius: 5,
    },
    ProductDetailImg: {
        width: width * 0.65,
        height: height * 0.45,
        borderRadius: 5,
    },
    productDetailFav: { position: 'absolute', top: 6, right: 6 },
    productPriceContainer: { marginTop: 10, alignItems: 'center' },
    productDescription: { margin: 10, alignSelf: 'center' },

    buyButton: {
        width: width * 0.90,
        height: 40,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        alignSelf: 'center'
    },
    detailBottomPriceBtn: {
        width: width * 0.5,
        height: 40,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        // borderRadius: 5,
        alignSelf: 'center',
        borderColor: Colors.lightgrey,
        borderWidth: 1
    },
    detailBottomButton: {
        width: width * 0.5,
        height: 40,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        // borderRadius: 5,
        alignSelf: 'center'
    },
    disableButton: {
        width: width * 0.90,
        height: 40,
        backgroundColor: Colors.primaryLight,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        alignSelf: 'center'
    },
    btnText: { color: Colors.white },
    BuyContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        shadowColor: Colors.lightgrey,
        shadowOffset: {
            width: 2,
            height: 3
        },
        shadowRadius: 3,
        shadowOpacity: 0.5
    },

    checkoutContainer: { flexDirection: 'row', position: 'absolute', bottom: 13, paddingLeft: 15 },
    /// cart page 

    cartContainer: { backgroundColor: Colors.background, position: 'relative' },

    error: {
        color: Colors.error,
        marginTop: -4,
        marginLeft: 10,
    },
    formWrapper: {
        marginBottom: 7,
    },

}