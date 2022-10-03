import React from 'react';
import { ColorValue, Text, TextProps, TextStyle } from 'react-native';

interface IProps {
    children: React.ReactNode;
    color?: ColorValue;
    variant?: string;
    center?: boolean;
}

type Dictionary = {
    [key: string]: TextStyle
}

const VARIANTS: Dictionary = {
    h1: {
        fontSize: 48,
        lineHeight: 64,
    },
    h2: {
        fontSize: 24,
        lineHeight: 32,
    },
    h3: {
        fontSize: 20,
        lineHeight: 32,
        fontWeight: '500',
    },
    h4: {
        fontSize: 16,
        lineHeight: 24,
    },
    h5: {
        fontSize: 14,
        lineHeight: 24,
    },
    h6: {
        fontSize: 14,
        lineHeight: 20,
    },
    body1: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: 'normal',
    },
    body2: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: 'normal',
        fontStyle: 'normal',
    },
    sub1: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: 'normal',
    },
    sub2: {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: 'normal',
    },
    allCaps: {
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 2,
        textTransform: 'uppercase',
    },
    sub3: {
        fontSize: 10,
        lineHeight: 12,
        fontWeight: 'normal',
    },
    mono: {
        fontSize: 14,
        lineHeight: 20,
    },
};

const Typography: React.FC<IProps & TextProps> = ({
    color = '#000',
    variant = 'body1',
    center,
    children,
    ...rest
}) => {
    const style: TextStyle = {
        ...VARIANTS[variant],
        ...(center && { textAlign: 'center' }),
        color,
    };
    return (
        <Text {...rest} style={style}>{children}</Text>
    );
};

export default Typography;