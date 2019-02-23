import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import { getRestaurantList } from "../Redux/ListRedux";
import { Colors, Images } from "../Themes";
import Fonts from '../Themes/Fonts';
import Ripple from "react-native-material-ripple";


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
            <ScrollView style={{ backgroundColor: Colors.background }}>
                <View style={{ borderBottomColor: Colors.lightgrey, borderBottomWidth: 1 }}>
                    <View style={{ padding: 15, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={{ fontSize: Fonts.size.regular_17, fontWeight: '500' }}>Total Price :</Text>
                        <Text style={{ fontSize: Fonts.size.regular_17, color: Colors.primary, fontWeight: '500' }}>$900.00</Text>
                    </View>
                </View>
                <View style={{ borderBottomColor: Colors.lightgrey, borderBottomWidth: 1 }}>
                    <View style={{ padding: 20, flex: 1, flexDirection: 'row', }}>
                        <View style={{
                            flex: .35, width: 85, height: 85, marginRight: 5,
                        }}>
                            <Image source={Images.burdon} style={{
                                width: 85, height: 85, borderWidth: 3,
                                borderColor: Colors.lightGrey
                            }} />
                        </View>
                        <View style={{ flex: .7, position: 'relative' }}>
                            <Text style={{ paddingLeft: 7, fontSize: Fonts.size.medium_15 }}>hhhhh</Text>
                            <Text style={{ padding: 10, fontSize: Fonts.size.medium_15, color: Colors.primary, fontWeight: '600' }}>$50.00</Text>
                            <Ripple><Icon name='trash-o' size={25} color={Colors.lightgrey} style={{ position: 'absolute', top: 0, right: 30 }} /></Ripple>
                        </View>
                        <View style={{ flex: .1 }}>
                            <View style={{ backgroundColor: Colors.lightGrey, alignItems: 'center', width: 25, height: 85, borderColor: Colors.lightgrey, borderWidth: 1, borderRadius: 25 }}>
                                <Ripple><Icon name='caret-up' size={25} color={Colors.lightgrey} /></Ripple>
                                <View style={{ paddingTop: 6, paddingBottom: 6 }}><Text>1</Text></View>
                                <Ripple><Icon name='caret-down' size={25} color={Colors.lightgrey} /></Ripple>
                            </View>
                        </View>
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
