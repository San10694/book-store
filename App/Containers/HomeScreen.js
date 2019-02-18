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
import { Colors } from "../Themes";
import Banner from "../Components/Banner";
import FeatureCard from "../Components/FeatureCard";


const bannerData = [
  { title: 'Harry Poter part -1', price: 50, image: require('../Assets/bgImg/burdon.jpg') },
  { title: 'Harry Poter part -2', price: 50, image: require('../Assets/bgImg/burdon.jpg') },
  { title: 'Harry Poter part -3', price: 50, image: require('../Assets/bgImg/burdon.jpg') },
  { title: 'Harry Poter part -4', price: 50, image: require('../Assets/bgImg/burdon.jpg') }
]

categories = [
  { title: 'Thriller', icon: 'book', color: Colors.blue2 },
  { title: 'Mystry', icon: 'book', color: Colors.green },
  { title: 'Religious', icon: 'book', color: Colors.darkRed },
  { title: 'Western', icon: 'book', color: Colors.blue2 },
  { title: 'Comic', icon: 'book', color: Colors.green },
  { title: 'Thriller', icon: 'book', color: Colors.darkRed },
]

class HomeScreen extends Component {
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
      <ScrollView
        style={{ backgroundColor: Colors.lightGrey }}
      >
        <View style={Styles.dateContainer}>
          <Text style={Styles.normalText}>MONDAY 18 FEB</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {
            bannerData.map((item) => {
              return <Banner image={item.image}
                title={item.title} price={item.price} />
            })
          }
        </ScrollView>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categories.map((item) => {
            return (
              <View>
                <View style={Styles.iconMainContainer}>
                  <View style={Styles.iconContainer}>
                    <Icon name={item.icon} size={40} color={item.color} style={Styles.icon} />
                  </View>
                  <Text style={Styles.iconNm}>{item.title}</Text>
                </View>
              </View>
            )
          })
          }
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
          {/* {
            bannerData.map((item) => {
              return <FeatureCard image={item.image}
                title={item.title} price={item.price} />
            })
          } */}
          <Card style={Styles.cardStyle}>
            <CardSection style={Styles.saleCardsection}>
              <Image source={require('../Assets/bgImg/burdon.jpg')} style={Styles.saleImg} />
              <Icon name='heart' size={25} color={Colors.lightgrey} style={Styles.favIcon} />
              <Text style={Styles.bookName}>Herry Potter</Text>
              <Text>$20</Text>
              {/* <Text>$20</Text> */}
            </CardSection>
          </Card>
          <Card style={Styles.cardStyle}>
            <CardSection style={Styles.saleCardsection}>
              <Image source={require('../Assets/bgImg/burdon.jpg')} style={Styles.saleImg} />
              <Icon name='heart' size={25} color={Colors.lightgrey} style={Styles.favIcon} />

              <Text style={Styles.bookName}>Herry Potter</Text>
              <Text>$20</Text>
              {/* <Text>$20</Text> */}
            </CardSection>
          </Card>
          <Card style={Styles.cardStyle}>
            <CardSection style={Styles.saleCardsection}>
              <Image source={require('../Assets/bgImg/burdon.jpg')} style={Styles.saleImg} />
              <Icon name='heart' size={25} color={Colors.lightgrey} style={Styles.favIcon} />

              <Text style={Styles.bookName}>Herry Potter</Text>
              <Text>$20</Text>
              {/* <Text>$20</Text> */}
            </CardSection>
          </Card>
        </ScrollView>
        <Text style={Styles.headText}>Featured</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

          <Card style={Styles.cardStyle}>
            <CardSection style={Styles.featureContainer}>
              <Image source={require('../Assets/bgImg/burdon.jpg')} style={Styles.featureImg} />
              <Icon name='heart' size={25} color={Colors.lightgrey} style={Styles.favIcon} />

              <Text style={Styles.bookName}>Herry Potter</Text>
              <Text>$20</Text>
              {/* <Text>$20</Text> */}
            </CardSection>
          </Card>
          <Card style={Styles.cardStyle}>
            <CardSection style={Styles.featureContainer}>
              <Image source={require('../Assets/bgImg/burdon.jpg')} style={Styles.featureImg} />
              <Icon name='heart' size={25} color={Colors.lightgrey} style={Styles.favIcon} />

              <Text style={Styles.bookName}>Herry Potter</Text>
              <Text>$20</Text>
              {/* <Text>$20</Text> */}
            </CardSection>
          </Card>
          <Card style={Styles.cardStyle}>
            <CardSection style={Styles.featureContainer}>
              <Image source={require('../Assets/bgImg/burdon.jpg')} style={Styles.featureImg} />
              <Icon name='heart' size={25} color={Colors.lightgrey} style={Styles.favIcon} />

              <Text style={Styles.bookName}>Herry Potter</Text>
              <Text>$20</Text>
              {/* <Text>$20</Text> */}
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
              {/* <Text>$20</Text> */}
            </CardSection>
          </Card>
          <Card style={Styles.cardStyle}>
            <CardSection style={Styles.bookContainer}>
              <Image source={require('../Assets/bgImg/burdon.jpg')} style={Styles.bookConImg} />
              <Icon name='heart' size={25} color={Colors.lightgrey} style={Styles.favIcon} />

              <Text style={Styles.bookName}>Herry Potter</Text>
              <Text>$20</Text>
              {/* <Text>$20</Text> */}
            </CardSection>
          </Card>
          <Card style={Styles.cardStyle}>
            <CardSection style={Styles.bookContainer}>
              <Image source={require('../Assets/bgImg/burdon.jpg')} style={Styles.bookConImg} />
              <Icon name='heart' size={25} color={Colors.lightgrey} style={Styles.favIcon} />

              <Text style={Styles.bookName}>Herry Potter</Text>
              <Text>$20</Text>
              {/* <Text>$20</Text> */}
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
