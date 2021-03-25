import styled from 'styled-components/native';

export const Likes = styled.Text`
  font-weight: bold;
  margin: 0 3%;
`;

export const FeedArea = styled.View``;

export const InfoUser = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 3%;
`;

export const ProfileView = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  padding: 8px 0;
`;

export const ProfileImage = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 100px;
`;

export const ProfileName = styled.Text`
  font-size: 14px;
  text-align: left;
  color: #000000;
  padding-left: 5px;
  font-weight: bold;
`;

export const ButtonIcon = styled.TouchableOpacity``;

export const PostImage = styled.Image`
  height: 300px;
  align-items: center;
`;

export const UserActions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 3%;
`;

export const UserActionsIcon = styled.Image`
  width: 22px;
  height: 22px;
`;

export const ButtonArea = styled.View`
  flex-direction: row;
  width: 30%;
  justify-content: space-between;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 3%;
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
  margin: 0 3%;
`;

export const AddCommentUser = styled.View`
  flex-direction: row;
  margin: 3%;
  align-items: center;
`;

export const AddCommentText = styled.Text`
  padding-left: 10px;
  font-size: 14px;
  color: #A9A9A9;
`;

export const PostedAgoText = styled.Text`
  margin-bottom: 20px;
  margin: 0 3%;
  font-size: 10px;
  color: #A9A9A9;
`;