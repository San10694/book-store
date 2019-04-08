import React, { Component } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { Colors, Images } from "../Themes";
import Styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { getCategories } from "../Redux/ProductRedux";
import { connect } from "react-redux";
import Ripple from 'react-native-material-ripple';
import Api from "../Services";
import { SafeAreaView } from 'react-navigation';


const api = Api.Api();

class SubCategoryScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.state.params.title
        }
    }



    constructor(props) {
        super(props);

        this.state = {
            category_group_id: props.navigation.state.params.category_group_id,
            subCategories: [],
            isFetching: false
        }
    }

    componentDidMount() {
        this.setState({ isFetching: true })
        api.getSubCategories(this.state.category_group_id).then(response => {
            const { data } = response ? response.data : []
            this.setState({ subCategories: data })
            console.log("get SubCategories - ", data);
            this.setState({ isFetching: false })

        })
    }

    render() {
        const { subCategories, isFetching } = this.state;
        const { categories } = this.props.product
        //console.log("  categories -- ", JSON.stringify(categories));
        if (subCategories.length < 1 && !isFetching) {
            return (
                <View style={{ flex: 1, paddingTop: 20, alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: Colors.primary }}>There is no any product. </Text>
                </View>
            )
        }
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.lightGrey }}>
                <ScrollView style={{ backgroundColor: Colors.background }}>
                    {subCategories ? subCategories.map((item, index) => {
                        return (
                            <View key={item.id}>
                                <Ripple style={Styles.categoryscnContainer} onPress={() => {
                                    this.props.navigation.navigate('SubSubCategoryScreen', { category_sub_group_id: item.id, title: item.name });
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
)(SubCategoryScreen);

