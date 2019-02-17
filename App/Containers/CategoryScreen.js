import React, { Component } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { Colors } from "../Themes";
import Styles from './Styles';
import { Card } from '../Components/Card';
import { CardSection } from '../Components/CardSection';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class CategoryScreen extends Component {
    render() {
        return (
            <ScrollView>
                <Card style={Styles.categoryCardStyle}>
                    <CardSection style={Styles.CategoryCardSection}>
                        <Image source={require('../Assets/bgImg/category.jpg')} style={Styles.categoryImg} />
                        <View style={Styles.categoryContainer}>
                            <Text style={Styles.boldText}>Science</Text>
                        </View>
                    </CardSection>
                </Card>
                <Card style={Styles.categoryCardStyle}>
                    <CardSection style={Styles.CategoryCardSection}>
                        <Image source={require('../Assets/bgImg/category.jpg')} style={Styles.categoryImg} />
                        <View style={Styles.categoryContainer}>
                            <Text style={Styles.boldText}>History</Text>
                        </View>
                    </CardSection>
                </Card>
                <Card style={Styles.categoryCardStyle}>
                    <CardSection style={Styles.CategoryCardSection}>
                        <Image source={require('../Assets/bgImg/category.jpg')} style={Styles.categoryImg} />
                        <View style={Styles.categoryContainer}>
                            <Text style={Styles.boldText}>Applied Mathmetics</Text>
                        </View>
                    </CardSection>
                </Card>
                <Card style={Styles.categoryCardStyle}>
                    <CardSection style={Styles.CategoryCardSection}>
                        <Image source={require('../Assets/bgImg/category.jpg')} style={Styles.categoryImg} />
                        <View style={Styles.categoryContainer}>
                            <Text style={Styles.boldText}>General Knowledge</Text>
                        </View>
                    </CardSection>
                </Card>
            </ScrollView>
        );
    }
}

