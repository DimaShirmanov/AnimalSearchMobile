import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import useAssets from '../../hooks/useAssets';
import Typography from '../atoms/Typography';

interface IProps {
    onChangeText: (value: string) => void;
    title?: string;
}

const Input: React.FC<IProps & TextInputProps> = ({
    title,
    placeholder = '',
    value,
    onChangeText,
    ...rest
}) => {
    const { color } = useAssets();
    const [focused, setFocused] = useState(false);
    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 8,
            }}>
                <Typography variant="h5">
                    {title}
                </Typography>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', zIndex: -1 }}>
                <TextInput
                    value={value}
                    placeholder={placeholder}
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
                    {...rest}
                />
            </View>

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
        paddingVertical: 16,
        paddingHorizontal: 16,
        fontSize: 16,
        height: 48,
        borderRadius: 9,
        textAlignVertical: 'center',
    },
})

export default Input;