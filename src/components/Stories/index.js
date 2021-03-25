import React from 'react';
import { StoriesList, StoryName, Story, StoryImage, StoryBorder, StoryBorderNearFriend } from './styles';

export default function Stories() {
  return (
    <StoriesList horizontal={true} showsHorizontalScrollIndicator={false}>

      <Story>
        <StoryImage source={require('../../assets/img/users/profile.jpg')} />
        <StoryName>Seu story</StoryName>
      </Story>

      <Story>
        <StoryBorder>
          <StoryImage source={require('../../assets/img/users/friend1.jpg')} />
        </StoryBorder>
        <StoryName>joao45...</StoryName>
      </Story>

      <Story>
        <StoryBorder>
          <StoryImage source={require('../../assets/img/users/friend2.jpg')} />
        </StoryBorder>
        <StoryName>lariss...</StoryName>
      </Story>

      <Story>
        <StoryBorderNearFriend>
          <StoryImage source={require('../../assets/img/users/friend3.jpg')} />
        </StoryBorderNearFriend>
        <StoryName>maria5...</StoryName>
      </Story>

      <Story>
        <StoryBorder>
          <StoryImage source={require('../../assets/img/users/friend4.jpg')} />
        </StoryBorder>
        <StoryName>james7...</StoryName>
      </Story>

      <Story>
        <StoryBorder>
          <StoryImage source={require('../../assets/img/users/friend5.jpg')} />
        </StoryBorder>
        <StoryName>ana_si...</StoryName>
      </Story>

    </StoriesList>
  );
}