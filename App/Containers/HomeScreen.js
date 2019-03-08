import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView, AsyncStorage } from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import Ripple from 'react-native-material-ripple';
import { getRestaurantList } from "../Redux/ListRedux";
import { getBannerList, getCategories, getProducts } from "../Redux/ProductRedux";
import Fonts from '../Themes/Fonts';
import { CardSection } from '../Components/CardSection';
import { Card } from '../Components/Card';
import Styles from './Styles';
import { Colors, Images, Constants } from "../Themes";
import Banner from "../Components/Banner";
import FeatureCard from "../Components/FeatureCard";
import ActivityIndicator from "../Components/ActivityIndicator";


const bannerData = [
  { key: 1, title: 'Harry Poter part -1', price: 50, image: Images.burdon },
  { key: 2, title: 'Harry Poter part -2', price: 50, image: Images.burdon },
  { key: 3, title: 'Harry Poter part -3', price: 50, image: Images.burdon },
  { key: 4, title: 'Harry Poter part -4', price: 50, image: Images.burdon }
]

const _categories = [
  { key: 1, title: 'Thriller', icon: 'book', color: Colors.blue2 },
  { key: 2, title: 'Mystry', icon: 'book', color: Colors.green },
  { key: 3, title: 'Religious', icon: 'book', color: Colors.darkRed },
  { key: 4, title: 'Western', icon: 'book', color: Colors.blue2 },
  { key: 5, title: 'Comic', icon: 'book', color: Colors.green },
  { key: 6, title: 'Thriller', icon: 'book', color: Colors.darkRed },
]

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }


  static navigationOptions = {

  }

  componentDidMount() {
    this.props.getBannerList();
    this.props.getCategories();
    this.props.getProducts(1);
    this.props.user.user && this.props.user.user.user_data != null ? AsyncStorage.setItem('name', this.props.user.user.user_data.name) : null;
  }

  onPress(item) {
    this.props.navigation.navigate('ProductDetailScreen', { product_id: item.id })
  }


  render() {
    var date = new Date();
    var currentDate = date.toDateString();
    const { productDetails, banner, categories, isFetching } = this.props.product
    if (isFetching) {
      return (
        <View>
          <ActivityIndicator isFetching={isFetching} />
        </View>
      )
    }
    return (
      <ScrollView
        style={{ backgroundColor: Colors.lightGrey }}
      >
        <View style={Styles.dateContainer}>
          <Text style={Styles.normalText}>{currentDate.toUpperCase()}</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {
            banner ? banner.banners.map((item, index) => {
              return <Banner key={index} image={Constants.IMAGE_URL + item.image_link}
                title={item.title} price={item.price} imageStyle={Styles.bookImg} />
            }) : null
          }
        </ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categories ? categories.map((item, index) => {
            return (
              <View key={item.id}>
                <View style={Styles.iconMainContainer}>
                  <Ripple style={Styles.iconContainer} onPress={() => {
                    this.props.navigation.navigate('SubCategoryScreen', { category_group_id: item.id, title: item.name });
                  }}>
                    <Icon name={item.icon} size={40} color={Colors.green} style={Styles.icon} />
                  </Ripple>
                  <Text numberOfLines={2} style={Styles.iconNm}>{item.name}</Text>
                </View>
              </View>
            )
          }) : null
          }
        </ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {
            banner ? banner.offers.map((item, index) => {
              return (
                <Card key={index} style={Styles.cardStyle}>
                  <CardSection style={Styles.advrCardSection}>
                    <Image source={Images.burdon} style={Styles.advrImg} />
                    <View style={{
                      position: 'absolute',
                      paddingTop: 20,
                      paddingLeft: 60
                    }}>
                      <Text style={styles.offerText}>{item.description}</Text>
                      <Text style={styles.offerText}>Use Code: <Text> {item.code}</Text></Text>
                    </View>
                    <View style={Styles.advrContainer}>
                      <Text style={Styles.boldText}>{item.name}</Text>
                      <Icon name='arrow-right' size={25} color={Colors.background} />

                    </View>
                  </CardSection>
                </Card>
              )
            }) : null
          }

        </ScrollView>
        <Text style={Styles.headText}>Sale</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {
            productDetails ? productDetails.sale.map((item, index) => {
              return <FeatureCard key={index} onPress={() => this.onPress(item)} image={item.image ? Constants.IMAGE_URL + item.image.path : null}
                title={item.title} price={item.sale_price} style={Styles.saleCardsection} imageStyle={Styles.saleImg} />
            }) : null
          }
        </ScrollView>
        <Text style={Styles.headText}>Featured</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {
            productDetails ? productDetails.featured.map((item, index) => {
              return <FeatureCard key={index} onPress={() => this.onPress(item)} image={item.image ? Constants.IMAGE_URL + item.image.path : null}
                title={item.title} price={item.sale_price} style={Styles.featureContainer} imageStyle={Styles.featureImg} />
            }) : null
          }
        </ScrollView>
        <Text style={Styles.headText}>Online Books</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {
            productDetails ? productDetails.online.map((item, index) => {
              //   return <FeatureCard key={index} image={item.image ? Constants.IMAGE_URL + item.image.path : null}
              //     title={item.title} price={item.sale_price} style={Styles.bookContainer} imageStyle={Styles.bookConImg} />
              // }) : null
              return <FeatureCard onPress={() => this.onPress(item)}
                key={index} image={item.image ? Constants.IMAGE_URL + item.image.path : null}
                title={item.title} price={item.sale_price} style={Styles.featureContainer} imageStyle={Styles.featureImg} />
            }) : null
          }
        </ScrollView >
      </ScrollView >
    );
  }

}


const mapStateToProps = state => {
  const { restaurantList, product, user } = state;
  console.log("USER  in Home Screen- ", (user));
  return {
    restaurantList,
    product,
    user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRestaurantList: () => dispatch(getRestaurantList()),
    getBannerList: () => dispatch(getBannerList()),
    getCategories: () => dispatch(getCategories()),
    getProducts: (flag) => dispatch(getProducts(flag)),
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
  offerText: {
    fontSize: Fonts.size.h6,
    color: Colors.background,
  }
});
