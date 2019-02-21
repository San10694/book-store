import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import { getRestaurantList } from "../Redux/ListRedux";
import { Colors, Images } from "../Themes";
import Fonts from '../Themes/Fonts';


const bannerData = [
    { key: 1, title: 'Harry Poter part -1', price: 50, image: Images.burdon },
    { key: 2, title: 'Harry Poter part -2', price: 50, image: Images.burdon }

]


class CartScreen extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {

    }

    componentDidMount() {
        //this.props.getRestaurantList();
    }

    render() {
        return (
            <ScrollView style={{ padding: 20, backgroundColor: Colors.background }}>

                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={{ fontSize: Fonts.size.regular_17, fontWeight: '500' }}>Total Price :</Text>
                    <Text style={{ fontSize: Fonts.size.regular_17, color: Colors.primary, fontWeight: '500' }}>$900.00</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10 }}>
                    <View style={{ flex: .25, width: 70, height: 70, marginTop: 10, marginRight: 5 }}>
                        <Image source={Images.burdon} style={{ width: 70, height: 70 }} />
                    </View>
                    <View style={{ flex: .3 }}>
                        <Text style={{ paddingLeft: 7, fontSize: Fonts.size.regular, paddingTop: 10 }}>hhhhh</Text>
                        <Text style={{ padding: 10, fontSize: Fonts.size.regular, color: Colors.primary, fontWeight: '500' }}>$50.00</Text>

                    </View>
                    <View style={{ flex: .55 }}>
                        <Text>kkk</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = state => {
    const { restaurantList } = state;
    console.log("State in Home Screen- ", restaurantList);
    return {
        restaurantList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getRestaurantList: () => dispatch(getRestaurantList())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.lightGrey
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: Colors.Text,
        marginBottom: 5
    }
});
