import type { VariantProps } from '@gluestack-ui/nativewind-utils';
import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';

import { centerStyle } from './styles';

type ICenterProps = ViewProps & VariantProps<typeof centerStyle>;

const Center = React.forwardRef<React.ElementRef<typeof View>, ICenterProps>(
  ({ style, ...props }, ref) => {
    return <View style={[styles.center, style]} {...props} ref={ref} />;
  }
);

Center.displayName = 'Center';

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, // Ensure the view takes all available space
  },
});

export { Center };
