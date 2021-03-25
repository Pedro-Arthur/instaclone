import React from 'react';
import { Container, IconButton, IconImage, ProfileButton, ProfileImage } from './styles';

export default function BottomBar() {
  return (
    <Container>
      <IconButton>
        <IconImage source={require('../../assets/img/home.png')} />
      </IconButton>

      <IconButton>
        <IconImage source={require('../../assets/img/search.png')} />
      </IconButton>

      <IconButton>
        <IconImage source={require('../../assets/img/reels.png')} />
      </IconButton>

      <IconButton>
        <IconImage source={require('../../assets/img/bag.png')} />
      </IconButton>

      <ProfileButton>
        <ProfileImage source={require('../../assets/img/users/profile.jpg')} />
      </ProfileButton>
    </Container>
  );
}