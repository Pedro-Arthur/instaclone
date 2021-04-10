import React from 'react';
import { Container, LogoButton, LogoImage, Icons, IconButton } from './styles';
import { Feather } from '@expo/vector-icons';

export default function Header() {
  return (
    <Container>
      <LogoButton>
        <LogoImage source={require('../../assets/img/logo.png')} />
      </LogoButton>

      <Icons>
        <IconButton>
          <Feather name="plus-square" size={24} color="black" />
        </IconButton>

        <IconButton>
          <Feather name="heart" size={24} color="black" />
        </IconButton>

        <IconButton>
          <Feather name="send" size={24} color="black" />
        </IconButton>
      </Icons>
    </Container>
  );
}