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
import Screen from "../utils/Screen";
import Theme from "../utils/Theme"
import books from "../txt/books";
import imgArr from "../img/imgArr";

export default class MediaBookPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                <View style={styles.seacrchView}>
                    <Image
                        style={styles.searchImg}
                        resizeMode='contain'
                        source={require('../img/icon/search_light.png')}
                    />
                    <TextInput style={styles.searchInput}/>
                </View>
                <ScrollView style={{flex: 1}}>
                    <FlatList
                        // ItemSeparatorComponent={Platform.OS !== 'android' && ({highlighted}) => (
                        //     <View style={[style.separator, highlighted && {marginLeft: 0}]} />
                        //     )}
                        // ListHeaderComponent={<View style={styles.hotIssueView}>
                        //     <Text style={styles.hotIssueTxt}>热点追踪</Text>
                        // </View>}
                        data={books}
                        renderItem={({item, index, separators}) => this._createBookItem(item, index, separators)}
                        ItemSeparatorComponent={this._createSeparator}
                        keyExtractor={this._getKey}
                    />
                </ScrollView>
            </View>
        );
    };

    _createBookItem = (item, index, separators) => {
        return (
            <TouchableOpacity style={styles.bookItem} activeOpacity={0.8}
                              onPress={() => this._onBookClick(item, index)}>
                <Image style={styles.bookImg}
                       resizeMode='contain'
                       source={imgArr['book' + item.img]}/>
                <View style={styles.bookInfoView}>
                    <Text style={styles.bookName}>{item.name}</Text>
                    <Text style={[styles.bookOtherInfoTxt, {bottom: 24}]}>{" " + item.attentionNum + " 人关注"}</Text>
                    <Text style={[styles.bookOtherInfoTxt, {bottom: 0}]}>{"用户 " + item.uploadAccount + " 创建"}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    _createSeparator = () => (<View style={styles.separator}/>);

    _getKey = (item, index) => ("index" + index);

    _onBookClick = (item, index) => {
        // console.warn("= " + item.title);
        this.props.navigation.navigate("BookDetail", {bookItem: item},);
    }
}

const styles = StyleSheet.create({
    seacrchView: {
        height: 0.045 * Screen.height,
        width: 0.92 * Screen.width,
        borderRadius: 0.0275 * Screen.height,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 0.015 * Screen.height,
        marginBottom: 0.015 * Screen.height,
        backgroundColor: "#ededed",
        // borderWidth: 1
    },
    searchImg: {
        height: 0.03 * Screen.height,
        width: 0.15 * Screen.width,
        tintColor: '#000000',
    },
    searchInput: {
        height: 0.06 * Screen.height,
        width: 0.75 * Screen.width,
        // bottom:-0.005 * Screen.height,
        // borderWidth: 1
    },
    bookItem: {
        height: 0.17 * Screen.height,
        width: Screen.width,
        flexDirection: 'row',
        paddingTop: 0.01 * Screen.height,
        paddingBottom: 0.01 * Screen.height,
        paddingLeft: 0.04 * Screen.width,
        paddingRight: 0.04 * Screen.width
        // borderWidth:1
    },
    bookImg: {
        height: 0.15 * Screen.height,
        width: 0.15 * Screen.height,
    },
    bookInfoView: {
        height: 0.15 * Screen.height,
        width: 0.92 * Screen.width - 0.15 * Screen.height,
    },
    bookName: {
        fontSize: 18,
        color: '#000000'
    },
    bookOtherInfoTxt: {
        fontSize: 14,
        color: '#000000',
        position: 'absolute'
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd',
        marginLeft: 0.04 * Screen.width,
        marginRight: 0.04 * Screen.width,
    }
});