import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { Container } from './styles';
import Button from '../../components/Button';
import GroupCard from '../../components/GroupCard';
import Header from '../../components/Header';
import Highlight from '../../components/Highlight';
import ListEmpty from '../../components/ListEmpty';
import Input from '../../components/input';

export default function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new');
  }

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        ListEmptyComponent={() => <ListEmpty message="Nenhuma turma cadastrada." />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
      />

      <Input />

      <Button title="Criar um novo grupo" onPress={handleNewGroup} />
    </Container>
  );
}
