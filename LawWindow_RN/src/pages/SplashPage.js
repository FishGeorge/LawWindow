import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Animated,
    Image,
    TouchableOpacity
} from 'react-native';
import Screen from "../utils/Screen";
import Theme from "../utils/Theme";

export default class SplashPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 动画效果
            bounceValue: new Animated.Value(0),// 设置初始值
            // time: 5,
            time: 3,
            // allowSkip: false,
            allowSkip: true,
            SplashPic: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552925499021&di=97f0d202fca3df0cfcd153a6eda9b094&imgtype=0&src=http%3A%2F%2Fimg.yzcdn.cn%2Fupload_files%2F2017%2F09%2F15%2F7201706175bbc0667e91e074388bc9a9.jpg",
        };
    }

    componentWillMount() {
        // 获取广告页图片地址

    }

    componentDidMount() {
        // 5s后自动跳过
        this.timer1 = setTimeout(() => {
            // Animated.timing(
            //     this.state.bounceValue, // 初始值
            //     {toValue: 1, duration: 300}// 结束值
            // ).start();// 开始
            this._pressSkip();
            // }, 5000);
        }, 3000);
        // 刷新倒计时数字
        this.timer2 = setInterval(() => {
            this.setState({
                time: this.state.time - 1
            });
        }, 1000);
        // // 2s后使跳过可用，嘻嘻
        // this.timer3 = setTimeout(() => {
        //     this.state.allowSkip = true;
        // }, 2000);
    }

    render() {
        return (
            <Animated.View style={{
                width: Screen.width,
                height: Screen.height - Screen.STATUSBAR_HEIGHT,
                opacity: this.state.bounceValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0]
                })
            }}>
                <View style={styles.splashImgView}>
                    <Image source={{uri: this.state.SplashPic}} style={styles.splashImg}/>
                </View>
                <View style={styles.infoView}>
                    <View style={styles.logoView}/>
                    <View style={styles.nameView}>
                        <Text style={{fontSize: 28, fontWeight: 'bold', color: Theme.themeColor}}>法窗</Text>
                        <Text style={{fontSize: 13}}>扣开时代之窗</Text>
                    </View>
                    <Text style={styles.infoBottom}>{"Copy right @ 东南大学法学院  Ver 0.1.1"}</Text>
                </View>
                <TouchableOpacity onPress={() => this._pressSkip()} style={styles.btn}>
                    <Text style={styles.btnText}>{"跳过 " + this.state.time}</Text>
                </TouchableOpacity>
            </Animated.View>
        );
    }

    // 跳过逻辑
    _pressSkip() {
        if (this.state.allowSkip === true) {
            this.props.navigation.navigate('Login');
            clearTimeout(this.timer1);
            clearInterval(this.timer2);
            // clearTimeout(this.timer3);
        }
    }
}

const styles = StyleSheet.create({
    splashImgView: {
        width: Screen.width,
        height: 0.7 * Screen.height - Screen.STATUSBAR_HEIGHT,
        // borderTopWidth: 1,
        borderBottomWidth: 1,
        // borderTopColor: '#000000',
        borderBottomColor: '#000000',
    },
    splashImg: {
        flex: 1,
    },
    infoView: {
        width: Screen.width,
        height: 0.3 * Screen.height,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    logoView: {
        width: 0.1 * Screen.height,
        height: 0.1 * Screen.height,
        borderRadius: 0.05 * Screen.height,
        borderWidth: 1,
        borderColor: '#000000',
    },
    nameView: {
        width: 0.35 * Screen.width,
        height: 0.08 * Screen.height,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoBottom: {
        fontSize: 10,
        position: 'absolute',
        bottom: 8
    },
    btn: {
        paddingLeft: 7,
        paddingRight: 7,
        position: 'absolute',
        right: 5,
        top: 0.7 * Screen.height - 0.5 * Screen.STATUSBAR_HEIGHT,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
        backgroundColor: '#cccccc',
    },
    btnText: {
        color: '#000000',
        fontSize: 15,
        // fontWeight: 'bold'
    },
});