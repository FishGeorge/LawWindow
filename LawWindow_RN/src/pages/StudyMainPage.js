import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ProgressBarAndroid
} from 'react-native';
import Screen from "../utils/Screen";
import Theme from "../utils/Theme"
import {Calendar, LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['CN'] = {
    monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    monthNamesShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    dayNames: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
};

LocaleConfig.defaultLocale = 'CN';

export default class StudyMainPage extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: '学习',
            headerStyle: {
                height: 0.065 * Screen.height,
            },
            headerRight: (
                <Image
                    style={styles.settingsBtn}
                    resizeMode='contain'
                    source={require('../img/icon/more_light.png')}
                />
            ),
        };
    };

    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <ScrollView contentContainerStyle={styles.studyPageView}>
                <View style={styles.practiceView}>
                    <Text style={styles.practiceTxt}>法窗测试</Text>
                </View>
                <Calendar
                    // Specify style for calendar container element. Default = {}
                    style={styles.calendarView}
                    // Specify theme properties to override specific styles for calendar parts. Default = {}
                    theme={calendarTheme}
                    // Initially visible month. Default = Date()
                    // current={'2012-03-01'}
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    // minDate={'2012-05-10'}
                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    // maxDate={'2012-05-30'}
                    // Handler which gets executed on day press. Default = undefined
                    // onDayPress={(day) => {console.log('selected day', day)}}
                    // Handler which gets executed on day long press. Default = undefined
                    // onDayLongPress={(day) => {console.log('selected day', day)}}
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={'yyyy年MM月'}
                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                    // onMonthChange={(month) => {console.log('month changed', month)}}
                    // Hide month navigation arrows. Default = false
                    // hideArrows={true}
                    // Replace default arrows with custom ones (direction can be 'left' or 'right')
                    // renderArrow={(direction) => (<Arrow />)}
                    // Do not show days of other months in month page. Default = false
                    hideExtraDays={false}
                    // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                    // day from another month that is visible in calendar page. Default = false
                    disableMonthChange={true}
                    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                    firstDay={1}
                    // Hide day names. Default = false
                    hideDayNames={false}
                    // Show week numbers to the left. Default = false
                    showWeekNumbers={true}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                    onPressArrowLeft={substractMonth => substractMonth()}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                    onPressArrowRight={addMonth => addMonth()}
                    // Collection of dates that have to be marked. Default = {}
                    markingType={'custom'}
                    markedDates={this._getMarkedDates()}
                />
                {/*<View style={styles.statisticsView}>*/}
                {/*<Text style={[styles.statisticsTxt, {marginLeft: 0.03 * Screen.width}]}>{"打卡统计"}</Text>*/}
                {/*</View>*/}
                <View style={styles.progressView}>
                    <Text style={styles.statisticsTxt}>{"掌握程度 " + this._getFinishedEx()[0]}</Text>
                    <Text style={[styles.statisticsTxt, {
                        position: 'absolute',
                        right: 0.25 * Screen.width
                    }]}>{this._getContinuousRecord()}</Text>
                    <Text style={[styles.statisticsTxt, {
                        position: 'absolute',
                        right: 0,
                    }]}>{this._getCumulativeRecord()}</Text>
                </View>
                <ProgressBarAndroid
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={this._getFinishedEx()[1]}
                    color={Theme.themeColor}
                    style={{width: 0.85 * Screen.width}}
                />
                {/*<View style={styles.progressView}>*/}
                {/*<View style={styles.circleView}>*/}
                {/*<Text style={styles.progressTxt}>总做题量</Text>*/}
                {/*<Text style={styles.progressNumTxt}>{this._getFinishedEx()[0]}</Text>*/}
                {/*</View>*/}
                {/*<View style={styles.circleView}>*/}
                {/*</View>*/}
                {/*<View style={styles.circleView}>*/}
                {/*<Text style={styles.progressTxt}>正确率</Text>*/}
                {/*<Text style={styles.progressNumTxt}>{this._getFinishedEx()[0]}</Text>*/}
                {/*</View>*/}
                {/*</View>*/}
                <View style={styles.mediaView}>
                    <TouchableOpacity activeOpacity={0.8} onPress={this._onFilmBtnClicked}>
                        <View style={styles.mediaBtn}>
                            <Text style={{fontSize: 20, color: '#000000',}}>{"电影"}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.mediaViewSeparator}/>
                    <TouchableOpacity activeOpacity={0.8} onPress={this._onFilmBtnClicked}>
                        <View style={styles.mediaBtn}>
                            <Text style={{fontSize: 20, color: '#000000',}}>{"书籍"}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.mediaViewSeparator}/>
                    <TouchableOpacity activeOpacity={0.8} onPress={this._onFilmBtnClicked}>
                        <View style={styles.mediaBtn}>
                            <Text style={{fontSize: 20, color: '#000000',}}>{"音乐"}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{position: 'absolute', bottom: 0.02 * Screen.height}} activeOpacity={0.8}
                                  onPress={this._onStudyBtnClicked}>
                    <View style={styles.studyBtn}>
                        <Text style={{fontSize: 20, color: '#ffffff',}}>{"今日打卡"}</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        );
    };

    _getContinuousRecord = () => {
        return "连续 " + 1 + " 天";
    };

    _getCumulativeRecord = () => {
        return "累积 " + 1 + " 天";
    };

    _getFinishedEx = () => {
        return [35 + "/" + 170, 35 / 170];
    };

    _getMarkedDates = () => {
        let dotStyle = {
            customStyles: {
                container: {
                    backgroundColor: Theme.themeColor,
                },
                text: {
                    color: 'white',
                },
            },
        };
        return {
            '2019-03-27': dotStyle,
            '2019-03-29': dotStyle,
        }
    };

    _onStudyBtnClicked = () => {

    };
}

const styles = StyleSheet.create({
    studyPageView: {
        flex: 1,
        alignItems: 'center'
    },
    practiceView: {
        width: 0.92 * Screen.width,
        height: 0.045 * Screen.height,
        marginTop: 0.01 * Screen.height,
        justifyContent: 'center',
        borderBottomWidth: 1
    },
    practiceTxt: {
        fontSize: 24,
        color: '#000000'
    },
    calendarView: {
        // height: 0.3*Screen.height,
        width: 0.94 * Screen.width,
        // marginTop: 0.04 * Screen.height,
        borderBottomWidth: 1
    },
    settingsBtn: {
        height: 0.04 * Screen.height,
        width: 0.2 * Screen.width,
        // tintColor: '#b9b9b9',
        tintColor: '#000000',
    },
    statisticsView: {
        marginTop: 0.01 * Screen.height,
        flexDirection: 'row',
        width: 0.92 * Screen.width,
        // borderWidth: 1
    },
    statisticsTxt: {
        // width: 0.25 * Screen.width,
        fontSize: 18,
        color: '#000000',
        // borderWidth: 1,
    },
    progressView: {
        width: 0.9 * Screen.width,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 0.01 * Screen.height,
    },
    circleView: {
        height: 0.26 * Screen.width,
        width: 0.26 * Screen.width,
        borderRadius: 0.13 * Screen.width,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2
    },
    progressTxt: {
        fontSize: 16,
        color: '#000000',
    },
    progressNumTxt: {
        fontSize: 16,
        color: '#000000',
    },
    mediaView: {
        marginTop: 0.02 * Screen.height,
        width: 0.92 * Screen.width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    mediaBtn: {
        height: 0.28 * Screen.width,
        width: 0.28 * Screen.width,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
    },
    mediaViewSeparator: {
        width: 1,
        height: 0.2 * Screen.width,
        backgroundColor: '#dddddd',
    },
    studyBtn: {
        height: 0.07 * Screen.height,
        width: 0.8 * Screen.width,
        marginTop: 0.01 * Screen.height,
        borderRadius: 0.015 * Screen.height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.themeColor,
        // borderWidth: 1,
    }
});

const calendarTheme = {
    backgroundColor: '#ffffff',
    calendarBackground: '#ffffff',
    textSectionTitleColor: '#a2adb9',
    selectedDayBackgroundColor: '#00adf5',
    selectedDayTextColor: '#ffffff',
    todayTextColor: '#00adf5',
    dayTextColor: '#2d4150',
    textDisabledColor: '#cdd5dc',
    dotColor: '#00adf5',
    selectedDotColor: '#ffffff',
    arrowColor: Theme.themeColor,
    monthTextColor: '#000000',
    textDayFontFamily: 'monospace',
    textMonthFontFamily: 'monospace',
    textDayHeaderFontFamily: 'monospace',
    // textMonthFontWeight: 'bold',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16,
    'stylesheet.calendar.header': {
        week: {
            marginTop: 0,
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderWidth: 1
        },
    },
    'stylesheet.calendar.main': {
        week: {
            marginTop: 1,
            marginBottom: 1,
            flexDirection: 'row',
            justifyContent: 'space-around'
        }
    }
};