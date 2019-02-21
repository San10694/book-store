import React, { Component } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { Colors, Images } from "../Themes";
import Styles from './Styles';
import { Card } from '../Components/Card';
import { CardSection } from '../Components/CardSection';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getCategories } from "../Redux/ProductRedux";
import { connect } from 'react-redux';
import Api from "../Services";

const api = Api.Api();

class CategoryScreen extends Component {

    componentDidMount() {
        console.log("CategoryScreen - ");
        api.getCategories().then(res => {
            console.log("getCategories - ", res);
        })
    }


    render() {
        const { categories, isFetching } = this.props.product;
        return (
            <ScrollView>
                {
                    categories ? categories.map((item, index) => {
                        return (
                            <Card key={index} style={Styles.categoryCardStyle}>
                                <CardSection style={Styles.CategoryCardSection}>
                                    <Image source={Images.category} style={Styles.categoryImg} />
                                    {/* <Icon name={item.icon} size={60} color={Colors.green} style={Styles.categoryImg} /> */}
                                    <View style={Styles.categoryContainer}>
                                        <Text style={Styles.boldText}>{item.name}</Text>
                                    </View>
                                </CardSection>
                            </Card>
                        )
                    }) : null
                }
            </ScrollView>
        );
    }
}

const mapStateToProps = state => {
    const { product } = state;
    console.log("State in Home Screen- ", product);
    return {
        product
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getCategories: () => dispatch(getCategories())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryScreen);

