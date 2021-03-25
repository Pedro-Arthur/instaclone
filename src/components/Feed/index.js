import React, { useState } from 'react';
import {
  Likes,
  FeedArea,
  InfoUser,
  ProfileView,
  ProfileImage,
  ProfileName,
  ButtonIcon,
  PostImage,
  UserActions,
  UserActionsIcon,
  ButtonArea,
  Footer,
  FooterName,
  FooterDescription,
  Comments,
  ButtonIconComments,
  AddCommentUser,
  AddCommentText,
  PostedAgoText
} from './styles';
import { Entypo } from '@expo/vector-icons';
import { FlatList } from 'react-native';

export default function Feed() {

  const [DATA, setDATA] = useState([
    {
      id: '1',
      name: 'joao45alves',
      description: 'Que paisagem linda',
      profileImg: require('../../assets/img/users/friend1.jpg'),
      postImg: require('../../assets/img/posts/post1.jpg'),
      liked: true,
      likes: 1,
      comments: 41,
      postedAgo: '25 minutos'
    },
    {
      id: '2',
      name: 'larissa_silva12',
      description: 'Família é a base de tudo!',
      profileImg: require('../../assets/img/users/friend2.jpg'),
      postImg: require('../../assets/img/posts/post2.jpg'),
      liked: false,
      likes: 0,
      comments: 14,
      postedAgo: '45 minutos'
    },
    {
      id: '3',
      name: 'maria5pereira',
      description: 'Bora pra mais um dia de trabalho',
      profileImg: require('../../assets/img/users/friend3.jpg'),
      postImg: require('../../assets/img/posts/post3.jpg'),
      liked: false,
      likes: 3,
      comments: 112,
      postedAgo: '1 hora'
    },
    {
      id: '4',
      name: 'james74souza',
      description: 'Trabalho em equipe sempre!',
      profileImg: require('../../assets/img/users/friend4.jpg'),
      postImg: require('../../assets/img/posts/post4.jpg'),
      liked: true,
      likes: 1,
      comments: 2,
      postedAgo: '7 minutos'
    },
    {
      id: '5',
      name: 'ana_silveira15',
      description: 'Vamos Brasil!!!',
      profileImg: require('../../assets/img/users/friend5.jpg'),
      postImg: require('../../assets/img/posts/post5.jpg'),
      liked: false,
      likes: 32,
      comments: 21,
      postedAgo: '4 horas'
    }
  ]);

  function like(likes, liked) {
    if (liked) {

    }
    else {

    }
  }

  function loadIcon(liked) {
    return liked ? require('../../assets/img/liked.png') : require('../../assets/img/like.png');
  }

  function showLikes(likes) {
    if (likes <= 0) {
      return;
    }
    return <Likes>{likes} {likes > 1 ? 'curtidas' : 'curtida'}</Likes>;
  }

  const List = ({ item }) => (
    <FeedArea>

      <InfoUser>
        <ProfileView>
          <ProfileImage source={item.profileImg} />
          <ProfileName>{item.name}</ProfileName>
        </ProfileView>
        <ButtonIcon>
          <Entypo name="dots-three-vertical" size={18} color="black" />
        </ButtonIcon>
      </InfoUser>

      <PostImage resizeMode="cover" source={item.postImg} />

      <UserActions>
        <ButtonArea>
          <ButtonIcon onPress={() => like(item.likes, item.liked)}>
            <UserActionsIcon source={loadIcon(item.liked)} />
          </ButtonIcon>
          <ButtonIcon>
            <UserActionsIcon source={require('../../assets/img/comment.png')} />
          </ButtonIcon>
          <ButtonIcon>
            <UserActionsIcon source={require('../../assets/img/send.png')} />
          </ButtonIcon>
        </ButtonArea>
        <ButtonIcon>
          <UserActionsIcon source={require('../../assets/img/save.png')} />
        </ButtonIcon>
      </UserActions>

      {showLikes(item.likes)}

      <Footer>
        <FooterName>{item.name}</FooterName>
        <FooterDescription> {item.description}</FooterDescription>
      </Footer>

      <ButtonIconComments>
        <Comments>Ver todos os {item.comments} comentários</Comments>
      </ButtonIconComments>

      <AddCommentUser>
        <ProfileImage source={require('../../assets/img/users/profile.jpg')} />
        <ButtonIcon>
          <AddCommentText>Adicione um comentário...</AddCommentText>
        </ButtonIcon>
      </AddCommentUser>

      <PostedAgoText>há {item.postedAgo}</PostedAgoText>

    </FeedArea>
  );

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={DATA}
      renderItem={List}
      keyExtractor={item => item.id}
    />
  );
}