import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { StyleSheet } from 'react-native';
import Typography from '../../components/atoms/Typography';
import Page from '../../components/molecules/Page';

export const HomeScreen: React.FC = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Карта'
        })
    }, []);

    return (
        <Page style={styles.container}>
            <Typography>HomePage</Typography>
        </Page>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})