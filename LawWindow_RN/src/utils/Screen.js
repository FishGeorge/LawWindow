import {
    Dimensions,
    Platform,
    PixelRatio,
    StatusBar,
} from 'react-native';

export default {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    onePixel: 1 / PixelRatio.get(),
    STATUSBAR_HEIGHT: (Platform.OS === 'ios' ? 20 : StatusBar.currentHeight),
    TOPBAR_HEIGHT: 0.065 * Dimensions.get('window').height,
    APPBAR_HEIGHT: (Platform.OS === 'ios' ? 44 : 0.07 * Dimensions.get('window').height),
}
;