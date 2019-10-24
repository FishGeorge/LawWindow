import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Screen from "../../utils/Screen";
import Theme from "../../utils/Theme";
import imgArr from "../../img/imgArr";

export default class FilmDetailPage extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerRight: (
                <TouchableOpacity>
                    <Image
                        style={styles.headerBtn}
                        resizeMode='contain'
                        source={require('../../img/icon/more_light.png')}
                    />
                </TouchableOpacity>
            ),
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            filmItem: this.props.navigation.getParam('filmItem')
        };
    };

    render() {
        return (
            <ScrollView keyboardDismissMode={'on-drag'} showsVerticalScrollIndicator={false}
                        style={{flex: 1}} contentContainerStyle={styles.filmDPView}>
                <View style={styles.filmInfoView}>
                    <Image
                        style={styles.filmImg}
                        resizeMode='cover'
                        source={imgArr['film' + this.state.filmItem.img]}
                    />
                    <View style={styles.filmInfo}>
                        <Text style={styles.nameTxt}>{this.state.filmItem.name}</Text>
                        <Text style={styles.authorTxt}>{"导演：" + this.state.filmItem.director}</Text>
                        <Text style={styles.authorTxt}>{"编剧：" + this.state.filmItem.scriptwriter}</Text>
                    </View>
                </View>
                <View style={styles.contentInfoView}>
                    <View style={styles.moduleHead}><Text style={styles.moduleHeadTxt}>{"内容简介"}</Text></View>
                    <Text style={styles.contentInfoTxt}>{"    "+this.state.filmItem.contentInfo}</Text>
                </View>
                <View style={styles.contentInfoView}>
                    <View style={styles.moduleHead}><Text style={styles.moduleHeadTxt}>{"导演简介"}</Text></View>
                    <Text style={styles.contentInfoTxt}>{"    "+this.state.filmItem.authorInfo}</Text>
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
    filmDPView: {
        paddingTop: 0.01 * Screen.height,
        alignItems: 'center',
        // backgroundColor: '#dddddd'
    },
    filmInfoView: {
        height: 0.2 * Screen.height,
        width: 0.92 * Screen.width,
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1
    },
    filmImg: {
        height: 0.18 * Screen.height,
        width: 0.135 * Screen.height,
    },
    filmInfo: {
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