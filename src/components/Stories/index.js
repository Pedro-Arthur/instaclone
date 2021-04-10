import React from 'react';
import { Container, StoriesList, StoryName, Story, StoryProfile, LastStory, StoryImage, StoryBorder, ProfileStoryBorder, StoryBorderNearFriend } from './styles';

export default function Stories() {
  return (
    <Container>
      <StoriesList horizontal={true} showsHorizontalScrollIndicator={false}>

        <StoryProfile>
          <ProfileStoryBorder>
            <StoryImage source={require('../../assets/img/users/profile.jpg')} />
          </ProfileStoryBorder>
          <StoryName>Seu story</StoryName>
        </StoryProfile>

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

        <LastStory>
          <StoryBorder>
            <StoryImage source={require('../../assets/img/users/friend5.jpg')} />
          </StoryBorder>
          <StoryName>ana_si...</StoryName>
        </LastStory>

      </StoriesList>
    </Container>
  );
}