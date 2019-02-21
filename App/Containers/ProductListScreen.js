import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, View, WebView, Dimensions, Image, ScrollView } from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import Ripple from 'react-native-material-ripple';
import { getRestaurantList } from "../Redux/ListRedux";
import { getBannerList, getCategories, getProducts } from "../Redux/ProductRedux";
import Fonts from '../Themes/Fonts';
import { CardSection } from '../Components/CardSection';
import { Card } from '../Components/Card';
import { MenuIcon } from '../Components/MenuIcon';
import Styles from './Styles';
import { Colors, Images } from "../Themes";
import Banner from "../Components/Banner";
import FeatureCard from "../Components/FeatureCard";



class ProductListScreen extends Component {

    componentDidMount() {
        this.props.getProducts(1)
    }


    render() {
        var date = new Date();
        var currentDate = date.toDateString();
        const { productDetails } = this.props.product
        console.log("  productDetails -- ", JSON.stringify(productDetails));
        if (productDetails == null) {
            return <View></View>
        }
        return (

            <View style={{
                flexWrap: "wrap",
                flex: 1,
                width: "50%"
            }}>
                <View style={{ flexWrap: "wrap" }}>
                    {
                        productDetails ? productDetails.featured.map((item, index) => {
                            return <FeatureCard key={index} image={item.image ? item.image.path + item.image.name : null}
                                title={item.title} price={item.sale_price} style={Styles.productContainer} imageStyle={Styles.productImg} />
                        }) : null
                    }
                </View>
            </View>

        );
    }
}

const mapStateToProps = state => {
    const { product } = state;
    return {
        product
    };
};

const mapDispatchToProps = dispatch => {
    return {

        getProducts: (flag) => dispatch(getProducts(flag)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductListScreen);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: Colors.lightGrey
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10
//   },
//   instructions: {
//     textAlign: "center",
//     color: Colors.Text,
//     marginBottom: 5
//   }
// });
