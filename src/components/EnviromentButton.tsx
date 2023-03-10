import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
// import { RectButton, RectButtonProps } from 'react-native-gesture-handler' verificado que essa lib não funcionou no android
import { TouchableOpacityProps } from 'react-native/Libraries/Components/Touchable/TouchableOpacity';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnviromentButtonProps extends TouchableOpacityProps {
    title: string;
    active?: boolean;
}

export function EnviromentButton({ title, active = false, ...rest }: EnviromentButtonProps) {
    return (
        <TouchableOpacity
            style={[styles.container, active && styles.containerActive]}
            {...rest}
        >
            <Text style={[styles.text, active && styles.textActive]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.shape,
        width: 76,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginHorizontal: 5
    },
    containerActive: {
        backgroundColor: colors.green_light
    },
    text: {
        color: colors.heading,
        fontFamily: fonts.text
    },
    textActive: {
        fontFamily: fonts.heading,
        color: colors.green_dark,
    }
});