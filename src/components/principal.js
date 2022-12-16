import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Formulario from './formulario'
import { StyleSheet, Text, View} from 'react-native'
import Titulo from './src/components/titulo';
import Principal from './src/components/principal';

export default function App() {
    return (
        <View style = {styules.container}>
            <Titulo />
            <Principal />
        </View>
    )
}

const Principal = () => {
  return (
    <View>
      <Text>Formulario</Text>
    </View>
  )
}

export default Principal

const styles = StyleSheet.create({})