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
        this.state = {
            questionItem: this.props.navigation.getParam('exercise')
        };
    };

    render() {
        return (
            <View style={{
                height: Screen.height - Screen.STATUSBAR_HEIGHT - Screen.APPBAR_HEIGHT - Screen.TOPBAR_HEIGHT,
                width: Screen.width,
                alignItems: 'center'
            }}>
                <ScrollView style={styles.questionView}>
                    <Text style={styles.titleTxt}>{"题目"}</Text>
                    <Text style={styles.questionTxt}>{"    "+this.state.questionItem.question}</Text>
                </ScrollView>
                <View style={styles.separatorView}/>
                <ScrollView style={styles.choicesView}>
                    <Text style={styles.titleTxt}>{"选项"}</Text>
                    {this._createChoices()}
                </ScrollView>
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

    _createChoices = () => {

    };

    _onConfirmBtnClicked = () => {

    };
}

const styles = StyleSheet.create({
    questionView: {
        height: 0.25 * (0.9 * Screen.height - Screen.STATUSBAR_HEIGHT - Screen.TOPBAR_HEIGHT - Screen.APPBAR_HEIGHT),
        width: Screen.width,
    },
    questionTxt:{
        fontSize: 20,
        color: '#000000',
        paddingLeft: 0.03 * Screen.height,
        paddingRight: 0.03 * Screen.height,
    },
    separatorView: {
        height: 1,
        width: 0.92 * Screen.width,
        // backgroundColor: '#999999',
        backgroundColor: '#000000'
    },
    choicesView: {
        height: 0.75 * (0.9 * Screen.height - Screen.STATUSBAR_HEIGHT - Screen.TOPBAR_HEIGHT - Screen.APPBAR_HEIGHT),
        width: Screen.width,
    },
    titleTxt: {
        fontSize: 22,
        color: "#7d7d7d",
        paddingTop: 0.01 * Screen.height,
        paddingBottom: 0.01 * Screen.height,
        paddingLeft: 0.02 * Screen.height,
        paddingRight: 0.02 * Screen.height,
        // borderWidth: 1,
    },
    confirmBtnView: {
        height: 0.1 * Screen.height,
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