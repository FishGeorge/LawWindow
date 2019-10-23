import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native';
import Screen from "../utils/Screen";
import Theme from "../utils/Theme";

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.loginPageView}>
                <View style={styles.upHalfView}>
                    <Text style={styles.titleTxt}>{"为你打开一扇法窗"}</Text>
                </View>
                <View style={styles.downHalfView}>
                    <View style={styles.thirdLoginView}>
                        <TouchableOpacity activeOpacity={0.8}>
                            <View style={styles.thirdLoginBtn}>
                                <Image
                                    style={{height: 0.05 * Screen.height, width: 0.05 * Screen.height,}}
                                    resizeMode='contain'
                                    source={require('../img/exampleImg/qq.jpg')}/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}>
                            <View style={styles.thirdLoginBtn}>
                                <Image
                                    style={{
                                        height: 0.07 * Screen.height,
                                        width: 0.07 * Screen.height,
                                        borderRadius: 0.035 * Screen.height
                                    }}
                                    resizeMode='contain'
                                    source={require('../img/exampleImg/weixin.jpg')}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.thirdLoginTxt}>{"—  其他方式登录  —"}</Text>
                </View>
                <View style={styles.loginView}>
                    <View style={styles.inputViewOut}>
                        <View style={styles.inputView}>
                            <TextInput style={styles.txtIp} keyboardType={'numeric'} maxLength={11} placeholder={"手机号"}
                                       placeholderTextColor={'#777777'}/>
                        </View>
                        <View style={styles.separatorView}/>
                        <View style={styles.inputView}>
                            <TextInput style={[styles.txtIp, {width: 0.4 * Screen.width}]} keyboardType={'numeric'}
                                       maxLength={6} placeholder={"验证码"} placeholderTextColor={'#777777'}/>
                            <TouchableOpacity activeOpacity={0.8}>
                                <View style={styles.sendCodeBtn}>
                                    <Text style={{fontSize: 14, color: '#000000',}}>{"发送验证码"}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} onPress={this._onLoginBtnClicked}>
                        <View style={styles.loginBtn}>
                            <Text style={{fontSize: 20, color: Theme.white,}}>{"登 录"}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    _onLoginBtnClicked = () => {
        this.props.navigation.navigate("Main");
    }
}

const styles = StyleSheet.create({
    loginPageView: {
        flex: 1,
        alignItems: 'center',
        // backgroundColor: Theme.themeColorLight,
        // backgroundColor: Theme.backGroundColor
    },
    upHalfView: {
        height: 0.38 * (Screen.height - Screen.STATUSBAR_HEIGHT),
        width: Screen.width,
        backgroundColor: Theme.themeColorLight,
        // justifyContent:'center',
        paddingTop: 0.15 * Screen.height,
        alignItems: 'center',
        // borderWidth: 1,
    },
    titleTxt: {
        fontSize: 26,
        color: Theme.white,
    },
    downHalfView: {
        height: 0.62 * (Screen.height - Screen.STATUSBAR_HEIGHT),
        width: Screen.width,
        backgroundColor: Theme.backGroundColor,
        flexDirection: 'column-reverse',
        alignItems:'center'
        // borderWidth: 1,
    },
    thirdLoginView: {
        // height: 0.07 * Screen.height,
        width: Screen.width,
        flexDirection: 'row',
        justifyContent: 'center',
        // borderWidth: 1,
        marginBottom:0.05*Screen.height,
    },
    thirdLoginTxt: {
        fontSize:18,
        // color:
        marginBottom:0.02*Screen.height,
    },
    thirdLoginBtn: {
        height: 0.07 * Screen.height,
        width: 0.07 * Screen.height,
        marginLeft: 0.075 * Screen.width,
        marginRight: 0.075 * Screen.width,
        borderRadius: 0.035 * Screen.height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.white,
        // borderWidth: 1
    },
    loginView: {
        position: 'absolute',
        height: 0.4 * Screen.height,
        width: 0.9 * Screen.width,
        borderRadius: 0.01 * Screen.height,
        alignItems: 'center',
        top: 0.3 * Screen.height,
        elevation: 3,
        backgroundColor: '#FFFFFF'
    },
    inputViewOut: {
        height: 0.20 * Screen.height,
        width: 0.75 * Screen.width,
        marginTop: 0.04 * Screen.height,
        // borderRadius: 0.03 * Screen.width,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#c8d6e8',
        // backgroundColor: Theme.themeColorLight
        // borderWidth: 1,
    },
    inputView: {
        height: 0.09 * Screen.height,
        width: 0.75 * Screen.width,
        flexDirection: 'row',
        alignItems: 'center'
    },
    separatorView: {
        height: 1,
        width: 0.7 * Screen.width,
        // backgroundColor: '#999999',
        backgroundColor: '#000000'
    },
    txtIp: {
        width: 0.75 * Screen.width,
        paddingLeft: 0.05 * Screen.width,
        fontSize: 18,
        // borderWidth: 1
    },
    sendCodeBtn: {
        height: 0.04 * Screen.height,
        width: 0.25 * Screen.width,
        marginLeft: 0.05 * Screen.width,
        marginRight: 0.05 * Screen.width,
        backgroundColor: '#bbbbbb',
        borderRadius: 0.02 * Screen.height,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginBtn: {
        height: 0.08 * Screen.height,
        width: 0.75 * Screen.width,
        marginTop: 0.04 * Screen.height,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 0.04 * Screen.height,
        // backgroundColor: '#c8d6e8',
        backgroundColor: Theme.themeColorLight,
        // borderWidth: 1,
    },
});