import React from 'react';
import { Container, IconButton, ProfileButton, ProfileImage } from './styles';
import { Feather } from '@expo/vector-icons';

export default function BottomBar() {
  return (
    <Container>
      <IconButton>
        <Feather name="home" size={24} color="black" />
      </IconButton>

      <IconButton>
        <Feather name="search" size={24} color="black" />
      </IconButton>

      <IconButton>
        <Feather name="instagram" size={24} color="black" />
      </IconButton>

      <IconButton>
        <Feather name="shopping-bag" size={24} color="black" />
      </IconButton>

      <ProfileButton>
        <ProfileImage source={require('../../assets/img/users/profile.jpg')} />
      </ProfileButton>
    </Container>
  );
}