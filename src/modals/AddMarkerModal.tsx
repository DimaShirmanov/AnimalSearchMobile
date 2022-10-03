import React from 'react';
import { StyleSheet, View } from 'react-native';
import Typography from '../components/atoms/Typography';

const AddMarkerModal: React.FC = ({ }) => {
    return (
        <View style={styles.container}>
            <Typography>Добавление нового животного</Typography>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        marginHorizontal: 26
    }
})

export default AddMarkerModal;