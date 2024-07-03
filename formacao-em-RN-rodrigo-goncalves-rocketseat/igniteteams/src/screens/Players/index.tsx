import React from 'react';

import { Container } from './style';

import Header from '~/components/Header';
import Highlight from '~/components/Highlight';

export default function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Highlight title="Nome da turma" subtitle="Adicione a galera e separe os times" />
    </Container>
  );
}
