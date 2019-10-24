import React, {Component} from 'react';
import {
    View,
    StatusBar,
    StyleSheet,
    Button
} from 'react-native';
import {
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';

import Screen from "./src/utils/Screen";
import Theme from "./src/utils/Theme";
import SplashPage from "./src/pages/SplashPage";
import LoginPage from "./src/pages/LoginPage";
import MainPageTabNavigator from "./src/pages/MainTabNavigator";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.OutmostView}>
                <StatusBar animated={true} backgroundColor={Theme.themeColorLight} translucent={true} barStyle={'light-content'}/>
                <AppContainer/>
            </View>
        );
    }
}

const AppStackNavigator = createSwitchNavigator(
    {
        Splash: SplashPage,
        Login: LoginPage,
        Main: MainPageTabNavigator,
    },
    {
        initialRouteName: "Splash",
        // initialRouteName: "Main",// 调试用
        defaultNavigationOptions: ({navigation}) => {
            return {
                headerStyle: {
                    height: 0 * Screen.height,
                },
                headerLeft: (<View/>)
            };
        }
    }
);

const AppContainer = createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({
    OutmostView: {
        height: Screen.height - Screen.STATUSBAR_HEIGHT,
        marginTop: Screen.STATUSBAR_HEIGHT
    },
});