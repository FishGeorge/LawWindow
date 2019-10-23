import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList, ScrollView, TextInput
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
            <View style={styles.newTopicPageView}>
                <View style={styles.inputView}>
                    <TextInput style={styles.txtIp} maxLength={20} placeholder={"主题"}
                               placeholderTextColor={'#777777'}/>
                </View>
                <View style={styles.separator}/>
                <View style={styles.inputView}>
                    <TextInput style={[styles.txtIp]} placeholder={"内容"}
                               placeholderTextColor={'#777777'}/>
                </View>
                <View style={styles.downBarView}>
                    <TouchableOpacity activeOpacity={0.8} onPress={this._onLoginBtnClicked}>
                        <View style={styles.publishBtn}>
                            <Text style={{fontSize: 20, color: Theme.white,}}>{"发 布"}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    _onTopicPublishClick = () => {
        return;
    };
};

const styles = StyleSheet.create({
    newTopicPageView: {
        flex: 1,
        alignItems: 'center',
    },
    inputView: {
        height: 0.09 * Screen.height,
        width: 0.95 * Screen.width,
        flexDirection: 'row',
        alignItems: 'center'
    },
    separator: {
        height: 1,
        width: 0.9 * Screen.width,
        // backgroundColor: '#999999',
        backgroundColor: '#000000'
    },
    txtIp: {
        width: 0.95 * Screen.width,
        paddingLeft: 0.05 * Screen.width,
        fontSize: 18,
        // borderWidth: 1
    },
    downBarView: {
        height: 0.1 * Screen.height,
        width: Screen.width,
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        backgroundColor: Theme.white,
        elevation: 10
    },
    publishBtn: {
        height: 0.08 * Screen.height,
        width: 0.75 * Screen.width,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 0.04 * Screen.height,
        // backgroundColor: '#c8d6e8',
        backgroundColor: Theme.themeColorLight,
        // borderWidth: 1,
    },
});