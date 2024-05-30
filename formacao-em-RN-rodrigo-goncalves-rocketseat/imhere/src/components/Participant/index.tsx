import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { propsName } from '../../types/IName'

export default function Participant({name, onRemove}: propsName) {
  return (
    <View style={styles.container}>

      <Text style={styles.name}>
        {name}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>
          -
        </Text>
      </TouchableOpacity>

    </View>
  )
}