import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ResultCalculation({ errorMessage, total, capital, interest, month }) {
    return (
        <View style={ styles.content }>
            { total && (
                <View style={ styles.boxResult }>
                    <Text style={ styles.title }>Resumen</Text>
                    <DataResult title='Cantidad solicitada:' value={ `$ ${ capital }` } />
                    <DataResult title='Interes %:' value={ `${ interest } %` } />
                    <DataResult title='Plazos:' value={ `${month} meses` } />
                    <DataResult title='Pago mensual:' value={ `$ ${total.monthlyFee}` } />
                    <DataResult title='Total a pagar:' value={ `$ ${total.totalPayable}` } />
                </View>
            )}
            <View style={ styles.boxResult }>
                <Text style={ styles.error}>{ errorMessage }</Text>
            </View>
        </View>
    )
}

const DataResult = ({ title, value }) => {
    return (
        <View style={ styles.value }>
            <Text>{ title }</Text>
            <Text>{ value }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 40,
    },
    boxResult: {
        padding: 30,
    },
    title:{
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    value: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    }, 
    error: {
        textAlign: 'center',
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 20,
    }
})
