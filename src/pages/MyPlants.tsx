import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import waterDrop from '../assets/waterdrop.png'
import { Header } from '../components/Header';

import colors from '../styles/colors';
import { FlatList } from 'react-native-gesture-handler';
import { PlantProps } from '../libs/storage';

export function MyPlants() {
    const [] = useState<PlantProps[]>([])
    const [loading, setLoading] = useState(true)
    
    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.spotlight}>
                <Image 
                    source={waterDrop}
                    style={styles.spotlightImage}
                />
                <Text style={styles.spotlightText}>
                    suahsuhau
                </Text>
            </View>

            <View style={styles.plants}>
                <Text styles={styles.plantsTitle}>
                    Próximas regadas
                </Text>

                <FlatList 
                    data
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingTop: 50,
        backgroundColor: colors.background,
    }
})