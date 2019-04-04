import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Screen from "../utils/Screen";
import Theme from "../utils/Theme";
import imgArr from "../img/imgArr";

export default class BookDetailPage extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerRight: (
                <TouchableOpacity>
                    <Image
                        style={styles.headerBtn}
                        resizeMode='contain'
                        source={require('../img/icon/more_light.png')}
                    />
                </TouchableOpacity>
            ),
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            bookItem: this.props.navigation.getParam('bookItem')
        };
    };

    render() {
        return (
            <ScrollView keyboardDismissMode={'on-drag'} showsVerticalScrollIndicator={false}
                        style={{flex: 1}} contentContainerStyle={styles.bookDPView}>
                <View style={styles.bookInfoView}>
                    <Image
                        style={styles.bookImg}
                        resizeMode='cover'
                        source={imgArr['book' + this.state.bookItem.img]}
                    />
                    <View style={styles.bookInfo}>
                        <Text style={styles.nameTxt}>{this.state.bookItem.name}</Text>
                        <Text style={styles.authorTxt}>{"作者：" + this.state.bookItem.author}</Text>
                        <Text style={styles.authorTxt}>{"出版社：" + this.state.bookItem.press}</Text>
                    </View>
                </View>
                <View style={styles.contentInfoView}>
                    <View style={styles.moduleHead}><Text style={styles.moduleHeadTxt}>{"内容简介"}</Text></View>
                    <Text style={styles.contentInfoTxt}>{"    "+this.state.bookItem.contentInfo}</Text>
                </View>
            </ScrollView>
        );
    };
}

const styles = StyleSheet.create({
    headerBtn: {
        height: 0.04 * Screen.height,
        width: 0.2 * Screen.width,
        // tintColor: '#b9b9b9',
        tintColor: '#000000',
    },
    bookDPView: {
        paddingTop: 0.01 * Screen.height,
        alignItems: 'center',
        // backgroundColor: '#dddddd'
    },
    bookInfoView: {
        height: 0.2 * Screen.height,
        width: 0.92 * Screen.width,
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1
    },
    bookImg: {
        height: 0.18 * Screen.height,
        width: 0.135 * Screen.height,
    },
    bookInfo: {
        height: 0.18 * Screen.height,
        width: 0.92 * Screen.width - 0.135 * Screen.height,
        paddingLeft: 0.02 * Screen.width,
    },
    nameTxt: {
        fontSize: 20,
        color: '#000000'
    },
    authorTxt: {
        fontSize: 16,
        color: '#777777'
    },
    moduleHead:{
        width: 0.92 * Screen.width,
        borderBottomWidth: 1
    },
    moduleHeadTxt:{
        fontSize: 20,
        color: '#000000'
    },
    contentInfoView: {
        // height: 0.2 * Screen.height,
        width: 0.92 * Screen.width,
        marginTop: 0.01 * Screen.height,
        alignItems: 'center',
        // borderWidth: 1
    },
    contentInfoTxt: {
        fontSize: 16,
        color: '#000000'
    },
});