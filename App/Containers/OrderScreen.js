import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, View, ScrollView, Image, FlatList } from "react-native";
import { connect } from "react-redux";
import { Colors, Images, Fonts, Constants } from "../Themes";
import Api from "../Services";
import ActivityIndicator from '../Components/ActivityIndicator';
const api = Api.Api();
import Moment from 'moment';


class OrderScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderList: null,
            isFetching: false
        }
    }

    static navigationOptions = {

    }

    componentDidMount() {
        const { user } = this.props;
        if (user && user.user && user.user.user_data) {
            this.setState({ isFetching: true })
            console.log("User Id - ", user.user.user_data.id);
            api.getOrderList(user.user.user_data.id).then(response => {
                const { data } = response ? response.data : []
                console.log("order List response - ", response);
                this.setState({ isFetching: false })
                this.setState({ orderList: data })
            })
        }
    }

    render() {
        const { orderList, isFetching } = this.state;
        //console.log("orderList     ", orderList)
        if (!orderList) {
            return <ActivityIndicator isFetching={isFetching} />
        }
        // if (orderList && orderList.length === 0) {
        //     return (
        //         <View style={{ flex: 1, paddingTop: 20, alignItems: 'center' }}>
        //             <Text style={{ fontSize: 18, fontWeight: '600', color: Colors.primary }}>Orders List is empty </Text>
        //         </View>
        //     )
        // }
        return (
            <View style={{ backgroundColor: Colors.lightGrey }}>
                <ScrollView style={styles.Container}>
                    <FlatList
                        data={orderList}
                        renderItem={({ item }) => (
                            <View key={item.order_id} style={styles.ItemContainer}>
                                {/* <View style={styles.ItemImgContent}>
                                    <View style={styles.ImgWrapper}>
                                        <Image source={Images.burdon} style={styles.Img} />
                                    </View>
                                </View> */}
                                <View style={styles.ItemContent}>
                                    <Text style={styles.Title}>Order Id : {item.order_id}</Text>
                                    <Text style={styles.Date}>Payment Mode : {item.payment_type}</Text>
                                    <Text style={styles.Date}>Order Date : {Moment(item.sale_datetime).format('DD-MMM-YYYY')}
                                    </Text>
                                    <Text style={styles.Date}>Payment Status : {item.payment_status}</Text>
                                    <Text style={styles.Price}>Order Total : {Constants.rupee}{item.grand_total}</Text>

                                </View>
                                <View style={styles.btnWrap}>
                                    <TouchableOpacity
                                        style={styles.btn}
                                        onPress={() => this.props.navigation.navigate('OrderDetailScreen', { id: item.order_id })}
                                    >
                                        <Text style={styles.btnText}>
                                            View
                                    </Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        )}
                        keyExtractor={(item, index) => item.order_id}
                    />
                </ScrollView>
            </View>
        );
    }
}


const mapStateToProps = state => {
    const { user } = state;
    //console.log('User Details', JSON.stringify(state.user.user.user_data));
    return {
        user
    };

};




export default connect(
    mapStateToProps,
    null
)(OrderScreen);

const styles = StyleSheet.create({
    Container: {
        // backgroundColor: Colors.background,
        // padding: 5,
        marginBottom: 12,
        paddingHorizontal: 6,
        paddingVertical: 12
    },
    ItemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.white,
        padding: 4,
        borderRadius: 2,
        shadowColor: Colors.lightgrey,
        minHeight: 100,
        marginBottom: 12,
        //marginTop: 6,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 1,
        shadowOpacity: 0.5,

    },
    ItemContent: {
        flex: 0.7,
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
        right: 10,
        justifyContent: 'center'
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
