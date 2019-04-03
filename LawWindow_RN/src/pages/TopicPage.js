import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList, ScrollView
} from 'react-native';
import Screen from "../utils/Screen";
import imgArr from "../img/imgArr";
import lawTopics from "../txt/lawTopics";

export default class TopicPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <ScrollView keyboardDismissMode={'on-drag'} showsVerticalScrollIndicator={false}
                        style={styles.topicPageView}>
                <FlatList
                    // ItemSeparatorComponent={Platform.OS !== 'android' && ({highlighted}) => (
                    //     <View style={[style.separator, highlighted && {marginLeft: 0}]} />
                    //     )}
                    ListHeaderComponent={<View style={styles.topicListHeaderView}>
                        <Text style={styles.topicListTxt}>话题列表</Text>
                    </View>}
                    data={lawTopics}
                    renderItem={({item, index, separators}) => this._createIssueItem(item, index, separators)}
                    ItemSeparatorComponent={this._createSeparator}
                    keyExtractor={this._getKey}
                />
            </ScrollView>
        );
    };

    _createSeparator = () => (<View style={styles.separator}/>);

    _getKey = (item, index) => ("index" + index);

    _createIssueItem = (item, index, separators) => {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={() => this._onIssueClick(item, index)}
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
                <Text style={styles.responseTxt}>{"最新回复 "+item.responseAccount+": "+item.response+"..."}</Text>
            </TouchableOpacity>
        );
    };

    _onIssueClick = (item, index) => {
        // console.warn("= " + item.title);
        this.props.navigation.navigate("TopicDetail", {topicItem: item},);
    }
};

const styles = StyleSheet.create({
    topicPageView: {
        flex: 1,
    },
    topicListHeaderView: {
        height: 0.045 * Screen.height,
        marginTop: 0.01 * Screen.height,
        marginLeft: 0.04 * Screen.width,
        marginRight: 0.04 * Screen.width,
        justifyContent: 'center',
        borderBottomWidth: 1,
    },
    topicListTxt: {
        fontSize: 20,
        color: '#000000'
    },
    topicTouchView:{
        marginLeft: 0.04 * Screen.width,
        marginRight: 0.04 * Screen.width,
    },
    topicView: {
        flexDirection: 'row',
        width: 0.92 * Screen.width,
        height: 0.09 * Screen.height,
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