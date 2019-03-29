import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Button,
    Image
} from 'react-native';
import {
    createBottomTabNavigator,
    createStackNavigator
} from "react-navigation";
import Screen from "../utils/Screen";
import NewsPage from "./NewsPage";
import IssueDetailPage from "./IssueDetailPage";
import StudyMainPage from "./StudyMainPage";
import MePage from "./MePage";

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

const CommunityStack = createStackNavigator(
    {
        Home: DefaultScreen,
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            headerStyle: {
                height: 0 * Screen.height,
            }
        }
    }
);

const NewsStack = createStackNavigator(
    {
        News: NewsPage,
        IssueDetail:IssueDetailPage,
    },
    {
        initialRouteName: "News",
        defaultNavigationOptions: {
                headerStyle: {
                    height: 0 * Screen.height,
                },
                headerLeft: (<View/>),
        },
    }
);

const StudyStack = createStackNavigator(
    {
        StudyMain: StudyMainPage,
    },
    {
        initialRouteName: "StudyMain",
        defaultNavigationOptions: {
            headerStyle: {
                height: 0 * Screen.height,
            }
        }
    }
);

const MeStack = createStackNavigator(
    {
        Me: MePage,
    },
    {
        initialRouteName: "Me",
        defaultNavigationOptions: {
            headerStyle: {
                height: 0 * Screen.height,
            }
        }
    }
);

export default mainPageTabNavigator = createBottomTabNavigator(
    {
        Community: {
            screen: CommunityStack,
            navigationOptions: {
                tabBarLabel: '社区',
                tabBarIcon: ({focused, tintColor}) => (
                    <Image style={[styles.iconImg, {tintColor: tintColor}]} resizeMode='contain'
                           source={require('../img/icon/message_light.png')}/>
                ),
            },
        },
        News: {
            screen: NewsStack,
            navigationOptions: {
                tabBarLabel: '资讯',
                tabBarIcon: ({focused, tintColor}) => (
                    <Image style={[styles.iconImg, {tintColor: tintColor}]} resizeMode='contain'
                           source={require('../img/icon/subscription_light.png')}/>
                ),
            },
        },
        Study: {
            screen: StudyStack,
            navigationOptions: {
                tabBarLabel: '学习',
                tabBarIcon: ({focused, tintColor}) => (
                    <Image style={[styles.iconImg, {tintColor: tintColor}]} resizeMode='contain'
                           source={require('../img/icon/edit_light.png')}/>
                ),
            },
        },
        Me: {
            screen: MeStack,
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon: ({focused, tintColor}) => (
                    <Image style={[styles.iconImg, {tintColor: tintColor}]} resizeMode='contain'
                           source={require('../img/icon/my_light.png')}/>
                ),
            },
        },
    },
    {
        initialRouteName: "News",
        // initialRouteName: "Study",//调试用
        tabBarOptions: {
            activeTintColor: '#99dc00',
            inactiveTintColor: 'gray',
            style: {
                height: 0.07 * Screen.height,
                borderTopWidth: 1,
                borderColor: '#f6f6f6',
                paddingTop: 2,
            },
            showIcon: true,
            labelStyle: {
                fontSize: 11,
                paddingTop: 0,
                marginTop: 0,
            },
        },
        backBehavior: 'none',
    }
);

const styles = StyleSheet.create({
    MainView: {
        height: Screen.height - Screen.STATUSBAR_HEIGHT,
    },
    iconImg: {
        height: 0.04 * Screen.height
    }
});