import React from 'react';

import { Container } from './style';
import GroupCard from '../../components/GroupCard';
import Header from '../../components/Header';
import Highlight from '../../components/Highlight';

export default function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
      <GroupCard />
    </Container>
  );
}
