import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import useAssets from '../../hooks/useAssets';
import Typography from '../atoms/Typography';

interface IProps {
    title?: string;
    value: string;
    onChangeText: (value: string) => void;
}

const Input: React.FC<IProps> = ({
    title,
    value,
    onChangeText
}) => {
    const { color } = useAssets();
    const [focused, setFocused] = useState(false);
    return (
        <View style={styles.container}>
            <Typography variant="h5">
                {title}
            </Typography>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                style={[
                    styles.input,
                    { backgroundColor: focused ? color.kit_underlay : color.kit_lightGrey },
                ]}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                autoCorrect={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 12,
        alignSelf: 'stretch',
    },
    input: {
        flex: 1,
        paddingVertical: 18,
        paddingHorizontal: 16,
        fontSize: 16,
        height: 48,
        borderRadius: 9,
        textAlignVertical: 'center',
    },
})

export default Input;