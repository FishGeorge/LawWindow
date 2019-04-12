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
                    <View style={styles.authorView}>
                        <Image style={styles.headImg}
                               resizeMode='cover'
                               source={imgArr['headImg' + this.state.topicItem.headImg]}/>
                        <Text style={styles.authorTxt}>{this.state.topicItem.author}</Text>
                        <Text style={styles.timeTxt}>{this.state.topicItem.time}</Text>
                    </View>
                    <Text style={styles.contentTxt}>{this.state.topicItem.contentSum}</Text>
                </View>
                <FlatList
                    // ItemSeparatorComponent={Platform.OS !== 'android' && ({highlighted}) => (
                    //     <View style={[style.separator, highlighted && {marginLeft: 0}]} />
                    //     )}
                    ListHeaderComponent={<View style={styles.rpListHeaderView}>
                        <Text style={styles.rpListTxt}>回复</Text>
                    </View>}
                    style={styles.rpListView}
                    // data={this.state.topics}
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
        // return ();
    };
};

const styles = StyleSheet.create({
    topicDPView: {
        alignItems: 'center',
        backgroundColor: Theme.backGroundColor,
    },
    topicDetailView: {
        width: Screen.width,
        paddingLeft: 0.04 * Screen.width,
        paddingRight: 0.04 * Screen.width,
        paddingBottom: 0.01 * Screen.height,
        marginBottom: 0.01 * Screen.height,
        backgroundColor: "#ffffff",
    },
    titleTxt: {
        fontSize: 19,
        color: '#000000',
        marginTop: 0.01 * Screen.height,
        marginBottom: 0.01 * Screen.height,
    },
    contentTxt: {
        fontSize: 17,
        color: '#777777',
    },
    authorView: {
        paddingBottom: 0.01 * Screen.height,
        marginBottom: 0.01 * Screen.height,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1
    },
    headImg: {
        height: 0.04 * Screen.height,
        width: 0.04 * Screen.height,
        borderRadius: 0.02 * Screen.height,
        marginLeft: 0.01 * Screen.width,
        marginRight: 0.01 * Screen.width,
    },
    authorTxt: {
        fontSize: 15,
        color: '#000000',
    },
    timeTxt: {
        position:'absolute',
        right:10,
    },

    rpListView: {
        width: Screen.width,
        paddingLeft: 0.04 * Screen.width,
        paddingRight: 0.04 * Screen.width,
        backgroundColor: "#ffffff",
    },
    rpListHeaderView: {
        marginTop: 0.01 * Screen.height,
        justifyContent: 'center',
        borderBottomWidth: 1,
    },
    rpListTxt: {
        fontSize: 20,
        color: '#000000'
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd',
    }
});