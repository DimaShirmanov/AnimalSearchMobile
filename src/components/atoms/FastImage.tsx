/**
 * Wrapper for Images
 * returns FastImageTinted on iOS and RN Image on Android
 * flattens StyleSheet to extract tintColor as a prop for FastImage
 */

import React from 'react';
import { Platform, Image, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

/* Disabling fast image to test if we actually need it */
// If an old iOS bug with spontaneously disappearing images still persists, uncomment FastImage for iOS in this wrapper
// TODO: change any to interface
export default (props: any) => {
    // if (Platform.OS === 'ios') {
    //     let style = { ...StyleSheet.flatten(props.style) };
    //     const tintColor = style.tintColor;
    //     delete style.tintColor;
    //     return <FastImage tintColor={tintColor} {...props} style={style} />;
    // }
    return <Image {...props} />;
};
