import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import Screen from "../utils/Screen";
import imgArr from "../img/imgArr";

export default class NewsPage extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: '我的',
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
            <View style={styles.mePageView}>
                <TouchableOpacity activeOpacity={0.8}>
                    <View style={[styles.detailView, {marginTop: 0.03 * Screen.height, height: 0.1 * Screen.height}]}>
                        <Text style={styles.detailTxt}>{"头像"}</Text>
                        <Image
                            style={styles.headImg}
                            resizeMode='stretch'
                            source={require('../img/exampleImg/headImg.jpg')}/>
                        <Image
                            style={styles.detailBtn}
                            resizeMode='stretch'
                            source={require('../img/icon/right_light.jpg')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}>
                    <View style={styles.detailView}>
                        <Text style={styles.detailTxt}>{"昵称"}</Text>
                        <Text style={styles.infoTxt}>{"龚呈"}</Text>
                        <Image
                            style={styles.detailBtn}
                            resizeMode='stretch'
                            source={require('../img/icon/right_light.jpg')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}>
                    <View style={styles.detailView}>
                        <Text style={styles.detailTxt}>{"性别"}</Text>
                        <Text style={styles.infoTxt}>{"男"}</Text>
                        <Image
                            style={styles.detailBtn}
                            resizeMode='stretch'
                            source={require('../img/icon/right_light.jpg')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}>
                    <View style={styles.detailView}>
                        <Text style={styles.detailTxt}>{"账号ID"}</Text>
                        <Text style={[styles.infoTxt, {right: 0.035 * Screen.width}]}>{"80000001"}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}>
                    <View style={[styles.detailView, {marginTop: 0.03 * Screen.height,}]}>
                        <Text style={styles.detailTxt}>{"账号管理"}</Text>
                        <Image
                            style={styles.detailBtn}
                            resizeMode='stretch'
                            source={require('../img/icon/right_light.jpg')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={this._onLogoutBtnClicked}>
                    <View style={[styles.detailView, {marginTop: 0.03 * Screen.height, justifyContent: 'center'}]}>
                        <Text style={styles.logoutBtnTxt}>{"退出账号"}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    _onLogoutBtnClicked = () => {
        // console.warn(1);
        this.props.navigation.navigate('Login');
    };
}

const styles = StyleSheet.create({
    mePageView: {
        flex: 1,
        backgroundColor: "#eeeeee",
    },
    detailView: {
        height: 0.07 * Screen.height,
        width: Screen.width,
        backgroundColor: "#ffffff",
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: "#eeeeee"
    },
    separatorView: {
        height: 0.03 * Screen.height,
    },
    detailTxt: {
        paddingLeft: 0.03 * Screen.width,
        fontSize: 18,
        color: "#000000"
    },
    infoTxt: {
        position: 'absolute',
        right: 0.09 * Screen.width,
        fontSize: 18,
        color: "#999999"
    },
    detailBtn: {
        height: 0.03 * Screen.height,
        width: 0.05 * Screen.width,
        position: 'absolute',
        right: 0.03 * Screen.width,
    },
    headImg: {
        height: 0.085 * Screen.height,
        width: 0.085 * Screen.height,
        borderRadius: 0.0425 * Screen.height,
        position: 'absolute',
        right: 0.09 * Screen.width,
    },
    logoutBtnTxt: {
        fontSize: 18,
        color: "#ff0000"
    }
});