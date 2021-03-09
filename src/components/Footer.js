import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import colors from '../utils/colors'

export default function Footer({ calculate }) {
    return (
        <View style={ styles.viewFooter}>
            <TouchableOpacity 
                style={ styles.button } 
                onPress={ calculate }
            >
                <Text style={ styles.text }>Calcular</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    viewFooter: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: colors.COLOR_PRIMARY,
        height: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
        textAlign: 'center'
    },
    button: {
        backgroundColor: colors.COLOR_PRIMARY_DARK,
        padding: 16,
        borderRadius: 20,
        width: '75%',
    }
})
