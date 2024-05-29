import React from 'react'
import { Text, TextInput, View, TouchableOpacity } from 'react-native'

import styles from './styles';

export default function Home() {
  function handleAddNewTodo() {
    console.log("Eu fui pressionado!!!");
    
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Terça, 28 de maio de 2024.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do evento'
          placeholderTextColor='#6B6B6B'
        />

        <TouchableOpacity style={styles.button} onPress={handleAddNewTodo}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}