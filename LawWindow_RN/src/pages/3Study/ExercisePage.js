import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    Image,
    TextInput,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import Screen from "../../utils/Screen";
import Theme from "../../utils/Theme"
import books from "../../txt/books";
import imgArr from "../../img/imgArr";

export default class ExercisePage extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: '学习 - 练习',
            headerStyle: {
                height: 0.065 * Screen.height,
            },
        };
    };

    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <View style={{flex: 1}}>

            </View>
        );
    };
}

const styles = StyleSheet.create({

});