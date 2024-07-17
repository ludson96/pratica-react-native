import { useRoute } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, FlatList, TextInput } from 'react-native';

import { Container, HeaderList, NumberOfPlayers } from './style';

import Button from '~/components/Button';
import ButtonIcon from '~/components/ButtonIcon';
import { Form } from '~/components/ButtonIcon/styles';
import Filter from '~/components/Filter';
import Header from '~/components/Header';
import Highlight from '~/components/Highlight';
import ListEmpty from '~/components/ListEmpty';
import PlayerCard from '~/components/PlayerCard';
import Input from '~/components/input';
import { PlayerStorageDTO } from '~/storage/player/PlayerStorageDTO';
import { playerAddByGroup } from '~/storage/player/playerAddByGroup';
import { playerRemoveByGroup } from '~/storage/player/playerRemoveByGroup';
import { playersGetByGroupAndTeam } from '~/storage/player/playersGetByGroupAndTeam';
import { AppError } from '~/utils/AppError';

type RouteParams = {
  group: string;
};

export default function Players() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const [newPlayerName, setNewPlayerName] = useState('');

  const route = useRoute();
  const { group } = route.params as RouteParams;

  const newPlayerNameInputRef = useRef<TextInput>(null);

  async function handleAddPLayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert('Nova pessoa', 'Informe o nome da pessoa para adicionar.');
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    };

    try {
      await playerAddByGroup(newPlayer, group);

      newPlayerNameInputRef.current?.blur();

      setNewPlayerName('');
      fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova pessoa', error.message);
      } else {
        console.log(error);
        Alert.alert('Nova pessoa', 'Não foi possivel adicionar');
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await playersGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);
      Alert.alert('Pessoas', 'Não foi possivel carregar as pessoas do time selecionado.');
    }
  }

  async function handlePLayerRemove(playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group);
      fetchPlayersByTeam();
    } catch (error) {
      console.log(error);
      Alert.alert('Remove pessoa', 'Não foi possivel remover essa pessoa.');
    }
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="Adicione a galera e separe os times" />

      <Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          inputRef={newPlayerNameInputRef}
          onSubmitEditing={handleAddPLayer}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" onPress={handleAddPLayer} />
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter title={item} isActive={item === team} onPress={() => setTeam(item)} />
          )}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard name={item.name} onRemove={() => handlePLayerRemove(item.name)} />
        )}
        ListEmptyComponent={<ListEmpty message="Nenhum usuário ingressou na turma" />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
      />

      <Button title="Remover turma" type="SECONDARY" />
    </Container>
  );
}
