import { Center } from 'components/ui/center';
import { Spinner } from 'components/ui/spinner';
import React from 'react';
import colors from 'tailwindcss/colors';

export default function Loading() {
  return (
    <Center>
      <Spinner size="large" color={colors.gray[500]} />
    </Center>
  );
}
