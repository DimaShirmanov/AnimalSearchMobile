import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView, View } from 'react-native';
import Button from '../../components/molecules/Button';
import Input from '../../components/molecules/Input';
import Page from '../../components/molecules/Page';
import { IS_IOS } from '../../utils/screenSize';

export const LoginScreen: React.FC = () => {
    const [phone, setPhone] = useState('');

    const handleLoginPress = () => { };

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
                    <Input
                        keyboardType="number-pad"
                        onChangeText={setPhone}
                        value={phone}
                        title="Номер телефона"
                    />
                    <Button disabled={phone.length < 7}>Авторизоваться</Button>
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