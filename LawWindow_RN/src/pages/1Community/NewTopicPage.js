import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList, ScrollView
} from 'react-native';
import Screen from "../../utils/Screen";
import Theme from "../../utils/Theme";
import imgArr from "../../img/imgArr";
import lawTopics from "../../txt/lawTopics";
import lifeTopics from "../../txt/lifeTopics";
import readingTopics from "../../txt/readingTopics";

export default class TopicPage extends Component {
    static navigationOptions = ({navigation}) => {
        let topicClass;
        switch (navigation.getParam('topicClass')) {
            case "Law":
                topicClass = "法律";
                break;
            case "Life":
                topicClass = "生活";
                break;
            case "Reading":
                topicClass = "读书";
                break;
        }
        return {
            title: '社区 - ' + topicClass + ' 新话题',
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
            <View>

            </View>
        );
    };

    _onTopicPublishClick = () => {
        return;
    };
};

const styles = StyleSheet.create({});