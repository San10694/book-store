import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView, Alert, AsyncStorage } from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ripple from 'react-native-material-ripple';
import { incrementCounter } from "../Redux/ListRedux";
import { getBannerList, getCategories, getProducts, savePopupFlag } from "../Redux/ProductRedux";
import Fonts from '../Themes/Fonts';
import { CardSection } from '../Components/CardSection';
import { Card } from '../Components/Card';
import Styles from './Styles';
import { Colors, Images, Constants } from "../Themes";
import Banner from "../Components/Banner";
import FeatureCard from "../Components/FeatureCard";
import ActivityIndicator from "../Components/ActivityIndicator";
import { resetLoader } from "../Redux/UserRedux";
import { SafeAreaView } from 'react-navigation';


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
    this.state = {
      conter: 0
    }
  }


  static navigationOptions = {

  }

  async componentDidMount() {
    const { user } = this.props.user;
    const { showPopup, isCancellClicked } = this.props.product
    this.props.resetLoader();
    this.props.getBannerList();
    this.props.getCategories();
    this.props.getProducts(1);
    user && user.user_data != null ?
      AsyncStorage.setItem('name', user.user_data.name) : null;
    console.log(" showw counter----", this.props.list.counter)
    if (showPopup && !isCancellClicked && this.props.list.counter === 0) {
      console.log(" showw----")
      setTimeout(() => {
        this.showPopup();
        this.setState({ conter: 1 })
        this.props.incrementCounter(1)
      }, 1000)
    }

  }

  showPopup() {
    Alert.alert(
      '',
      'In case If you do not find books on our app, you can raise a request by clicking on request books option on the left side of the sidebar menu.',
      [
        { text: "Don't show again", onPress: () => this.props.savePopupFlag(false) },
        {
          //   text: 'Cancel',
          //   onPress: () => console.log('Cancel Pressed'),
          //   style: 'cancel',
        },
        { text: 'Close', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    );
  }

  onPress(item) {
    this.props.navigation.navigate('ProductDetailScreen', { product_id: item.id })
  }

  limitChar(text, count = 30) {
    return text.slice(0, count) + (text.length > count ? "..." : "");
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
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.lightGrey }}>
        <ScrollView style={{ backgroundColor: Colors.lightGrey }}>
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
                      <Icon name={item.icon} size={35} color={Colors.green} style={Styles.icon} />
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
                        <MaterialCommunityIcon name='arrow-right' size={25} color={Colors.background} />
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
                  title={this.limitChar(item.title)} price={item.sale_price} style={Styles.saleCardsection} imageStyle={Styles.saleImg} />
              }) : null
            }
          </ScrollView>
          <Text style={Styles.headText}>Featured</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
              productDetails ? productDetails.featured.map((item, index) => {
                return <FeatureCard key={index} onPress={() => this.onPress(item)} image={item.image ? Constants.IMAGE_URL + item.image.path : null}
                  title={this.limitChar(item.title)} price={item.sale_price} style={Styles.saleCardsection} imageStyle={Styles.saleImg} />
              }) : null
            }
          </ScrollView>
          <Text style={Styles.headText}>Added Recently</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
              productDetails ? productDetails.online.map((item, index) => {
                //   return <FeatureCard key={index} image={item.image ? Constants.IMAGE_URL + item.image.path : null}
                //     title={item.title} price={item.sale_price} style={Styles.bookContainer} imageStyle={Styles.bookConImg} />
                // }) : null
                return <FeatureCard onPress={() => this.onPress(item)}
                  key={index} image={item.image ? Constants.IMAGE_URL + item.image.path : null}
                  title={this.limitChar(item.title)} price={item.sale_price} style={Styles.saleCardsection} imageStyle={Styles.saleImg} />
              }) : null
            }
          </ScrollView >
        </ScrollView >
      </SafeAreaView>
    );
  }

}


const mapStateToProps = state => {
  const { list, product, user } = state;
  console.log("USER Details- ", user);
  return {
    list,
    product,
    user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBannerList: () => dispatch(getBannerList()),
    getCategories: () => dispatch(getCategories()),
    getProducts: (flag) => dispatch(getProducts(flag)),
    resetLoader: () => dispatch(resetLoader()),
    savePopupFlag: (flag) => dispatch(savePopupFlag(flag)),
    incrementCounter: (count) => dispatch(incrementCounter(count)),

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
