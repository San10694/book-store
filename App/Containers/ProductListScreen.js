import React, { Component } from "react";
import { StyleSheet, Text, View, WebView, Dimensions, Image, ScrollView } from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import Ripple from 'react-native-material-ripple';
import { getBannerList, getCategories, getProducts } from "../Redux/ProductRedux";
import Fonts from '../Themes/Fonts';
import Styles from './Styles';
import { Colors, Images } from "../Themes";
import FeatureCard from "../Components/FeatureCard";
import Api from "../Services";


const imageUrl = 'http://vemulate.com/image/'
const api = Api.Api();
class ProductListScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: props.navigation.state.params.id,
            productList: []
        }
    }

    componentDidMount() {
        api.getProductList(this.state.id).then(response => {
            const { data } = response ? response.data : []
            this.setState({ productList: data })
            console.log("Product List - ", data);
        })
    }

    render() {
        const { productList } = this.state;
        const { productDetails } = this.props.product;
        if (productList == null) {
            return <View></View>
        }
        return (
            // <ScrollView style={{ backgroundColor: Colors.lightGrey }}>
            <View style={{
                flexWrap: "wrap",
                flex: 1,
                width: "50%"
            }}>
                <View style={{ flexWrap: "wrap" }}>
                    {
                        productList ? productList.map((item, index) => {
                            return <FeatureCard key={index} image={item.image ? imageUrl + item.image.path : null}
                                title={item.title} price={item.sale_price} style={Styles.productContainer} imageStyle={Styles.productImg} />
                        }) : null
                    }
                </View>
            </View>
            // </ScrollView>
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
