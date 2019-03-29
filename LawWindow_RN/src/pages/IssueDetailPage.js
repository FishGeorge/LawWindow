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

export default class IssueDetailPage extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerStyle: {
                height: 0.065 * Screen.height,
            },
            title: '热点追踪',
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        style={styles.headerBtn}
                        resizeMode='contain'
                        source={require('../img/icon/back_light.png')}
                    />
                </TouchableOpacity>
            ),
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
            issueItem: this.props.navigation.getParam('issueItem')
        };
    };

    render() {
        return (
            <ScrollView keyboardDismissMode={'on-drag'} showsVerticalScrollIndicator={false}
                        style={styles.issueDPView}>
                <Image
                    style={styles.issueImg}
                    resizeMode='cover'
                    source={imgArr['hotIssue' + this.state.issueItem.img]}
                />
                <View style={styles.titleView}>
                    <Text style={styles.titleTxt}>{this.state.issueItem.title}</Text>
                    <Text style={styles.srcTxt}>{"时间："+this.state.issueItem.date}</Text>
                    <Text style={styles.srcTxt}>{"来源："+this.state.issueItem.source}</Text>
                </View>
                <View style={styles.contentView}>
                    <Text style={styles.contentTxt}>{this.state.issueItem.content}</Text>
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
    issueDPView: {
        flex: 1,
    },
    issueImg: {
        height: 0.3 * Screen.height,
        width: 0.94 * Screen.width,
        marginLeft: 0.03 * Screen.width,
        marginTop: 0.02 * Screen.height,
        // backgroundColor: Theme.themeColor
    },
    titleView:{
        // height: 0.085 * Screen.height,
        width: 0.94 * Screen.width,
        marginLeft: 0.03 * Screen.width,
        marginTop: 0.037*Screen.height,
    },
    titleTxt:{
        fontSize:24,
        color:'#000000'
    },
    srcTxt:{
        fontSize:15,
        color:'#777777'
    },
    contentView:{
        width: 0.94 * Screen.width,
        marginLeft: 0.03 * Screen.width,
        marginTop: 0.037*Screen.height,
    },
    contentTxt:{
        fontSize:18,
        color:'#000000'
    }
});