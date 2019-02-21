import React, { Component } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { Colors, Images } from "../Themes";
import Styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getCategories } from "../Redux/ProductRedux";
import { connect } from "react-redux";
import Ripple from 'react-native-material-ripple';
import Api from "../Services";


const api = Api.Api();

class SubCategoryScreen extends Component {

    // static navigationOptions = ({ navigation }) => {
    //     return {
    //         title : navigation.state.params.title
    //     }
    // }



    constructor(props) {
        super(props);

        this.state = {
            category_group_id: props.navigation.state.params.category_group_id
        }
    }

    componentDidMount() {
        api.getSubCategories(this.state.category_group_id).then(response => {
            const { data } = response ? response.data : []
            this.setState({ subCategories: data })
            console.log("get SubCategories - ", data);
        })
    }

    render() {
        const { subCategories } = this.state
        const { categories } = this.props.product
        //console.log("  categories -- ", JSON.stringify(categories));
        if (subCategories == null) {
            return <View></View>
        }
        return (
            <ScrollView>
                {subCategories.map((item, index) => {
                    return (
                        <View key={item.id}>
                            <Ripple style={Styles.categoryscnContainer} onPress={() => {
                                this.props.navigation.navigate('SubSubCategoryScreen', { category_sub_group_id: item.id, title: item.name });
                            }}>

                                <View style={Styles.categorySubContainer}>
                                    <View style={Styles.categoryIcon}>
                                        <Icon size={40} name={item.icon ? item.icon : ''} color={Colors.primary} />
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

