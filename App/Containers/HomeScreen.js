import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, View, Dimensions, Image, ScrollView } from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import { getRestaurantList } from "../Redux/ListRedux";
import Fonts from '../Themes/Fonts';
import { CardSection } from '../Components/CardSection';
import { Card } from '../Components/Card';
import { MenuIcon } from '../Components/MenuIcon';
import Styles from './Styles';
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


  static navigationOptions = {
    header: {
      style: {
        shadowOpacity: 0,
        shadowOffset: {
          height: 0
        },
        shadowRadius: 0
      }
    }
  }

  componentDidMount() {
    //this.props.getRestaurantList();
  }
  render() {
    return (
      <ScrollView>
        <View style={Styles.dateContainer}>
          <Text style={Styles.normalText}>SUNDAY 17 FEB</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Card>
            <CardSection>
              <View style={Styles.favContainer}>
                <Icon name="heart" size={25} color={Colors.lightGrey} />
              </View>
              <View style={Styles.imgContainer}>
                <Image source={require('../Assets/bgImg/burdon.jpg')} style={Styles.bookImg} />
              </View>
              <View style={Styles.priceContainer}>
                <Text style={Styles.bookName}>Herry Potter Part-8</Text>
                <Text style={Styles.priceText}>$20.0</Text>
              </View>
            </CardSection>
          </Card>
          <Card>
            <CardSection>
              <View style={Styles.favContainer}>
                <Icon name="heart" size={25} color={Colors.lightGrey} />
              </View>
              <View style={Styles.imgContainer}>
                <Image source={require('../Assets/bgImg/study.jpg')} style={Styles.bookImg} />
              </View>
              <View style={Styles.priceContainer}>
                <Text style={Styles.bookName}>Herry Potter Part-8</Text>
                <Text style={Styles.priceText}>$20.0</Text>
              </View>
            </CardSection>
          </Card>

        </ScrollView>


        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View>
            <View style={Styles.iconMainContainer}>
              <View style={Styles.iconContainer}>
                <Icon name="mobile" size={40} color={Colors.darkRed} style={Styles.icon} />
              </View>
              <Text style={Styles.iconNm}>mobile</Text>
            </View>
          </View>
          <View>
            <View style={Styles.iconMainContainer}>
              <View style={Styles.iconContainer}>
                <Icon name="mobile" size={40} color={Colors.darkRed} style={Styles.icon} />
              </View>
              <Text style={Styles.iconNm}>mobile</Text>
            </View>
          </View>
          <View>
            <View style={Styles.iconMainContainer}>
              <View style={Styles.iconContainer}>
                <Icon name="mobile" size={40} color={Colors.darkRed} style={Styles.icon} />
              </View>
              <Text style={Styles.iconNm}>mobile</Text>
            </View>
          </View>
          <View>
            <View style={Styles.iconMainContainer}>
              <View style={Styles.iconContainer}>
                <Icon name="mobile" size={40} color={Colors.darkRed} style={Styles.icon} />
              </View>
              <Text style={Styles.iconNm}>mobile</Text>
            </View>
          </View>
          <View>
            <View style={Styles.iconMainContainer}>
              <View style={Styles.iconContainer}>
                <Icon name="mobile" size={40} color={Colors.darkRed} style={Styles.icon} />
              </View>
              <Text style={Styles.iconNm}>mobile</Text>
            </View>
          </View>
          <View>
            <View style={Styles.iconMainContainer}>
              <View style={Styles.iconContainer}>
                <Icon name="mobile" size={40} color={Colors.darkRed} style={Styles.icon} />
              </View>
              <Text style={Styles.iconNm}>mobile</Text>
            </View>
          </View>
        </ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

          <Card style={Styles.cardStyle}>
            <CardSection style={Styles.advrCardSection}>
              <Image source={require('../Assets/bgImg/burdon.jpg')} style={Styles.advrImg} />
              <View style={Styles.advrContainer}>
                <Text style={Styles.boldText}>Shop Now</Text>
                <Icon name='arrow-right' size={25} color={Colors.background} />
              </View>
            </CardSection>
          </Card>
          <Card style={Styles.cardStyle}>
            <CardSection style={Styles.advrCardSection}>
              <Image source={require('../Assets/bgImg/burdon.jpg')} style={Styles.advrImg} />
              <View style={Styles.advrContainer}>
                <Text style={Styles.boldText}>Shop Now</Text>
                <Icon name='arrow-right' size={25} color={Colors.background} />
              </View>
            </CardSection>
          </Card>
        </ScrollView>
        <Text style={Styles.headText}>Sale</Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Card style={Styles.cardStyle}>
            <CardSection style={Styles.saleCardsection}>
              <Image source={require('../Assets/bgImg/burdon.jpg')} style={Styles.saleImg} />
              <Icon name='heart' size={25} color={Colors.lightgrey} style={Styles.favIcon} />

              <Text style={Styles.bookName}>Herry Potter</Text>
              <Text>$20</Text>
              <Text>$20</Text>
            </CardSection>
          </Card>
          <Card style={Styles.cardStyle}>
            <CardSection style={Styles.saleCardsection}>
              <Image source={require('../Assets/bgImg/burdon.jpg')} style={Styles.saleImg} />
              <Icon name='heart' size={25} color={Colors.lightgrey} style={Styles.favIcon} />

              <Text style={Styles.bookName}>Herry Potter</Text>
              <Text>$20</Text>
              <Text>$20</Text>
            </CardSection>
          </Card>
          <Card style={Styles.cardStyle}>
            <CardSection style={Styles.saleCardsection}>
              <Image source={require('../Assets/bgImg/burdon.jpg')} style={Styles.saleImg} />
              <Icon name='heart' size={25} color={Colors.lightgrey} style={Styles.favIcon} />

              <Text style={Styles.bookName}>Herry Potter</Text>
              <Text>$20</Text>
              <Text>$20</Text>
            </CardSection>
          </Card>
        </ScrollView>
        <Text style={Styles.headText}>Features</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

          <Card style={Styles.cardStyle}>
            <CardSection style={Styles.featureContainer}>
              <Image source={require('../Assets/bgImg/burdon.jpg')} style={Styles.featureImg} />
              <Icon name='heart' size={25} color={Colors.lightgrey} style={Styles.favIcon} />

              <Text style={Styles.bookName}>Herry Potter</Text>
              <Text>$20</Text>
              <Text>$20</Text>
            </CardSection>
          </Card>
          <Card style={Styles.cardStyle}>
            <CardSection style={Styles.featureContainer}>
              <Image source={require('../Assets/bgImg/burdon.jpg')} style={Styles.featureImg} />
              <Icon name='heart' size={25} color={Colors.lightgrey} style={Styles.favIcon} />

              <Text style={Styles.bookName}>Herry Potter</Text>
              <Text>$20</Text>
              <Text>$20</Text>
            </CardSection>
          </Card>
          <Card style={Styles.cardStyle}>
            <CardSection style={Styles.featureContainer}>
              <Image source={require('../Assets/bgImg/burdon.jpg')} style={Styles.featureImg} />
              <Icon name='heart' size={25} color={Colors.lightgrey} style={Styles.favIcon} />

              <Text style={Styles.bookName}>Herry Potter</Text>
              <Text>$20</Text>
              <Text>$20</Text>
            </CardSection>
          </Card>
        </ScrollView>
        <Text style={Styles.headText}>Online Books</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

          <Card style={Styles.cardStyle}>
            <CardSection style={Styles.bookContainer}>
              <Image source={require('../Assets/bgImg/burdon.jpg')} style={Styles.bookConImg} />
              <Icon name='heart' size={25} color={Colors.lightgrey} style={Styles.favIcon} />

              <Text style={Styles.bookName}>Herry Potter</Text>
              <Text>$20</Text>
              <Text>$20</Text>
            </CardSection>
          </Card>
          <Card style={Styles.cardStyle}>
            <CardSection style={Styles.bookContainer}>
              <Image source={require('../Assets/bgImg/burdon.jpg')} style={Styles.bookConImg} />
              <Icon name='heart' size={25} color={Colors.lightgrey} style={Styles.favIcon} />

              <Text style={Styles.bookName}>Herry Potter</Text>
              <Text>$20</Text>
              <Text>$20</Text>
            </CardSection>
          </Card>
          <Card style={Styles.cardStyle}>
            <CardSection style={Styles.bookContainer}>
              <Image source={require('../Assets/bgImg/burdon.jpg')} style={Styles.bookConImg} />
              <Icon name='heart' size={25} color={Colors.lightgrey} style={Styles.favIcon} />

              <Text style={Styles.bookName}>Herry Potter</Text>
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
