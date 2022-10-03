import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import useAssets from '../../hooks/useAssets';
import Typography from '../atoms/Typography';

interface IProps {
    variant?: string;
    children: React.ReactNode;
}

const Button: React.FC<IProps & TouchableOpacityProps> = ({ disabled, children }) => {
    const { color } = useAssets();
    return (
        <TouchableOpacity disabled={disabled} style={[styles.container, { backgroundColor: color.kit_mainColor }]}>
            <Typography color={color.kit_white}>{children}</Typography>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 9,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Button;