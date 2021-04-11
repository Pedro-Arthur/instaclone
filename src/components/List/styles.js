import styled from 'styled-components/native';

export const Likes = styled.Text`
  font-weight: bold;
  margin: 0 10px;
`;

export const FeedArea = styled.View`
  background-color: #FFF;
  margin: 0 0 20px 0;
`;

export const InfoUser = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 10px;
`;

export const ProfileView = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  padding: 8px 0;
`;

export const ProfileImage = styled.Image`
  width: 27px;
  height: 27px;
  border-radius: 100px;
`;

export const ProfileName = styled.Text`
  font-size: 14px;
  text-align: left;
  color: #000000;
  padding-left: 10px;
  font-weight: bold;
`;

export const ButtonIcon = styled.TouchableOpacity``;

export const PostImage = styled.Image`
  height: 300px;
  width: 100%;
`;

export const UserActions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

export const ButtonArea = styled.View`
  flex-direction: row;
  width: 30%;
  justify-content: space-between;
  align-items: center;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 10px;
`;

export const FooterName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #000;
`;

export const FooterDescription = styled.Text`
  font-size: 14px;
  color: #000;
`;

export const Comments = styled.Text`
  font-size: 14px;
  color: #A9A9A9;
`;

export const ButtonIconComments = styled.TouchableOpacity`
  margin: 0 10px;
`;

export const AddCommentUser = styled.View`
  flex-direction: row;
  margin: 5px 10px;
  align-items: center;
`;

export const AddCommentText = styled.Text`
  padding-left: 10px;
  font-size: 14px;
  color: #A9A9A9;
`;

export const PostedAgoText = styled.Text`
  margin: 0 10px;
  font-size: 10px;
  color: #A9A9A9;
`;