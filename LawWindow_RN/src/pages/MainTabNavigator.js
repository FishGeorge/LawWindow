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
import CommunityTabNavigator from "./1Community/CommunityTabNavigator";
import NewsPage from "./2News/NewsPage";
import IssueDetailPage from "./2News/IssueDetailPage";
import StudyTabNavigator from "./3Study/StudyTabNavigator"
import MePage from "./4Me/MePage";
import BookDetailPage from "./3Study/BookDetailPage";
import TopicDetailPage from "./1Community/TopicDetailPage";
import NewTopicPage from "./1Community/NewTopicPage";
import ExercisePage from "./3Study/ExercisePage";
import FilmDetailPage from "./3Study/FilmDetailPage";

const CommunityStack = createStackNavigator(
    {
        CommunityTabNavigator: CommunityTabNavigator,
        TopicDetail: TopicDetailPage,
        NewTopic: NewTopicPage,
    },
    {
        initialRouteName: "CommunityTabNavigator",
        defaultNavigationOptions: {
            title: '社区',
            headerStyle: {
                height: Screen.TOPBAR_HEIGHT,
                elevation: 0,
                borderBottomColor: '#000000',
                // borderBottomWidth:1
            },
        }
    }
);

const NewsStack = createStackNavigator(
    {
        News: NewsPage,
        IssueDetail: IssueDetailPage,
    },
    {
        initialRouteName: "News",
        defaultNavigationOptions: {
            headerStyle: {
                height: 0 * Screen.height,
            },
        },
    }
);

const StudyStack = createStackNavigator(
    {
        StudyTabNavigator: StudyTabNavigator,
        Exercise: ExercisePage,
        BookDetail: BookDetailPage,
        FilmDetail: FilmDetailPage,
    },
    {
        initialRouteName: "StudyTabNavigator",
        defaultNavigationOptions: {
            title: '学习',
            headerStyle: {
                height: Screen.TOPBAR_HEIGHT,
                elevation: 0,
            },
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

export default MainTabNavigator = createBottomTabNavigator(
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
                height: Screen.APPBAR_HEIGHT,
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
    // MainView: {
    //     height: Screen.height - Screen.STATUSBAR_HEIGHT,
    // },
    iconImg: {
        height: 0.04 * Screen.height
    }
});