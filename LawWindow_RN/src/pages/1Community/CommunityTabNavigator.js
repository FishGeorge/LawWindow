import React, {Component} from 'react';
import {
    View,
    Button
} from 'react-native';
import Screen from "../../utils/Screen";
import Theme from "../../utils/Theme";
import {createMaterialTopTabNavigator} from "react-navigation";
import TopicPage from "./TopicPage";

class DefaultScreen extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                {/* other code from before here */}
                <Button
                    title="DefaultScreen"
                    onPress={() => {}}
                />
            </View>
        );
    }
}

export default CommunityTabNavigator = createMaterialTopTabNavigator(
    {
        Law: {
            screen: TopicPage,
            navigationOptions: {
                tabBarLabel: '法律',
            },
        },
        Life: {
            screen: TopicPage,
            navigationOptions: {
                tabBarLabel: '生活',
            },
        },
        Reading: {
            screen: TopicPage,
            navigationOptions: {
                tabBarLabel: '读书',
            },
        },
    },
    {
        initialRouteName: "Law",
        tabBarOptions: {
            activeTintColor: '#000000',
            inactiveTintColor: '#777777',
            showIcon: false,
            style: {
                height: 0.055 * Screen.height,
                backgroundColor:'#ffffff',
            },
            tabStyle:{
                width:0.2*Screen.width
            },
            indicatorStyle:{
                marginLeft:0.025*Screen.width,
                width:0.15*Screen.width,
                backgroundColor:Theme.themeColor
            },
            labelStyle: {
                fontSize: 16,
                marginTop: 0,
            },
        },
        backBehavior: 'none',
    }
);