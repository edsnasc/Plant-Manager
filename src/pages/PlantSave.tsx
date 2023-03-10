import React, { useEffect, useState } from 'react';
import {
    Alert,
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    Platform,
    TouchableOpacity
} from 'react-native';
import { SvgCssUri } from 'react-native-svg';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function PlantSave(){
    return (
        <View style={StyleSheet.container}>
            <SvgCssUri 
                uri=""
                height={150}
                width={150}
            />

            <Text style={StyleSheet.plantName}>
                Nome da Planta
            </Text>

            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quasi tenetur dolorem eligendi nostrum 
                officiis accusamus et quidem! Quia eius ratione quos? 
                Libero corporis impedit placeat sequi maxime nemo deserunt.
            </Text>
            
        </View>
    )
}