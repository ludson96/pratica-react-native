import React, { useState } from 'react'
import { Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native'
import styles from './styles';
import Participant from '../../components/Participant';

export default function Home() {
  // const participant = useState(['Teste'])
  const participant = ['Ludson', 'Ludson1','Ludson2','Ludson3','Ludson4','Ludson5','Ludson6','Ludson7','Ludson8','Ludson9','Ludson10', 'Ludson11','Ludson12']

  function handleAddParticipant(name: string) {
    console.log(`Participante ${name} adicionado com sucesso!`);
  }

  function handleRemoveParticipant(name: string) {
    console.log(`Participante ${name} removido com sucesso!`);
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
          placeholder='Nome do participante'
          placeholderTextColor='#6B6B6B'
        />

        <TouchableOpacity style={styles.button} onPress={() => handleAddParticipant}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {
          participant.map((person) => (
            <Participant
              key={person}
              name={person}
              onRemove={() => handleRemoveParticipant(person)}
            />
          ))
        }
      </ScrollView>

    </View>
  )
}