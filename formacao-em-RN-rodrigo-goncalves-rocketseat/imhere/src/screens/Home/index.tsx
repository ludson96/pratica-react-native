import React from 'react'
import { Text, TextInput, View, TouchableOpacity } from 'react-native'
import styles from './styles';
import Participant from '../../components/Participant';
import { inputExampleMap } from '../../data/InputMap';

export default function Home() {
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

      {inputExampleMap.map((person) => {
        return <Participant name={person.name} onRemove={() => handleRemoveParticipant(person.name)} />
      })}

    </View>
  )
}