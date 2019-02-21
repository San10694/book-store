import React, { Component } from "react";
import { Text, View, ScrollView, Image, Dimensions, TouchableOpacity } from "react-native";
import { Colors, Images } from "../Themes";
import Fonts from '../Themes/Fonts';
import Icon from 'react-native-vector-icons/FontAwesome';

detail = { title: 'Harry Poter part -1', price: 50, shopname: 'Student shop', image: Images.burdon, description: 'Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.' }

const { width, height } = Dimensions.get('window');

export default class ProductDetailScreen extends Component {
  render() {
    return (
      <View style={{ backgroundColor: Colors.white, padding: 10 }}>
        <ScrollView>

          <View style={{
            backgroundColor: 'transparent',
            width: width * 0.6,
            position: 'relative',
            alignSelf: 'center',
            marginBottom: 10,
            marginTop: 20,
          }}>
            <Image source={Images.burdon} style={{
              width: width * 0.6,
              height: 140,
            }} />
            <Icon name='heart' size={25} color={Colors.lightGrey} style={{ position: 'absolute', top: 6, right: 10 }} />
          </View>
          <View style={{ marginTop: 10, alignItems: 'center' }}>
            <Text style={{ fontSize: Fonts.size.h6, fontWeight: '600' }}>{detail.title}</Text>
            <Text style={{ fontSize: Fonts.size.input, fontWeight: '400' }}>{detail.shopname}</Text>
            <Text style={{ fontSize: Fonts.size.regular_17, fontWeight: '300' }}>${detail.price}</Text>
          </View>
          <View style={{ margin: 10 }}>
            <Text style={{ textAlign: 'center' }}>{detail.description}</Text>
          </View>
        </ScrollView>
        <View style={{ flexDirection: 'row', flex: 2 }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{
                width: width * 0.45,
                height: 40,
                backgroundColor: Colors.primary,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                alignSelf: 'center'
              }}
            //onPress={this.onSignUpHandle}
            >

              <Text style={{ color: Colors.white }}>Shopping</Text>

            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{
                width: width * 0.45,
                height: 40,
                backgroundColor: Colors.primary,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                alignSelf: 'center'
              }}
            //onPress={this.onSignUpHandle}
            >

              <Text style={{ color: Colors.white }}>Buy Now</Text>

            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

