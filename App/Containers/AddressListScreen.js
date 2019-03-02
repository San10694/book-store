import React from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import { Images, Colors, Fonts } from '../Themes';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './Styles';
import Ripple from "react-native-material-ripple";


const bannerData = [
    { key: 1, title: 'Hari', zip: 890076, state: 'karnataka', city: 'bangalore', mobile: 8976453210 },
    { key: 2, title: 'Hari', zip: 890076, state: 'karnataka', city: 'bangalore', mobile: 8976453210 },
    { key: 3, title: 'Hari', zip: 890076, state: 'karnataka', city: 'bangalore', mobile: 8976453210 },
    { key: 4, title: 'Hari', zip: 890076, state: 'karnataka', city: 'bangalore', mobile: 8976453210 }
]

export default class AddressListScreen extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {

        return (
            <ScrollView>
                <View>

                    <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: Fonts.size.h6, fontWeight: '500' }}>Address List</Text>
                        <TouchableOpacity style={{ backgroundColor: Colors.primary }} onPress={() => this.props.navigation.navigate('AddAddressScreen')}>
                            <Text style={{ padding: 8, fontSize: Fonts.size.medium_15, color: Colors.white }}>Add New Address</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <RadioGroup
                            size={24}
                            thickness={2}
                            color={Colors.primary}
                            highlightColor={Colors.lightgrey}
                        // onSelect={(index, value) =>
                        //     this.selectAddress(index, value, this.props.addressList[index])
                        // }
                        >
                            {bannerData.map((item, index) => {
                                return (
                                    <RadioButton value={item.title} key={item.title}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginBottom: 10 }}>
                                            <View style={{ width: '80%' }}>
                                                <Text>{item.title},</Text>
                                                <Text>{item.city},{item.state},{item.zip},</Text>
                                                <Text>{item.mobile}</Text>

                                            </View>
                                            <View style={{
                                                width: '20%',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                                <TouchableOpacity>
                                                    <Icon name='trash-o' size={25} color={Colors.lightgrey} />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </RadioButton>
                                );
                            })}
                        </RadioGroup>
                    </View>
                </View>
                <View>
                    <Ripple
                        style={Styles.buyButton}
                        onPress={() => this.props.navigation.navigate('AddressListScreen')}
                    >
                        <Text style={Styles.btnText}>Select Address</Text>
                    </Ripple>
                </View>
            </ScrollView>
        );
    }
}

