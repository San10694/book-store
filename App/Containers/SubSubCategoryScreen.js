import React, { Component } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { Colors, Images } from "../Themes";
import Styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getCategories } from "../Redux/ProductRedux";
import { connect } from "react-redux";
import Ripple from 'react-native-material-ripple';



class SubSubCategoryScreen extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        const { categories } = this.props.product
        console.log("  categories -- ", JSON.stringify(categories));
        if (categories == null) {
            return <View></View>
        }
        return (
            <ScrollView>
                {categories.map((item, index) => {
                    return (
                        <View key={item.id}>
                            <Ripple style={Styles.categoryscnContainer}
                                onPress={() => {
                                    this.props.navigation.navigate("ProductListScreen")
                                }}>

                                <View style={Styles.categorySubContainer}>
                                    <View style={Styles.categoryIcon}>
                                        <Icon size={40} name={item.icon} color={Colors.primary} />
                                    </View>
                                    <Text style={Styles.categoryName}>{item.name}</Text>
                                    <Icon size={20} name="chevron-right" color={Colors.lightgrey} style={Styles.categoryBackIcon} />
                                </View>

                            </Ripple>
                        </View>
                    )
                })
                }
            </ScrollView>
        );
    }
}

const mapStateToProps = state => {
    const { product } = state;
    console.log("State in Category Screen- ", product);
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
)(SubSubCategoryScreen);

