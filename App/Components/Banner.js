
import React, { PureComponent } from "react";
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ripple from 'react-native-material-ripple';
import Styles from '../Containers/Styles';
import styleSheet from './Styles';
import { Colors } from "../Themes";


class Banner extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const { image, title, price, style, onPress } = this.props;
        return (
            <Ripple onPress={onPress}>
                <View style={[styleSheet.cardSectionContainer]} >
                    <View style={Styles.favContainer}>
                        <Icon name="heart" size={25} color={Colors.lightGrey} />
                    </View>
                    <View style={Styles.imgContainer}>
                        <Image source={image} style={Styles.bookImg} />
                    </View>
                    <View style={Styles.priceContainer}>
                        <Text style={Styles.bookName}>{title}</Text>
                        <Text style={Styles.priceText}>${price}</Text>
                    </View>
                </View>
            </Ripple>
        );
    };
}

Banner.defualtProps = {
    longCardRequired: false,
    style: {

    },

}



export default Banner;
