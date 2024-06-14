import React from 'react';

import { Container, Subtitle, Title } from './style';

type Props = {
  title: string;
  subtitle: string;
};

export default function Highlight({ title, subtitle }: Props) {
  return (
    <Container>
      <Title>{title}</Title>

      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
