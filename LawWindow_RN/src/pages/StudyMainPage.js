import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
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
            <View style={styles.studyPageView}>
                <View style={styles.statisticsView}>
                    <Text style={[styles.statisticsTxt,{marginLeft:0.03*Screen.width}]}>{"打卡统计"}</Text>
                    <Text style={[styles.statisticsTxt,{position:'absolute',right:0.25*Screen.width,marginRight:0.03*Screen.width}]}>{this._getContinuousRecord()}</Text>
                    <Text style={[styles.statisticsTxt,{position:'absolute',right:0,marginRight:0.03*Screen.width}]}>{this._getCumulativeRecord()}</Text>
                </View>
                <Calendar
                    // Specify style for calendar container element. Default = {}
                    style={styles.calendarView}
                    // Specify theme properties to override specific styles for calendar parts. Default = {}
                    theme={{
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
                        textDayHeaderFontSize: 16
                    }}
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
                <TouchableOpacity activeOpacity={0.8} onPress={this._onStudyBtnClicked}>
                    <View style={styles.studyBtn}>
                        <Text style={{fontSize: 20, color: '#ffffff',}}>{"今日打卡"}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    _getContinuousRecord = () => {
        return "连续 "+1+" 天";
    };

    _getCumulativeRecord = () => {
        return "累积 "+1+" 天";
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
    settingsBtn: {
        height: 0.04 * Screen.height,
        width: 0.2 * Screen.width,
        // tintColor: '#b9b9b9',
        tintColor: '#000000',
    },
    statisticsView: {
        marginTop:0.04 * Screen.height,
        flexDirection:'row',
        width: 0.94 * Screen.width,
        // borderWidth: 1
    },
    statisticsTxt:{
        width:0.25*Screen.width,
        fontSize:18,
        color:'#000000',
        // borderWidth: 1
    },
    calendarView: {
        // height: 0.3*Screen.height,
        width: 0.94 * Screen.width,
        marginTop:0.04 * Screen.height,
        // borderWidth: 1
    },
    studyBtn: {
        height: 0.07 * Screen.height,
        width: 0.8 * Screen.width,
        marginTop:0.04 * Screen.height,
        borderRadius: 0.015 * Screen.height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.themeColor,
    }
});