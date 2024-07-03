import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonIconStyleProps, Container, Icon } from './styles';

type Prosp = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconStyleProps;
};

export default function ButtonIcon({ icon, type = 'PRIMARY', ...rest }: Prosp) {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  );
}
