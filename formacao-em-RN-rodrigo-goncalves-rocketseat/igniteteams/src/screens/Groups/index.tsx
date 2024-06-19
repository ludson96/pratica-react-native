import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { Container } from './style';
import GroupCard from '../../components/GroupCard';
import Header from '../../components/Header';
import Highlight from '../../components/Highlight';

import { Title } from '~/components/GroupCard/styles';

export default function Groups() {
  const [groups, setGroups] = useState<string[]>();

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        ListEmptyComponent={() => <Title>Nenhum participante cadastrado.</Title>}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
    </Container>
  );
}
