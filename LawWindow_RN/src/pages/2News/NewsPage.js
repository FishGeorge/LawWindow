import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    ScrollView,
    FlatList,
    TouchableHighlight,
    TouchableOpacity,
    Animated,
    Easing,
} from 'react-native';
import Screen from "../../utils/Screen";
import Theme from "../../utils/Theme";
import Swiper from "react-native-swiper";
import imgArr from "../../img/imgArr";
import newSwiper from "../../txt/newsSwiper";
import columnArticle from "../../txt/columnArticle";
import hotIssues from "../../txt/hotIssues";
import quotes from "../../txt/quotes";

export default class NewsPage extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerStyle: {
                height: 0.065 * Screen.height,
            },
            headerLeft: (<TextInput style={styles.searchInput}/>),
            headerRight: (
                <Image
                    style={styles.searchBtn}
                    resizeMode='contain'
                    source={require('../../img/icon/search_light.png')}
                />
            ),
        };
    };

    constructor(props) {
        super(props);
        this.refreshBtnSpinVal = new Animated.Value(0);
        this.state = {
            quote: "    " + quotes[new Date().getDay() - 1].content,
            quoteSrc: "——" + quotes[new Date().getDay() - 1].source
        }
    };

    render() {
        return (
            <ScrollView keyboardDismissMode={'on-drag'} showsVerticalScrollIndicator={false}
                        style={styles.newsPageView}>
                <View style={styles.swiperBox}>
                    <Swiper autoplay={true} showsButtons={false} dot={this._createDot()}
                            activeDot={this._createActiveDot()}>
                        {this._createSwiperContent()}
                    </Swiper>
                </View>
                <View style={styles.quoteView}>
                    <View style={styles.quoteTitleView}>
                        <Text style={styles.dateTxt}>{this._getDate()}</Text>
                        <TouchableOpacity activeOpacity={1} onPress={() => this._onRefreshClick()}>
                            <Animated.Image style={[styles.refreshImg, {
                                transform: [{
                                    rotate: this.refreshBtnSpinVal.interpolate({
                                        inputRange: [0, 1],//输入值
                                        outputRange: ["0deg", "360deg"] //输出值
                                    })
                                }]
                            }]}
                                            resizeMode='contain'
                                            source={require('../../img/icon/refresh.png')}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.quoteTxt}>{this.state.quote}</Text>
                    <View style={styles.quoteSourceView}>
                        <Text style={styles.quoteSourceTxt}>{this.state.quoteSrc}</Text>
                    </View>
                </View>
                <FlatList
                    // ItemSeparatorComponent={Platform.OS !== 'android' && ({highlighted}) => (
                    //     <View style={[style.separator, highlighted && {marginLeft: 0}]} />
                    //     )}
                    ListHeaderComponent={<View style={styles.flView}>
                        <Text style={styles.flTitleTxt}>专栏订阅</Text>
                    </View>}
                    data={columnArticle}
                    renderItem={({item, index, separators}) => this._createArticleItem(item, index, separators)}
                    ItemSeparatorComponent={this._createSeparator}
                    keyExtractor={this._getKey}
                />
                <FlatList
                    // ItemSeparatorComponent={Platform.OS !== 'android' && ({highlighted}) => (
                    //     <View style={[style.separator, highlighted && {marginLeft: 0}]} />
                    //     )}
                    ListHeaderComponent={<View style={styles.flView}>
                        <Text style={styles.flTitleTxt}>热点追踪</Text>
                    </View>}
                    data={hotIssues}
                    renderItem={({item, index, separators}) => this._createIssueItem(item, index, separators)}
                    ItemSeparatorComponent={this._createSeparator}
                    keyExtractor={this._getKey}
                />
            </ScrollView>
        );
    };

    _createSwiperContent = () => {
        let content = [];
        for (let i = 0; i < 3; i++)
            content.push(
                <View key={i + 1} style={styles.swiperSlide}>
                    <Image style={styles.swiperImg}
                           resizeMode='cover'
                           source={imgArr['swiper' + newSwiper[i].img]}/>
                    <Text style={styles.swiperTxt}>{newSwiper[i].title}</Text>
                </View>
            );
        return content;
    };

    _createDot = function () {
        return (
            <View style={styles.dot}/>
        );
    };

    _createActiveDot = () => {
        return (
            <View style={[styles.dot, styles.activeDot]}/>
        );
    };

    _getDate = () => {
        let date = new Date();
        let weekDay = '';
        switch (date.getDay()) {
            case 1:
                weekDay = '一';
                break;
            case 2:
                weekDay = '二';
                break;
            case 3:
                weekDay = '三';
                break;
            case 4:
                weekDay = '四';
                break;
            case 5:
                weekDay = '五';
                break;
            case 6:
                weekDay = '六';
                break;
            case 7:
                weekDay = '日';
                break;
        }
        return "今天是 " + (date.getMonth() + 1) + "月" + date.getDate() + "日 星期" + weekDay;
    };

    _createSeparator = () => (<View style={styles.separator}/>);

    _getKey = (item, index) => ("index" + index);

    _createArticleItem = (item, index, separators) => {
        // console.warn(index);
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={() => this._onIssueClick(item, index)}>
                <View style={styles.issue}>
                    <Image style={styles.issueImg}
                           resizeMode='cover'
                           source={imgArr['hotIssue' + item.img]}/>
                    <Text style={styles.issueTxt}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    _createIssueItem = (item, index, separators) => {
        // console.warn(index);
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={() => this._onIssueClick(item, index)}>
                <View style={styles.issue}>
                    <Image style={styles.issueImg}
                           resizeMode='cover'
                           source={imgArr['hotIssue' + item.img]}/>
                    <Text style={styles.issueTxt}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    _onIssueClick = (item, index) => {
        // console.warn("= " + item.title);
        this.props.navigation.navigate("IssueDetail", {issueItem: item},);
    };

    _onRefreshClick = () => {
        // console.warn(this.refreshBtnSpinVal);
        this.refreshBtnSpinVal.setValue(0);
        Animated.timing(this.refreshBtnSpinVal, {
            toValue: 1, // 最终值 为1，这里表示最大旋转 360度
            duration: 500,
            easing: Easing.linear
        }).start();
        //更换
        let i = parseInt(Math.random() * 7);
        this.setState({
            quote: "    " + quotes[i].content,
            quoteSrc: "——" + quotes[i].source
        });
    };
}

const styles = StyleSheet.create({
    searchInput: {
        height: 0.055 * Screen.height,
        width: 0.75 * Screen.width,
        marginLeft: 0.05 * Screen.width,
        backgroundColor: '#ededed',
        borderRadius: 7.5
    },
    searchBtn: {
        height: 0.04 * Screen.height,
        width: 0.2 * Screen.width,
        // tintColor: '#b9b9b9',
        tintColor: '#000000',
    },
    newsPageView: {
        flex: 1,
    },
    swiperBox: {
        width: 1 * Screen.width,
        height: 0.26 * Screen.height,
    },
    swiperSlide: {
        width: 1 * Screen.width,
        height: 0.26 * Screen.height,
        // justifyContent: 'center',
        // alignItems:'center',
    },
    swiperImg: {
        width: 1 * Screen.width,
        height: 0.26 * Screen.height,
    },
    swiperTxt: {
        position: 'absolute',
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
        paddingLeft: 0.04 * Screen.width,
        paddingRight: 0.04 * Screen.width,
        bottom: 0.01 * Screen.height,
    },
    dot: {
        backgroundColor: '#ffffff',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: -20,
        left: 0.4 * Screen.width,
    },
    activeDot: {
        backgroundColor: Theme.themeColor,
    },
    quoteView: {
        width: 0.9 * Screen.width,
        marginTop: 0.018 * Screen.height,
        marginLeft: 0.05 * Screen.width,
        marginRight: 0.05 * Screen.width,
        // borderWidth: 1,
        // borderColor: '#000000'
    },
    quoteTitleView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    refreshImg: {
        height: 0.03 * Screen.height,
        width: 0.03 * Screen.height,
        marginRight: 0.08 * Screen.height,
    },
    dateTxt: {
        fontSize: 20,
        color: '#000000'
    },
    quoteTxt: {
        marginTop: 0.01 * Screen.height,
        marginBottom: 0.01 * Screen.height,
        fontSize: 16,
        color: '#000000'
    },
    quoteSourceView: {
        flex: 1,
        alignItems: 'flex-end'
    },
    quoteSourceTxt: {
        fontSize: 16,
        color: '#777777',
    },
    flView: {
        height: 0.045 * Screen.height,
        // width: 0.25 * Screen.width,
        marginTop: 0.01 * Screen.height,
        // marginBottom: 0.005 * Screen.height,
        marginLeft: 0.04 * Screen.width,
        marginRight: 0.04 * Screen.width,
        justifyContent: 'center',
        borderBottomWidth: 1
    },
    flTitleTxt: {
        fontSize: 24,
        color: '#000000'
    },
    issue: {
        flexDirection: 'row',
        marginLeft: 0.04 * Screen.width,
        marginRight: 0.04 * Screen.width,
        width: 0.92 * Screen.width,
        height: 0.11 * Screen.height,
        alignItems: 'center',
        // borderWidth: 1
    },
    issueImg: {
        width: 0.26 * Screen.width,
        height: 0.1 * Screen.height,
        // justifyContent:'center'
    },
    issueTxt: {
        fontSize: 16,
        color: '#000000',
        paddingLeft: 0.05 * Screen.width,
        // borderWidth: 1
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd',
        marginLeft: 0.04 * Screen.width,
        marginRight: 0.04 * Screen.width,
    }
});