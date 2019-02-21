
import React, { PureComponent } from "react";
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ripple from 'react-native-material-ripple';
import Styles from '../Containers/Styles';
import styleSheet from './Styles';
import { Colors, Images, Constants } from "../Themes";


class FeatureCard extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const { image, title, price, style, imageStyle, onPress } = this.props;
        //console.log("FeatureCard  -", image)
        return (
            <Ripple onPress={onPress}>
                <View style={[Styles.cardStyle]} >
                    <View style={[styleSheet.cardSectionContainer, style]} >
                        {image ?
                            <Image source={{ uri: image ? image : Images.burdon }} style={imageStyle} resizeMode='stretch' />
                            : <Image source={Images.burdon} style={imageStyle} resizeMode='stretch' />
                        }
                        <Icon name='heart' size={25} color={Colors.lightgrey} style={Styles.favIcon} />
                        <Text style={Styles.bookName}>{title}</Text>
                        <Text style={{ textAlign: 'left', fontWeight: 'bold' }}>{Constants.rupee}{price}</Text>
                    </View>
                </View>
            </Ripple>
        );
    };
}

FeatureCard.defualtProps = {
    longCardRequired: false,
    style: {
    }
}

export default FeatureCard;
