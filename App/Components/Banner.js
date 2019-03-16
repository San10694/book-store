import React, { PureComponent } from "react";
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ripple from 'react-native-material-ripple';
import Styles from '../Containers/Styles';
import { Colors } from "../Themes";

const { width, height } = Dimensions.get('window');

class Banner extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const { image, title, price, style, imageStyle, onPress } = this.props;
        // console.log("image ", image)
        return (
            <Ripple onPress={onPress}>
                <View style={[styleSheet.cardSectionContainer]} >
                    {/* <View style={Styles.favContainer}>
                        <Icon name="heart" size={25} color={Colors.lightGrey} />
                    </View> */}
                    <View style={Styles.imgContainer}>
                        <Image source={{ uri: image }} style={imageStyle} resizeMode='stretch' />
                    </View>
                    {/* <View style={Styles.priceContainer}>
                        <Text style={Styles.bookName}>{title}</Text>
                        <Text style={Styles.priceText}>${price}</Text>
                    </View> */}
                </View>
            </Ripple>
        );
    };
}

Banner.defualtProps = {
    longCardRequired: false,
    style: {

    },
    imageStyle: Styles.bookImg

}



export default Banner;

const styleSheet = StyleSheet.create({
    cardSectionContainer: {
        backgroundColor: Colors.background,
        margin: 10,
        padding: 5,
        borderRadius: 8,
        width: width * 0.95,
        height: height * 0.30,
        shadowOffset: {
            width: 2,
            height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 0.8,
        shadowColor: Colors.lightGrey,
    },
})
