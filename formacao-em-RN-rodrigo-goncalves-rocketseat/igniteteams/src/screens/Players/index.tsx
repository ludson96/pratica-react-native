import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList } from 'react-native';

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

type RouteParams = {
  group: string;
};

export default function Players() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState(['Ludson']);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="Adicione a galera e separe os times" />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
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
        keyExtractor={(item) => item}
        renderItem={({ item }) => <PlayerCard name={item} onRemove={() => {}} />}
        ListEmptyComponent={<ListEmpty message="Nenhum usuário ingressou na turma" />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
      />

      <Button title="Remover turma" type="SECONDARY" />
    </Container>
  );
}
