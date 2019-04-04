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
import imgArr from "../../img/imgArr";
import lawTopics from "../../txt/lawTopics";
import lifeTopics from "../../txt/lifeTopics";
import readingTopics from "../../txt/readingTopics";

export default class TopicPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: {},
            topicClass: "",
        };
    };

    componentWillMount() {
        let itemSrc;
        switch (this.props.navigation.state.routeName) {
            case "Law":
                itemSrc = lawTopics;
                break;
            case "Life":
                itemSrc = lifeTopics;
                break;
            case "Reading":
                itemSrc = readingTopics;
                break;
        }
        this.setState({topics: itemSrc});
        this.setState({topicClass: this.props.navigation.state.routeName});
    }

    render() {
        return (
            <ScrollView keyboardDismissMode={'on-drag'} showsVerticalScrollIndicator={false}
                        style={{flex: 1}} contentContainerStyle={styles.topicPageView}>
                <FlatList
                    // ItemSeparatorComponent={Platform.OS !== 'android' && ({highlighted}) => (
                    //     <View style={[style.separator, highlighted && {marginLeft: 0}]} />
                    //     )}
                    ListHeaderComponent={<View style={styles.topicListHeaderView}>
                        <Text style={styles.topicListTxt}>话题列表</Text>
                    </View>}
                    style={styles.topicListView}
                    data={this.state.topics}
                    renderItem={({item, index, separators}) => this._createTopicItem(item, index, separators)}
                    ItemSeparatorComponent={this._createSeparator}
                    keyExtractor={this._getKey}
                />
            </ScrollView>
        );
    };

    _createSeparator = () => (<View style={styles.separator}/>);

    _getKey = (item, index) => ("index" + index);

    _createTopicItem = (item, index, separators) => {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={() => this._onTopicClick(item, index)}
                              style={styles.topicTouchView}>
                <View style={styles.topicView}>
                    <Image style={styles.headImg}
                           resizeMode='cover'
                           source={imgArr['headImg' + item.headImg]}/>
                    <View>
                        <Text style={styles.titleTxt}>{item.title}</Text>
                        <Text style={styles.contentTxt}>{item.contentSum + "..."}</Text>
                    </View>
                </View>
                <Text style={styles.responseTxt}>{"最新回复 " + item.responseAccount + ": " + item.response + "..."}</Text>
            </TouchableOpacity>
        );
    };

    _onTopicClick = (item, index) => {
        // console.warn("= " + item.title);
        this.props.navigation.navigate("TopicDetail", {topicItem: item, topicClass: this.state.topicClass});
    }
};

const styles = StyleSheet.create({
    topicPageView: {
        alignItems: 'center'
    },
    topicListView: {
        width: 0.92 * Screen.width
    },
    topicListHeaderView: {
        width: 0.92 * Screen.width,
        height: 0.045 * Screen.height,
        marginTop: 0.01 * Screen.height,
        justifyContent: 'center',
        borderBottomWidth: 1,
    },
    topicListTxt: {
        fontSize: 20,
        color: '#000000'
    },
    topicTouchView: {
        marginBottom: 0.01 * Screen.height,
    },
    topicView: {
        width: 0.92 * Screen.width,
        height: 0.09 * Screen.height,
        marginBottom: 0.01 * Screen.height,
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1
    },
    headImg: {
        height: 0.06 * Screen.height,
        width: 0.06 * Screen.height,
        borderRadius: 0.03 * Screen.height,
        marginLeft: 0.02 * Screen.width,
        marginRight: 0.02 * Screen.width,
    },
    titleTxt: {
        fontSize: 18,
        color: '#000000',
        // borderWidth: 1
    },
    contentTxt: {
        fontSize: 15,
        color: '#777777',
    },
    responseTxt: {
        fontSize: 15,
        color: '#777777',
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd',
    }
});