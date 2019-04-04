import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    Image,
    TextInput,
} from 'react-native';
import Screen from "../utils/Screen";
import Theme from "../utils/Theme"

export default class MediaFilmPage extends Component {
    // static navigationOptions = ({navigation}) => {
    //     return {
    //         headerStyle: {
    //             height: 0.065 * Screen.height,
    //         },
    //         headerLeft: (<TextInput style={styles.searchInput}/>),
    //         headerRight: (
    //             <Image
    //                 style={styles.searchBtn}
    //                 resizeMode='contain'
    //                 source={require('../img/icon/search_light.png')}
    //             />
    //         ),
    //     };
    // };

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
            </View>
        );
    };
}

const styles = StyleSheet.create({
    seacrchView: {
        height: 0.045 * Screen.height,
        width: 0.92 * Screen.width,
        borderRadius: 0.0275 * Screen.height,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop:0.015*Screen.height,
        marginBottom:0.015*Screen.height,
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
});