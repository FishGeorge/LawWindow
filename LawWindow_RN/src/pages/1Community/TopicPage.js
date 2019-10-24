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
    constructor(props) {
        super(props);
        this.state = {
            topics: {},
            topicClass: "",
            isAddBtn: true,
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
            case "Follow":
                let tmp = [{
                    "headImg": "1",
                    "author": "George",
                    "time": "10.21 19:02",
                    "title": "公司法务需要具备什么能力？",
                    "content": "实务和理论悬殊还是挺大的，不一定过了法考审合同就严谨，法务和律师的思维方式不一样的。你更多的角色是公司员工，考虑事的角度不一样啊！",
                    "apprNum": 0,
                    "response": []
                }];
                itemSrc = tmp;
                this.setState({isAddBtn: false});
                break;
        }
        this.setState({topics: itemSrc});
        this.setState({topicClass: this.props.navigation.state.routeName});
    }

    render() {
        return (
            <View style={{
                width: Screen.width,
                height: 0.88 * Screen.height - Screen.APPBAR_HEIGHT - Screen.STATUSBAR_HEIGHT
            }}>
                <ScrollView keyboardDismissMode={'on-drag'} showsVerticalScrollIndicator={false}
                            style={{flex: 1}}
                            contentContainerStyle={styles.topicPageView}>
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
                {this._createTopicAddBtn()}
            </View>
        );
    };

    _createSeparator = () => (<View style={styles.separator}/>);

    _getKey = (item, index) => ("index" + index);

    _createTopicItem = (item, index, separators) => {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={() => this._onTopicDetailClick(item, index)}
                              style={styles.topicTouchView}>
                <View style={styles.topicTitleView}>
                    <Image style={styles.headImg}
                           resizeMode='cover'
                           source={imgArr['headImg' + item.headImg]}/>
                    <View>
                        <Text style={styles.authorTxt}>{item.author}</Text>
                        <Text style={styles.timeTxt}>{item.time}</Text>
                    </View>
                </View>
                <View style={styles.topicContentView}>
                    <Text ellipsizeMode={'tail'} numberOfLines={1} style={styles.titleTxt}>{item.title}</Text>
                    <Text ellipsizeMode={'tail'} numberOfLines={2} style={styles.contentTxt}>{item.content}</Text>
                </View>
                <View style={styles.funcBtnView}>
                    <Image style={styles.iconImg}
                           resizeMode='cover'
                           source={require('../../img/icon/share_light.png')}/>
                    <Text style={{
                        fontSize: 15, color: '#000000', marginLeft: 3, marginRight: 5
                    }}>{"分享"}</Text>
                    <Image style={styles.iconImg}
                           resizeMode='cover'
                           source={require('../../img/icon/mark.png')}/>
                    <Text style={[styles.authorTxt, {}]}>{item.response.length}</Text>
                    <Text style={[styles.authorTxt, {
                        position: 'absolute',
                        right: 0.09 * Screen.width
                    }]}>{item.apprNum}</Text>
                    <Image style={[styles.iconImg, {position: 'absolute', right: 0}]}
                           resizeMode='cover'
                           source={require('../../img/icon/appreciate_light.png')}/>
                </View>
                {/*<Text*/}
                {/*    style={styles.responseTxt}>{"最新回复 " + item.response[0].responseAccount + ": " + item.response[0].content + "..."}</Text>*/}
            </TouchableOpacity>
        );
    };

    _createTopicAddBtn = () => {
        return this.state.isAddBtn ? (
            <TouchableOpacity activeOpacity={0.8} onPress={() => this._onTopicAddClick()}
                              style={styles.topicAddBtn}>
                <Image style={styles.addBtnImg} resizeMode='contain'
                       source={require('../../img/icon/plus_white.png')}/>
            </TouchableOpacity>) : <View/>;
    };

    _onTopicAddClick = () => {
        // console.warn("= " + this.state.topicClass);
        this.props.navigation.navigate("NewTopic", {topicClass: this.state.topicClass});
    };

    _onTopicDetailClick = (item, index) => {
        // console.warn("= " + item.title);
        this.props.navigation.navigate("TopicDetail", {topicItem: item, topicClass: this.state.topicClass});
    };
};

const styles = StyleSheet.create({
    topicPageView: {
        alignItems: 'center'
    },
    topicListView: {
        width: Screen.width,
        paddingLeft: 0.04 * Screen.width,
        paddingRight: 0.04 * Screen.width,
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
    topicTitleView: {
        width: 0.92 * Screen.width,
        height: 0.07 * Screen.height,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // borderWidth: 1
    },
    headImg: {
        height: 0.05 * Screen.height,
        width: 0.05 * Screen.height,
        borderRadius: 0.025 * Screen.height,
        marginLeft: 0.02 * Screen.width,
        marginRight: 0.02 * Screen.width,
    },
    authorTxt: {
        fontSize: 15,
        color: '#000000',
        // borderWidth: 1
    },
    timeTxt: {
        fontSize: 15,
        color: '#777777',
    },
    topicContentView: {
        width: 0.92 * Screen.width,
        height: 0.1 * Screen.height,
        marginBottom: 0.01 * Screen.height,
        paddingLeft: 0.02 * Screen.width,
        paddingRight: 0.02 * Screen.width,
        // justifyContent: 'center',
        // borderWidth: 1
    },
    titleTxt: {
        fontSize: 18,
        color: '#000000',
        // borderWidth: 1
    },
    contentTxt: {
        height: 0.1 * Screen.height,
        fontSize: 16,
        color: '#777777',
    },
    funcBtnView: {
        height: 0.02 * Screen.height,
        flexDirection: 'row',
        alignItems: 'center',
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd',
    },
    topicAddBtn: {
        position: 'absolute',
        bottom: 0.04 * Screen.height,
        right: 0.03 * Screen.height,
        height: 0.08 * Screen.height,
        width: 0.08 * Screen.height,
        borderRadius: 0.04 * Screen.height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.themeColor,
    },
    iconImg: {
        height: 0.06 * Screen.width,
        width: 0.06 * Screen.width,
        marginLeft: 0.01 * Screen.width,
        marginRight: 0.01 * Screen.width,
    },
    addBtnImg: {
        height: 0.04 * Screen.height,
        width: 0.04 * Screen.height,
    }
});