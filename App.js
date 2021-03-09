import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Footer from './src/components/Footer';
import { Form } from './src/components/Form';
import ResultCalculation from './src/components/ResultCalculation';
import colors from './src/utils/colors';

export default function App() {

  const [ capital, setCapital ] = useState( null )
  const [ interest, setInterest ] = useState( null )
  const [ month, setMonth ] = useState( null )
  const [ total, setTotal ] = useState( null )
  const [ errorMessage, setErrorMessage ] = useState( '' )

  useEffect(() => {
    ( month && capital && month ) ? calculate() : reset()  
  }, [ capital, interest, month ])

  const calculate = () => {
    reset()
    if( !capital ) {
      setErrorMessage('Añade la cantidad que quieres solicitar')
    } else if( !interest ) {
      setErrorMessage('Añade el interes del prestamo')
    } else if ( !month ) {
      setErrorMessage('Selecciona los meses a pagar')
    } else {
      const i = interest / 100
      const fee = capital / (( 1 - Math.pow( i + 1, -month)) / i )
      setTotal({
        monthlyFee: fee.toFixed( 2 ).replace( '.', ',' ),
        totalPayable: ( fee * month ).toFixed( 2 ).replace( '.', ',')
      })
    }
  }
  
  const reset = () => {
    setErrorMessage('')
    setTotal( null )
  }

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor={ colors.COLOR_PRIMARY } />
      <SafeAreaView style={ styles.droidSafeArea }>
          <View style={ styles.background } />
          <Text style={ styles.titleApp }>Cotizador de Prestamos</Text>
          <Form 
            setCapital={ setCapital }
            setInterest={ setInterest }
            setMonth={ setMonth }
          />
      </SafeAreaView>

      <ResultCalculation 
        errorMessage={ errorMessage } 
        total={ total }
        capital={ capital }
        interest={ interest }
        month={ month } 
      />
      
      <Footer calculate={ calculate } />

    </>
  );
}

const styles = StyleSheet.create({
  droidSafeArea: {
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    height: 290,
  },
  background: {
    backgroundColor: colors.COLOR_PRIMARY,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 200,
    width: '100%',
    position: 'absolute',
    zIndex: -1,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  }
});
