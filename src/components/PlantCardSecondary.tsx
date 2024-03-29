import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View, Animated } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { SvgFromUri } from 'react-native-svg'

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Feather } from '@expo/vector-icons';

interface PlantProps extends TouchableOpacityProps {
    data: {
        name: string;
        photo: string;
        hour: string;
    };
    handleRemove: () => void;
}

export const PlantCardSecondary = ({ data, handleRemove, ...rest }: PlantProps) => {
    return (
        <GestureHandlerRootView>

            <Swipeable
                overshootRight={false}
                renderRightActions={() => {
                    return (
                        <Animated.View>
                            <TouchableOpacity
                                style={styles.buttonRemove}
                                onPress={handleRemove}
                            >
                                <Feather
                                    name="trash"
                                    size={32}
                                    color={colors.white}
                                />
                            </TouchableOpacity>
                        </Animated.View>
                    );
                }}
            >
                <TouchableOpacity
                    style={styles.container}
                    {...rest}
                >
                    <SvgFromUri
                        uri={data.photo}
                        width={50}
                        height={50}
                    />
                    <Text style={styles.title}>
                        {data.name}
                    </Text>
                    <View style={styles.details}>
                        <Text style={styles.timeLabel}>
                            Regar às
                        </Text>
                        <Text style={styles.time}>
                            {data.hour}
                        </Text>
                    </View>
                </TouchableOpacity>
            </Swipeable>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    container: {
        maxWidth: '100%',
        paddingHorizontal: 10,
        paddingVertical: 25,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.shape,
        marginVertical: 5,
    },
    title: {
        flex: 1,
        marginLeft: 10,
        fontFamily: fonts.heading,
        fontSize: 17,
        color: colors.heading,
    },
    details: {
        alignItems: 'flex-end'
    },
    timeLabel: {
        fontSize: 16,
        fontFamily: fonts.text,
        color: colors.body_light,
    },
    time: {
        marginTop: 5,
        fontSize: 16,
        fontFamily: fonts.heading,
        color: colors.body_dark
    },
    buttonRemove: {
        width: 100,
        height: 85,
        backgroundColor: colors.red,
        marginTop: 15,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        right: 20,
        paddingLeft: 15
    }
})