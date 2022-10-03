import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native'

interface IProps {
    noPadding?: boolean;
    style?: ViewStyle;
    children: React.ReactNode;
}

const Page: React.FC<IProps> = ({ noPadding, style, children, ...props }) => {
    return (
        <View {...props} style={[styles.page, !noPadding && styles.padding, style]}>
            {children}
        </View>
    )
}

export default Page;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#fff',
    },
    padding: {
        paddingHorizontal: 26,
    },
});
