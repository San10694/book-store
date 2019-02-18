
import React, { PureComponent } from "react";
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ripple from 'react-native-material-ripple';
import Styles from '../Containers/Styles';
import styleSheet from './Styles';
import { Colors } from "../Themes";


class FeatureCard extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const { image, title, price, style, onPress } = this.props;
        return (
            <Ripple onPress={onPress}>
                <View style={[Styles.cardStyle]} >
                    <View style={[Styles.saleCardsection, style]} >
                        <Image source={image} style={Styles.saleImg} />
                        <Icon name='heart' size={25} color={Colors.lightgrey} style={Styles.favIcon} />
                        <Text style={Styles.bookName}>{title}</Text>
                        <Text>${price}</Text>
                        {/* <Text>$20</Text> */}
                    </View>
                </View>
            </Ripple>
        );
    };
}

FeatureCard.defualtProps = {
    longCardRequired: false,
    style: {
    },

}


export default FeatureCard;

{/* <Card style={Styles.cardStyle}>
    <CardSection style={Styles.saleCardsection}>
        <Image source={require('../Assets/bgImg/burdon.jpg')} style={Styles.saleImg} />
        <Icon name='heart' size={25} color={Colors.lightgrey} style={Styles.favIcon} />

        <Text style={Styles.bookName}>Herry Potter</Text>
        <Text>$20</Text>
        <Text>$20</Text>
    </CardSection>
</Card> */}