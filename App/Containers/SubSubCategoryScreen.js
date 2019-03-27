import React, { Component } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { Colors, Images } from "../Themes";
import Styles from './Styles';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getCategories } from "../Redux/ProductRedux";
import { connect } from "react-redux";
import Ripple from 'react-native-material-ripple';
import Api from "../Services";
import { SafeAreaView } from 'react-navigation';

const api = Api.Api();


class SubSubCategoryScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.state.params.title
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            category_sub_group_id: props.navigation.state.params.category_sub_group_id,
            subCategories: []
        }
    }

    componentDidMount() {
        api.getChildCategories(this.state.category_sub_group_id).then(response => {
            const { data } = response ? response.data : []
            this.setState({ subCategories: data })
            // console.log("child--SubCategories - ", response);
        })
    }

    render() {
        const { subCategories } = this.state
        const { categories } = this.props.product
        if (subCategories.length < 1) {
            return (
                <View style={{ flex: 1, paddingTop: 20, alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: Colors.primary }}>There is no any product. </Text>
                </View>
            )
        }
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.lightGrey }}>
                <ScrollView style={{ backgroundColor: Colors.background }}>
                    {subCategories.map((item, index) => {
                        return (
                            <View key={item.id}>
                                <Ripple style={Styles.categoryscnContainer}
                                    onPress={() => {
                                        this.props.navigation.navigate("ProductListScreen", { id: item.id, title: item.name })
                                    }}>

                                    <View style={Styles.categorySubContainer}>
                                        <View style={Styles.categoryIcon}>
                                            <Icon size={40} name={item.icon ? item.icon : 'book'} color={Colors.primary} />
                                        </View>
                                        <Text style={Styles.categoryName}>{item.name}</Text>
                                        <Ionicon size={20} name="ios-arrow-forward" color={Colors.lightgrey}
                                            style={Styles.categoryBackIcon} />
                                    </View>

                                </Ripple>
                            </View>
                        )
                    })
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
)(SubSubCategoryScreen);

