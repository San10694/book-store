import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, View, Dimensions, Image, ScrollView } from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import { getRestaurantList } from "../Redux/ListRedux";
import Fonts from '../Themes/Fonts';
import { CardSection } from '../Components/CardSection';
import { Card } from '../Components/Card';
import Colors from '../Themes/Colors';
import { MenuIcon } from '../Components/MenuIcon';
import {
  DrawerActions
} from "react-navigation";
import { Colors } from "../Themes";


const myButton = (
  <Icon.Button
    name="facebook"
    backgroundColor="#3b5998"
    onPress={this.loginWithFacebook}
  >
    Login with Facebook
  </Icon.Button>
);
class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }


  static navigationOptions = ({ navigation }) => ({
    header: null,
  });

  componentDidMount() {
    //this.props.getRestaurantList();
  }
  render() {
    return (
      <ScrollView>
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: Fonts.size.regular_17, fontFamily: Fonts.type.sans_serif_light }}>SUNDAY 17 FEB</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Card>
            <CardSection>
              <View style={{
                position: 'absolute',
                right: 10,
                top: 10
              }}>
                <Icon name="heart" size={25} color={Colors.lightGrey} />
              </View>
              <View style={{
                width: Dimensions.get('screen').width * 0.45, height: 100, justifyContent: 'center',
                paddingTop: 45
              }}>
                <Image source={require('../Assets/bgImg/study.jpg')} style={{
                  width: Dimensions.get('screen').width * 0.45, height: 100, alignItems: 'center'
                }} />
              </View>
              <View style={{ paddingTop: 40 }}>
                <Text style={{ fontSize: Fonts.size.medium, fontWeight: '600', fontFamily: Fonts.type.sans_serif }}>Herry Potter Part-8</Text>
                <Text style={{ fontSize: Fonts.size.medium, fontFamily: Fonts.type.sans_serif }}>$20.0</Text>
              </View>
            </CardSection>
          </Card>
          <Card>
            <CardSection>
              <View style={{
                position: 'absolute',
                right: 10,
                top: 10
              }}>
                <Icon name="heart" size={25} color={Colors.lightGrey} />
              </View>
              <View style={{
                width: Dimensions.get('screen').width * 0.45, height: 100, justifyContent: 'center',
                paddingTop: 45
              }}>
                <Image source={require('../Assets/bgImg/study.jpg')} style={{
                  width: Dimensions.get('screen').width * 0.45, height: 100, alignItems: 'center'
                }} />
              </View>
              <View style={{ paddingTop: 30 }}>
                <Text style={{ fontSize: Fonts.size.medium, fontWeight: '600', fontFamily: Fonts.type.sans_serif }}>Herry Potter Part-8</Text>
                <Text style={{ fontSize: Fonts.size.medium, fontFamily: Fonts.type.sans_serif }}>$20.0</Text>
              </View>
            </CardSection>
          </Card>

        </ScrollView>


        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View>
            <View style={{ margin: 20 }}>
              <View style={{ borderRadius: 100, width: 60, height: 60, padding: 10, backgroundColor: Colors.background }}>
                <Icon name="mobile" size={40} color={Colors.darkRed} style={{ textAlign: 'center' }} />
              </View>
              <Text style={{ color: Colors.green, paddingTop: 10, paddingLeft: 10 }}>mobile</Text>
            </View>
          </View>
          <View>
            <View style={{ margin: 20 }}>
              <View style={{ borderRadius: 100, width: 60, height: 60, padding: 10, backgroundColor: Colors.background }}>
                <Icon name="mobile" size={40} color={Colors.darkRed} style={{ textAlign: 'center' }} />
              </View>
              <Text style={{ color: Colors.green, paddingTop: 10, paddingLeft: 10 }}>mobile</Text>
            </View>
          </View>
          <View>
            <View style={{ margin: 20, }}>
              <View style={{ borderRadius: 100, width: 60, height: 60, padding: 10, backgroundColor: Colors.background }}>
                <Icon name="mobile" size={40} color={Colors.darkRed} style={{ textAlign: 'center' }} />
              </View>
              <Text style={{ color: Colors.green, paddingTop: 10, paddingLeft: 10 }}>mobile</Text>
            </View>
          </View>
          <View>
            <View style={{ margin: 20, }}>
              <View style={{ borderRadius: 100, width: 60, height: 60, padding: 10, backgroundColor: Colors.background }}>
                <Icon name="mobile" size={40} color={Colors.darkRed} style={{ textAlign: 'center' }} />
              </View>
              <Text style={{ color: Colors.green, paddingTop: 10, paddingLeft: 10 }}>mobile</Text>
            </View>
          </View>
          <View>
            <View style={{ margin: 20 }}>
              <View style={{ borderRadius: 100, width: 60, height: 60, padding: 10, backgroundColor: Colors.background }}>
                <Icon name="mobile" size={40} color={Colors.darkRed} style={{ textAlign: 'center' }} />
              </View>
              <Text style={{ color: Colors.green, paddingTop: 10, paddingLeft: 10 }}>mobile</Text>
            </View>
          </View>
          <View>
            <View style={{ margin: 20 }}>
              <View style={{ borderRadius: 100, width: 60, height: 60, padding: 10, backgroundColor: Colors.background }}>
                <Icon name="mobile" size={40} color={Colors.darkRed} style={{ textAlign: 'center' }} />
              </View>
              <Text style={{ color: Colors.green, paddingTop: 10, paddingLeft: 10 }}>mobile</Text>
            </View>
          </View>
        </ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

          <Card style={{ marginTop: 5, marginLeft: 1, marginBottom: 5 }}>
            <CardSection style={{ backgroundColor: 'transparent', padding: 0, width: Dimensions.get('screen').width * 0.90 }}>
              <Image source={require('../Assets/bgImg/burdon.jpg')} style={{ position: 'relative', borderWidth: 4.0, borderColor: Colors.background, borderRadius: 5, width: Dimensions.get('screen').width * 0.90, height: 100 }} />
              <View style={{ bottom: 17, right: 7, position: 'absolute', flexDirection: 'row', paddingRight: 30 }}>
                <Text style={{ fontSize: Fonts.size.h6, color: Colors.background, fontWeight: '600', textAlign: 'right', paddingRight: 15 }}>Shop Now</Text>
                <Icon name='arrow-right' size={25} color={Colors.background} />
              </View>
            </CardSection>
          </Card>
          <Card style={{ marginTop: 5, marginLeft: 1, marginBottom: 5 }}>
            <CardSection style={{ backgroundColor: 'transparent', padding: 0, width: Dimensions.get('screen').width * 0.90 }}>
              <Image source={require('../Assets/bgImg/burdon.jpg')} style={{ position: 'relative', borderWidth: 4.0, borderColor: Colors.background, borderRadius: 5, width: Dimensions.get('screen').width * 0.90, height: 100 }} />
              <View style={{ bottom: 17, right: 7, position: 'absolute', flexDirection: 'row', paddingRight: 30 }}>
                <Text style={{ fontSize: Fonts.size.h6, color: Colors.background, fontWeight: '600', textAlign: 'right', paddingRight: 15 }}>Shop Now</Text>
                <Icon name='arrow-right' size={25} color={Colors.background} />
              </View>
            </CardSection>
          </Card>
        </ScrollView>
        <Text style={{ fontSize: Fonts.size.h6, paddingLeft: 20 }}>Sale</Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Card style={{ marginTop: 5, marginLeft: 1, marginBottom: 5 }}>
            <CardSection style={{ backgroundColor: Colors.background, padding: 5, width: Dimensions.get('screen').width * 0.40, height: 200 }}>
              <Image source={require('../Assets/bgImg/burdon.jpg')} style={{ position: 'relative', width: Dimensions.get('screen').width * 0.37, height: 120 }} />
              <Icon name='heart' size={25} color={Colors.lightgrey} style={{ position: 'absolute', top: 5, right: 7, paddingRight: 5, paddingTop: 5 }} />

              <Text style={{ fontSize: Fonts.size.regular_17, fontWeight: '600', }}>Herry Potter</Text>
              <Text>$20</Text>
              <Text>$20</Text>
            </CardSection>
          </Card>
          <Card style={{ marginTop: 5, marginLeft: 1, marginBottom: 5 }}>
            <CardSection style={{ backgroundColor: Colors.background, padding: 5, width: Dimensions.get('screen').width * 0.40, height: 200 }}>
              <Image source={require('../Assets/bgImg/burdon.jpg')} style={{ position: 'relative', width: Dimensions.get('screen').width * 0.37, height: 120 }} />
              <Icon name='heart' size={25} color={Colors.lightgrey} style={{ position: 'absolute', top: 5, right: 7, paddingRight: 5, paddingTop: 5 }} />

              <Text style={{ fontSize: Fonts.size.regular_17, fontWeight: '600', }}>Herry Potter</Text>
              <Text>$20</Text>
              <Text>$20</Text>
            </CardSection>
          </Card>
          <Card style={{ marginTop: 5, marginLeft: 1, marginBottom: 5 }}>
            <CardSection style={{ backgroundColor: Colors.background, padding: 5, width: Dimensions.get('screen').width * 0.40, height: 200 }}>
              <Image source={require('../Assets/bgImg/burdon.jpg')} style={{ position: 'relative', width: Dimensions.get('screen').width * 0.37, height: 120 }} />
              <Icon name='heart' size={25} color={Colors.lightgrey} style={{ position: 'absolute', top: 5, right: 7, paddingRight: 5, paddingTop: 5 }} />

              <Text style={{ fontSize: Fonts.size.regular_17, fontWeight: '600', }}>Herry Potter</Text>
              <Text>$20</Text>
              <Text>$20</Text>
            </CardSection>
          </Card>
        </ScrollView>
        <Text style={{ fontSize: Fonts.size.h6, paddingLeft: 20 }}>Features</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

          <Card style={{ marginTop: 5, marginLeft: 1, marginBottom: 5 }}>
            <CardSection style={{ backgroundColor: Colors.background, padding: 5, width: Dimensions.get('screen').width * 0.46, height: 200 }}>
              <Image source={require('../Assets/bgImg/burdon.jpg')} style={{ position: 'relative', width: Dimensions.get('screen').width * 0.43, height: 120 }} />
              <Icon name='heart' size={25} color={Colors.lightgrey} style={{ position: 'absolute', top: 5, right: 7, paddingRight: 5, paddingTop: 5 }} />

              <Text style={{ fontSize: Fonts.size.regular_17, fontWeight: '600', }}>Herry Potter</Text>
              <Text>$20</Text>
              <Text>$20</Text>
            </CardSection>
          </Card>
          <Card style={{ marginTop: 5, marginLeft: 1, marginBottom: 5 }}>
            <CardSection style={{ backgroundColor: Colors.background, padding: 5, width: Dimensions.get('screen').width * 0.46, height: 200 }}>
              <Image source={require('../Assets/bgImg/burdon.jpg')} style={{ position: 'relative', width: Dimensions.get('screen').width * 0.43, height: 120 }} />
              <Icon name='heart' size={25} color={Colors.lightgrey} style={{ position: 'absolute', top: 5, right: 7, paddingRight: 5, paddingTop: 5 }} />

              <Text style={{ fontSize: Fonts.size.regular_17, fontWeight: '600', }}>Herry Potter</Text>
              <Text>$20</Text>
              <Text>$20</Text>
            </CardSection>
          </Card>
          <Card style={{ marginTop: 5, marginLeft: 1, marginBottom: 5 }}>
            <CardSection style={{ backgroundColor: Colors.background, padding: 5, width: Dimensions.get('screen').width * 0.46, height: 200 }}>
              <Image source={require('../Assets/bgImg/burdon.jpg')} style={{ position: 'relative', width: Dimensions.get('screen').width * 0.43, height: 120 }} />
              <Icon name='heart' size={25} color={Colors.lightgrey} style={{ position: 'absolute', top: 5, right: 7, paddingRight: 5, paddingTop: 5 }} />

              <Text style={{ fontSize: Fonts.size.regular_17, fontWeight: '600', }}>Herry Potter</Text>
              <Text>$20</Text>
              <Text>$20</Text>
            </CardSection>
          </Card>
        </ScrollView>
        <Text style={{ fontSize: Fonts.size.h6, paddingLeft: 20 }}>Online Books</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

          <Card style={{ marginTop: 5, marginLeft: 1, marginBottom: 5 }}>
            <CardSection style={{ backgroundColor: Colors.background, padding: 5, width: Dimensions.get('screen').width * 0.90, height: 200 }}>
              <Image source={require('../Assets/bgImg/burdon.jpg')} style={{ position: 'relative', width: Dimensions.get('screen').width * 0.87, height: 120 }} />
              <Icon name='heart' size={25} color={Colors.lightgrey} style={{ position: 'absolute', top: 5, right: 7, paddingRight: 5, paddingTop: 5 }} />

              <Text style={{ fontSize: Fonts.size.regular_17, fontWeight: '600', }}>Herry Potter</Text>
              <Text>$20</Text>
              <Text>$20</Text>
            </CardSection>
          </Card>
          <Card style={{ marginTop: 5, marginLeft: 1, marginBottom: 5 }}>
            <CardSection style={{ backgroundColor: Colors.background, padding: 5, width: Dimensions.get('screen').width * 0.90, height: 200 }}>
              <Image source={require('../Assets/bgImg/burdon.jpg')} style={{ position: 'relative', width: Dimensions.get('screen').width * 0.87, height: 120 }} />
              <Icon name='heart' size={25} color={Colors.lightgrey} style={{ position: 'absolute', top: 5, right: 7, paddingRight: 5, paddingTop: 5 }} />

              <Text style={{ fontSize: Fonts.size.regular_17, fontWeight: '600', }}>Herry Potter</Text>
              <Text>$20</Text>
              <Text>$20</Text>
            </CardSection>
          </Card>
          <Card style={{ marginTop: 5, marginLeft: 5, marginBottom: 5 }}>
            <CardSection style={{ backgroundColor: Colors.background, padding: 5, width: Dimensions.get('screen').width * 0.90, height: 200 }}>
              <Image source={require('../Assets/bgImg/burdon.jpg')} style={{ position: 'relative', width: Dimensions.get('screen').width * 0.87, height: 120 }} />
              <Icon name='heart' size={25} color={Colors.lightgrey} style={{ position: 'absolute', top: 5, right: 7, paddingRight: 5, paddingTop: 5 }} />

              <Text style={{ fontSize: Fonts.size.regular_17, fontWeight: '600', }}>Herry Potter</Text>
              <Text>$20</Text>
              <Text>$20</Text>
            </CardSection>
          </Card>
        </ScrollView >
      </ScrollView >
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
)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white
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
