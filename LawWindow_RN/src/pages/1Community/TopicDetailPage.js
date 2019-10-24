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

export default class TopicDetailPage extends Component {
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
            case "Follow":
                topicClass = "关注";
                break;
        }
        return {
            title: '社区 - ' + topicClass,
            headerStyle: {
                height: 0.065 * Screen.height,
            },
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            topicItem: this.props.navigation.getParam('topicItem'),
        };
    };

    render() {
        return (
            <ScrollView keyboardDismissMode={'on-drag'} showsVerticalScrollIndicator={false}
                        style={{flex: 1}} contentContainerStyle={styles.topicDPView}>
                <View style={styles.topicDetailView}>
                    <Text style={styles.titleTxt}>{this.state.topicItem.title}</Text>
                    <View style={styles.topicTitleView}>
                        <Image style={styles.headImg}
                               resizeMode='cover'
                               source={imgArr['headImg' + this.state.topicItem.headImg]}/>
                        <View>
                            <Text style={styles.authorTxt}>{this.state.topicItem.author}</Text>
                            <Text style={styles.timeTxt}>{this.state.topicItem.time}</Text>
                        </View>
                    </View>
                    <View style={styles.topicContentView}>
                        <Text style={styles.contentTxt}>{this.state.topicItem.content}</Text>
                    </View>
                </View>
                <FlatList
                    // ItemSeparatorComponent={Platform.OS !== 'android' && ({highlighted}) => (
                    //     <View style={[style.separator, highlighted && {marginLeft: 0}]} />
                    //     )}
                    ListHeaderComponent={
                        <View style={styles.rpListHeaderView}>
                            <Text style={styles.rpListTitleTxt}>回复</Text>
                        </View>
                    }
                    style={styles.rpListView}
                    data={this.state.topicItem.response}
                    renderItem={({item, index, separators}) => this._createResponseItem(item, index, separators)}
                    ItemSeparatorComponent={this._createSeparator}
                    keyExtractor={this._getKey}
                />
            </ScrollView>
        );
    };

    _createSeparator = () => (<View style={styles.separator}/>);

    _getKey = (item, index) => ("index" + index);

    _createResponseItem = (item, index, separators) => {
        // console.warn("??");
        return (
            <View style={styles.rpView}>
                <View style={styles.rpTitleView}>
                    <Image style={styles.headImg}
                           resizeMode='cover'
                           source={imgArr['headImg' + item.headImg]}/>
                    <View>
                        <Text style={styles.authorTxt}>{item.author}</Text>
                        <Text style={styles.timeTxt}>{item.time}</Text>
                    </View>
                </View>
                <View style={styles.rpContentView}>
                    <Text style={styles.contentTxt}>{item.content}</Text>
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    topicDPView: {
        width: Screen.width,
        paddingLeft: 0.04 * Screen.width,
        paddingRight: 0.04 * Screen.width,
        alignItems: 'center',
        // borderWidth: 1
        // backgroundColor: Theme.backGroundColor,
    },
    topicDetailView: {
        paddingBottom: 0.01 * Screen.height,
        marginBottom: 0.01 * Screen.height,
        backgroundColor: "#ffffff",
        alignItems:'center'
    },
    topicTitleView: {
        width: 0.92 * Screen.width,
        height: 0.07 * Screen.height,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // borderWidth: 1
    },
    titleTxt: {
        width: 0.92 * Screen.width,
        fontSize: 20,
        color: '#000000',
        marginTop: 0.01 * Screen.height,
        // marginBottom: 0.01 * Screen.height,
        borderBottomWidth: 1,
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
        marginLeft: 0.02 * Screen.width,
        // justifyContent: 'center',
        // borderWidth: 1
    },
    contentTxt: {
        fontSize: 18,
        color: '#000000',
    },
    rpListView: {
        width: 0.92*Screen.width,
        backgroundColor: "#ffffff",
        // borderWidth: 1
    },
    rpListHeaderView: {
        marginTop: 0.01 * Screen.height,
        justifyContent: 'center',
        borderBottomWidth: 1,
    },
    rpListTitleTxt: {
        fontSize: 20,
        color: '#000000'
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd',
    },
    rpView: {
        marginBottom: 0.01 * Screen.height,
        // borderWidth: 1
    },
    rpTitleView: {
        width: 0.92 * Screen.width,
        height: 0.07 * Screen.height,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // borderWidth: 1
    },
    rpContentView: {
        flex:1,
        width: 0.92 * Screen.width,
        marginBottom: 0.01 * Screen.height,
        paddingLeft: 0.02 * Screen.width,
        paddingRight: 0.02 * Screen.width,
    }
});