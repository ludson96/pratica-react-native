import React from 'react'
import { Text, View } from 'react-native'

import styles from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Ta na hora do Hu3
      </Text>

      <Text style={styles.eventDate}>
        Terça, 28 de maio de 2024.
      </Text>
    </View>
  )
}