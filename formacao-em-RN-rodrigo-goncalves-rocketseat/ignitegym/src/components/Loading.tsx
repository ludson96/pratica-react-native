import { Spinner } from 'components/ui/spinner';
import React from 'react';
import { View } from 'react-native';
import colors from 'tailwindcss/colors';

export default function Loading() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Spinner size="large" color={colors.gray[500]} />
    </View>
  );
}
