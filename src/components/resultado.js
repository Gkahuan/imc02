import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Resultado = () => {
  return (
    <View>
      <Text>{valores.menssagemResultadodoIMC}</Text>  
      <Text>{valores.resultadoIMC}</Text>
    </View>
  )
}

export default Resultado

const styles = StyleSheet.create({})
