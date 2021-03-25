import styled from 'styled-components/native';

export const StoriesList = styled.ScrollView`
  background-color: #FFF;
  padding: 3% 0;
  border-bottom-width: 0.5px;
  border-color: #DDD;
`;

export const Story = styled.TouchableOpacity`
  align-items: center;
  margin-left: 5%;
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

export const StoryBorderNearFriend = styled.View`
  border-radius: 100px;
  padding: 3px;
  border-width: 1px;
  border-color: green;
`;