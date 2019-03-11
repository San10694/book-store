import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image, Dimensions, ScrollView } from "react-native";
import { Colors, Images, Fonts } from "../Themes";

export default class AboutScreen extends Component {

  static navigationOptions = {
    title: "About Screen"
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={Images.burdon} style={styles.imageContainer} /></View>

        <View style={{ padding: 20 }}>
          <Text style={styles.title}>About Us</Text>
          <Text style={styles.subTitle}>BOOKSTORE is a design-minded, multi-disciplinary brand offering objects, events, and experiences related to books and reading.</Text>
          <Text style={styles.titleSub}>OUR PHILOSOPHY</Text>
          <Text style={styles.subTitle}>Some people like to read on a screen. Other people need the variety and artistry, the sight, smell, and feel of actual books.They love seeing them on their shelves; they love having shelves for them.</Text>
          <Text style={styles.subTitle}>They love taking them along when they leave the house, and stacking them by their bedsides. They love finding old letters and bookmarks in them. They like remembering where they bought them or who they received them from.

</Text>
          <Text style={styles.subTitle}>They want to read in a way that offers a rich experience, more than the words only: the full offering of a book. They are particular about covers, they want to surround themselves with the poetry of good design.

</Text>
          <Text style={styles.subTitle}>They can't pass a bookstore without going in and getting something, they keep a library card and use it.</Text>
          <Text style={styles.subTitle}>They are allergic to cheap bestsellers; they delight in the out-of-the-way and the rare, the well-made and the hard-to-accomplish. They take care of their books; they  know a book is only theirs until it passes on to someone else. They are good stewards of a timeless object.

</Text>
          <Text style={styles.subTitle}>These are the people we're working for.</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: Dimensions.get('screen').width, height: 200

  },
  title: {
    fontSize: Fonts.size.input,
    fontWeight: '500',
    color: Colors.primary,
    paddingTop: 20, paddingBottom: 10
  },
  titleSub: {
    fontSize: Fonts.size.regular,
    fontWeight: '500',
    color: Colors.primary,
    paddingTop: 20, paddingBottom: 10
  },
  subTitle: { fontSize: Fonts.size.regular, color: Colors.product.Text, textAlign: 'auto', paddingBottom: 5 }
});
