import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import Typography from '../../components/atoms/Typography';
import Input from '../../components/molecules/Input';
import Page from '../../components/molecules/Page';
import { IS_IOS } from '../../utils/screenSize';

export const LoginScreen: React.FC = () => {
    const [phone, setPhone] = useState('');

    return (
        <Page style={styles.container}>
            <KeyboardAvoidingView
                behavior={IS_IOS ? 'padding' : undefined}
                style={{ flex: 1, justifyContent: 'center' }}
            >
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={styles.containerScroll}
                    scrollEnabled={false}
                >
                    <Input onChangeText={setPhone} value={phone} title="Номер телефона" />
                </ScrollView>
            </KeyboardAvoidingView>
        </Page>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerScroll: {
        flex: 1,
        justifyContent: 'center',
        paddingBottom: 44
    }
})