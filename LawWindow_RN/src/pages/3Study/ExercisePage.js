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
    ToastAndroid,
} from 'react-native';
import Screen from "../../utils/Screen";
import Theme from "../../utils/Theme"
import books from "../../txt/books";
import imgArr from "../../img/imgArr";
import hotIssues from "../../txt/hotIssues";

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
        this.state = {
            questionItem: this.props.navigation.getParam('exercise'),
            onSelect: -1,
        };
    };

    render() {
        // console.warn("render!");
        // console.warn(this.state.onSelect);
        return (
            <View style={{
                height: Screen.height - Screen.STATUSBAR_HEIGHT - Screen.APPBAR_HEIGHT - Screen.TOPBAR_HEIGHT,
                width: Screen.width,
                alignItems: 'center'
            }}>
                <Text style={styles.titleTxt}>{"题目"}</Text>
                <ScrollView style={styles.questionView}>
                    <Text style={styles.questionTxt}>{"    " + this.state.questionItem.question}</Text>
                </ScrollView>
                <View style={styles.separatorView}/>
                <Text style={styles.titleTxt}>{"选项"}</Text>
                <FlatList
                    style={styles.choicesView}
                    data={this.state.questionItem.choices}
                    renderItem={({item, index, separators}) => this._createChoiceItem(item, index, separators)}
                    // ItemSeparatorComponent={this._createSeparator}
                    keyExtractor={this._getKey}
                />
                <View style={styles.confirmBtnView}>
                    <TouchableOpacity activeOpacity={0.8} onPress={this._onConfirmBtnClicked}>
                        <View style={styles.confirmBtn}>
                            <Text style={{fontSize: 20, color: Theme.white,}}>{"确 定"}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    _createChoiceItem = (item, index, separators) => {
        // console.warn(this.state.onSelect);
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={() => this._onChoiceClick(item, index)}>
                <View style={styles.choiceItemView}>
                    <View style={[
                        styles.choiceTitleView,
                        {backgroundColor: this.state.onSelect === index ? Theme.themeColorLight : Theme.white}
                    ]}>
                        <Text style={[
                            styles.choiceTitleTxt,
                            {color: this.state.onSelect === index ? Theme.white : Theme.themeColorLight}
                        ]}>
                            {String.fromCharCode(index + 65)}
                        </Text>
                    </View>
                    <ScrollView>
                        <Text style={styles.choiceTxt}>{item}</Text>
                    </ScrollView>
                </View>
            </TouchableOpacity>
        );
    };

    // _createSeparator = () => (<View style={styles.choiceSeparatorView}/>);

    _getKey = (item, index) => ("index" + index);

    _onChoiceClick = (item, index) => {
        // console.warn(index + " " + this.state.onSelect);
        // setState是异步操作
        if (this.state.onSelect !== index)
            this.setState({
                // 页面（父组件）刷新了不代表flatlist（子组件）刷新了。listview这类的东西，刷新要把data换了才行
                questionItem: JSON.parse(JSON.stringify(this.props.navigation.getParam('exercise'))),
                onSelect: index
            });
        else
            this.setState({
                questionItem: JSON.parse(JSON.stringify(this.props.navigation.getParam('exercise'))),
                onSelect: -1
            });
    };

    _onConfirmBtnClicked = () => {
        if (this.state.onSelect !== -1) {
            this.props.navigation.state.params.exCallBack();
            this.props.navigation.goBack();
        } else
            ToastAndroid.show(
                "还未做出选择哦",
                ToastAndroid.SHORT
            );
    };
}

const styles = StyleSheet.create({
    questionView: {
        height: 0.3 * (0.88 * Screen.height - Screen.STATUSBAR_HEIGHT - Screen.TOPBAR_HEIGHT - Screen.APPBAR_HEIGHT),
        width: Screen.width,
    },
    questionTxt: {
        fontSize: 20,
        color: '#000000',
        paddingLeft: 0.04 * Screen.width,
        paddingRight: 0.04 * Screen.width,
    },
    separatorView: {
        height: 1,
        width: 0.92 * Screen.width,
        // backgroundColor: '#999999',
        backgroundColor: '#000000'
    },
    choicesView: {
        height: 0.7 * (0.88 * Screen.height - Screen.STATUSBAR_HEIGHT - Screen.TOPBAR_HEIGHT - Screen.APPBAR_HEIGHT),
        width: Screen.width,
        paddingLeft: 0.04 * Screen.width,
        paddingRight: 0.04 * Screen.width,
        // borderWidth: 1,
    },
    titleTxt: {
        fontSize: 22,
        color: "#7d7d7d",
        width: Screen.width,
        paddingTop: 0.01 * Screen.height,
        paddingBottom: 0.01 * Screen.height,
        paddingLeft: 0.03 * Screen.width,
        paddingRight: 0.03 * Screen.width,
        // borderWidth: 1,
    },
    choiceItemView: {
        width: 0.92 * Screen.width,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 0.015 * Screen.height,
        paddingBottom: 0.015 * Screen.height,
        paddingLeft: 0.02 * Screen.width,
        paddingRight: 0.02 * Screen.width,
    },
    choiceTitleView: {
        height: 0.06 * Screen.height,
        width: 0.06 * Screen.height,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 0.01 * Screen.height,
        borderWidth: 1,
        borderRadius: 0.03 * Screen.height,
        borderColor: Theme.themeColorLight
    },
    choiceTitleTxt: {
        fontSize: 20,
    },
    choiceTxt: {
        fontSize: 19,
        color: '#000000',
    },
    // choiceSeparatorView: {},
    confirmBtnView: {
        height: 0.12 * Screen.height,
        width: Screen.width,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
    },
    confirmBtn: {
        height: 0.08 * Screen.height,
        width: 0.75 * Screen.width,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 0.04 * Screen.height,
        // backgroundColor: '#c8d6e8',
        backgroundColor: Theme.themeColorLight,
        // borderWidth: 1,
    }
});