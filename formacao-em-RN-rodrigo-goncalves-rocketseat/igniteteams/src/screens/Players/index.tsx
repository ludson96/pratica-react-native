import React from 'react';
import { FlatList } from 'react-native';

import { Container } from './style';

import ButtonIcon from '~/components/ButtonIcon';
import { Form } from '~/components/ButtonIcon/styles';
import Filter from '~/components/Filter';
import Header from '~/components/Header';
import Highlight from '~/components/Highlight';
import Input from '~/components/input';

export default function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Highlight title="Nome da turma" subtitle="Adicione a galera e separe os times" />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <FlatList
        data={['Time A', 'Time B']}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Filter title={item} />}
        horizontal
      />
    </Container>
  );
}
