import { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from 'react-native'
import styles from './styles';
import Participant from '../../components/Participant';

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('')

  function handleAddParticipant() {
  // Normaliza o nome do participante atual para maiúsculas
  const normalizedParticipantName = participantName.toUpperCase();
  
  // Use find para localizar o participante existente
  const existingParticipant = participants.find(participant => participant.toUpperCase() === normalizedParticipantName);

  if (existingParticipant) {
    return Alert.alert("Participante já existe", `Participante ${existingParticipant} já está cadastrado`);
  }

    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('');
  }

  function removeParticipant(name: string) {
    return setParticipants(prevState => prevState.filter(p => p !== name))
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => removeParticipant(name)
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
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
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Nenhum participante cadastrado.
          </Text>
        )}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
      />

    </View>
  )
}