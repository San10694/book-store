import React, { Component } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { Colors, Images } from "../Themes";
import Styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { getCategories } from "../Redux/ProductRedux";
import { connect } from 'react-redux';
import Api from "../Services";
import Ripple from "react-native-material-ripple";
import { PrimaryNav } from '../Navigation/AppNavigation';
import { SafeAreaView } from 'react-navigation';

const api = Api.Api();

class CategoryScreen extends Component {



    render() {
        const { categories } = this.props.product
        //console.log("  categories -- ", JSON.stringify(categories));
        if (categories == null) {
            return <View></View>
        }
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.lightGrey }}>

                <ScrollView style={{ backgroundColor: Colors.background }} >
                    {categories ? categories.map((item, index) => {
                        return (
                            <View key={item.id}>
                                <Ripple style={Styles.categoryscnContainer}
                                    onPress={() => {
                                        this.props.navigation.navigate('SubCategoryScreen', { category_group_id: item.id, title: item.name });

                                    }}>

                                    <View style={Styles.categorySubContainer}>
                                        <View style={Styles.categoryIcon}>
                                            <Icon size={40} name={item.icon} color={Colors.primary} />
                                        </View>
                                        <Text style={Styles.categoryName}>{item.name}</Text>
                                        <Ionicon size={20} name="ios-arrow-forward" color={Colors.lightgrey}
                                            style={Styles.categoryBackIcon} />
                                    </View>

                                </Ripple>
                            </View>
                        )
                    }) : null
                    }
                </ScrollView>
            </SafeAreaView>
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
        getCategories: () => dispatch(getCategories()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryScreen);

