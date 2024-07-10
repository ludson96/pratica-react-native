import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import { Container, Content, Icon } from './styles';

import Button from '~/components/Button';
import Header from '~/components/Header';
import Highlight from '~/components/Highlight';
import Input from '~/components/input';

export default function NewGroup() {
  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  async function handleNew() {
    navigation.navigate('players', { group });
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight title="Nova turma" subtitle="Crie a turma para adicionar as pessoas" />

        <Input placeholder="Nome da turma" onChangeText={setGroup} />

        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </Content>
    </Container>
  );
}
