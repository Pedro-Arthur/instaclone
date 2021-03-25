import React from 'react';
import { Container, LogoButton, LogoImage, Icons, IconButton, IconImage } from './styles';

export default function Header() {
  return (
    <Container>
      <LogoButton>
        <LogoImage source={require('../../assets/img/logo.png')} />
      </LogoButton>

      <Icons>
        <IconButton>
          <IconImage source={require('../../assets/img/add.png')} />
        </IconButton>

        <IconButton>
          <IconImage source={require('../../assets/img/like.png')} />
        </IconButton>

        <IconButton>
          <IconImage source={require('../../assets/img/messenger.png')} />
        </IconButton>
      </Icons>
    </Container>
  );
}