import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, View, ScrollView, Image, FlatList } from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import { getRestaurantList } from "../Redux/ListRedux";
import { Colors, Images, Fonts } from "../Themes";

const bannerData = [
    { key: 1, title: 'Harry Poter part -1', price: 50, image: Images.burdon },
    { key: 2, title: 'Harry Poter part -2', price: 50, image: Images.burdon },
    { key: 3, title: 'Harry Poter part -3', price: 50, image: Images.burdon },
    { key: 4, title: 'Harry Poter part -4', price: 50, image: Images.burdon }
]

class OrderScreen extends Component {
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
            <View>
                <ScrollView style={styles.Container}>
                    <FlatList
                        data={bannerData}
                        renderItem={({ item }) => (
                            <View style={styles.ItemContainer}>
                                <View style={styles.ItemImgContent}>
                                    <View style={styles.ImgWrapper}>
                                        <Image source={item.image} style={styles.Img} />
                                    </View>
                                </View>
                                <View style={styles.ItemContent}>
                                    <Text style={styles.Title}>{item.title}</Text>
                                    <Text style={styles.Price}>${item.price}</Text>
                                    <Text style={styles.Date}>26-02-19
                                </Text>
                                </View>
                                <View style={styles.btnWrap}>
                                    <TouchableOpacity
                                        style={styles.btn}
                                        onPress={() => this.props.navigation.navigate('OrderDetailScreen')}
                                    >
                                        <Text style={styles.btnText}>
                                            View
                                    </Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        )}
                        keyExtractor={(item, index) => item._id}
                    />
                </ScrollView>
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
)(OrderScreen);

const styles = StyleSheet.create({
    Container: {
        padding: 20,
        paddingTop: 6,
        // backgroundColor: Colors.background,
        padding: 5,
    },
    ItemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.white,
        padding: 4,
        borderRadius: 2,
        shadowColor: Colors.lightgrey,
        minHeight: 90,
        marginBottom: 6,
        marginTop: 6,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 1,
        shadowOpacity: 0.5,
    },
    ItemContent: {
        flex: 0.5,
        padding: 4,
        paddingLeft: 12,
    },
    ItemImgContent: {
        flex: 0.3,
    },
    ImgWrapper: {
        height: 90,
        overflow: 'hidden',
    },
    Img: {
        width: '100%',
        height: '100%',
        borderRadius: 2,
    },

    Title: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.blackTextSecondary,
        marginBottom: 6,
    },
    Price: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.primary,
        marginBottom: 4,
    },
    Date: {
        fontSize: 14,
        color: Colors.blackTextSecondary,
        marginBottom: 4,
        paddingRight: 10,
        overflow: 'hidden',
    },
    btnWrap: {
        flex: 0.2,
        paddingTop: 10,
    },
    btn: {
        width: '100%',
        backgroundColor: Colors.primary,
        borderRadius: 1,
        height: 30,
        paddingLeft: 10,
        position: 'relative',
        marginBottom: 4,
    },
    btnText: {
        position: 'absolute',
        top: 5,
        alignSelf: 'center',
        color: Colors.white,
        fontSize: 12,
        fontWeight: '500',
    },
    emptyText: {
        textAlign: 'center',
        fontSize: 18,
    },
    emptyIcon: {
        alignSelf: 'center',
        marginTop: 100,
    },
});
