import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import { getRestaurantList } from "../Redux/ListRedux";
import { Colors } from "../Themes";



class WishListScreen extends Component {
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
            <View style={{ flex: 1, backgroundColor: Colors.white }}>
                <View style={styles.container}>
                    <Text style={styles.welcome}>Welcome to WishListScreen !</Text>
                </View>
            </View>
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
)(WishListScreen);

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
