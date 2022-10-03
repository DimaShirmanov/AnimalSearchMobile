import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { StyleSheet } from 'react-native';
import Map from '../../components/molecules/Map';
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
            <Map />
        </Page>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
})