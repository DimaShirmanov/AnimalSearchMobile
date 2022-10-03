import { Dimensions, Platform, StatusBar } from 'react-native';

const { width: sWidth, height: sHeight } = Dimensions.get('screen');
const { width: wWidth, height: wHeight } = Dimensions.get('window');

export const IS_SMALL_DEVICE = wWidth < 375;

export const SCREEN_SIZE = { sWidth, sHeight, wWidth, wHeight };
export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';