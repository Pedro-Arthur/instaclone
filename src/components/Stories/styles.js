import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  padding: 10px 0;
  border-bottom-width: 0.5px;
  border-color: #DDD;
`;

export const StoriesList = styled.ScrollView``;

export const Story = styled.TouchableOpacity`
  align-items: center;
  margin-left: 10px;
`;

export const StoryProfile = styled.TouchableOpacity`
  align-items: center;
  margin: 0 0 0 10px;
`;

export const LastStory = styled.TouchableOpacity`
  align-items: center;
  margin: 0 10px 0 10px;
`;

export const StoryImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 100px;
`;

export const StoryName = styled.Text`
  font-size: 12px;
`;

export const StoryBorder = styled.View`
  border-radius: 100px;
  padding: 3px;
  border-width: 1px;
  border-color: #E42045;
`;

export const ProfileStoryBorder = styled.View`
  border-radius: 100px;
  padding: 3px;
  border-width: 1px;
  border-color: #A9A9A9;
`;

export const StoryBorderNearFriend = styled.View`
  border-radius: 100px;
  padding: 3px;
  border-width: 1px;
  border-color: green;
`;