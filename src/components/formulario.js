import { StyleSheet } from 'react-native'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState }  from 'react'
import Resultado from './resultado'

const formulario = () => {
  return (
    <View>
        <View>
            <Text>Altura (cm)</Text>
            <TextInput
            placeholder="Ex.: 1.72"
            keyboardType="numeric"
            />
            <Text>Peso (kg) </Text>
            <TextInput
            placeholder="Ex.: 80.5"
            keyboardType="numeric"
            />
        </View>    
    </View>
  )
}

export default Formulario

const styles = StyleSheet.create({})