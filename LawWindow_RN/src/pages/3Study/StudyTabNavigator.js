import React, {Component} from 'react';
import {
    View,
    Button
} from 'react-native';
import Screen from "../../utils/Screen";
import Theme from "../../utils/Theme";
import {createMaterialTopTabNavigator} from "react-navigation";
import StudyMainPage from "./StudyMainPage";
import MediaFilmPage from "./MediaFilmPage";
import MediaBookPage from "./MediaBookPage";

export default StudyTabNavigator = createMaterialTopTabNavigator(
    {
        Study: {
            screen: StudyMainPage,
            navigationOptions: {
                tabBarLabel: '每日练习',
            },
        },
        Film: {
            screen: MediaFilmPage,
            navigationOptions: {
                tabBarLabel: '电影',
            },
        },
        Book: {
            screen: MediaBookPage,
            navigationOptions: {
                tabBarLabel: '书籍',
            },
        },
    },
    {
        initialRouteName: 'Study',
        // initialRouteName: 'Book',//调试用
        tabBarOptions: {
            activeTintColor: '#000000',
            inactiveTintColor: '#777777',
            showIcon: false,
            style: {
                height: 0.055 * Screen.height,
                backgroundColor: '#ffffff',
            },
            tabStyle: {
                width: 0.33333 * Screen.width
            },
            indicatorStyle: {
                marginLeft: 0.03 * Screen.width,
                width: 0.27333 * Screen.width,
                backgroundColor: Theme.themeColor
            },
            labelStyle: {
                fontSize: 16,
                marginTop: 0,
            },
        },
        backBehavior: 'none',
    }
);