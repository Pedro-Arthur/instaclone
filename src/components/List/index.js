import React, { Component } from 'react';
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
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: this.props.data
    };

    this.loadIcon = this.loadIcon.bind(this);
    this.showLikes = this.showLikes.bind(this);
    this.like = this.like.bind(this);
  }

  loadIcon(liked) {
    return liked ? <MaterialCommunityIcons name="heart" size={26} color="#C5011B" /> : <MaterialCommunityIcons name="heart-outline" size={26} color="black" />;
  }

  like() {
    let feed = this.state.feed;

    if (feed.liked === true) {
      this.setState({
        feed: {
          ...feed,
          liked: false,
          likes: feed.likes - 1
        }
      });
    } else {
      this.setState({
        feed: {
          ...feed,
          liked: true,
          likes: feed.likes + 1
        }
      });
    }
  }

  showLikes(likes) {
    let feed = this.state.feed;

    if (feed.likes <= 0) {
      return;
    }

    return <Likes>{feed.likes} {feed.likes > 1 ? 'curtidas' : 'curtida'}</Likes>;
  }

  render() {
    return (
      <FeedArea>

        <InfoUser>
          <ProfileView>
            <ProfileImage source={this.state.feed.profileImg} />
            <ProfileName>{this.state.feed.name}</ProfileName>
          </ProfileView>
          <ButtonIcon>
            <MaterialCommunityIcons name="dots-vertical" size={26} color="black" />
          </ButtonIcon>
        </InfoUser>

        <PostImage resizeMode="cover" source={this.state.feed.postImg} />

        <UserActions>
          <ButtonArea>
            <ButtonIcon onPress={this.like}>
              {this.loadIcon(this.state.feed.liked)}
            </ButtonIcon>
            <ButtonIcon>
              <Feather name="message-circle" size={24} color="black" />
            </ButtonIcon>
            <ButtonIcon>
              <Feather name="send" size={24} color="black" />
            </ButtonIcon>
          </ButtonArea>
          <ButtonIcon>
            <Feather name="bookmark" size={24} color="black" />
          </ButtonIcon>
        </UserActions>

        {this.showLikes(this.state.feed.likes)}

        <Footer>
          <FooterName>{this.state.feed.name}</FooterName>
          <FooterDescription> {this.state.feed.description}</FooterDescription>
        </Footer>

        <ButtonIconComments>
          <Comments>Ver todos os {this.state.feed.comments} comentários</Comments>
        </ButtonIconComments>

        <AddCommentUser>
          <ProfileImage source={require('../../assets/img/users/profile.jpg')} />
          <ButtonIcon>
            <AddCommentText>Adicione um comentário...</AddCommentText>
          </ButtonIcon>
        </AddCommentUser>

        <PostedAgoText>há {this.state.feed.postedAgo}</PostedAgoText>

      </FeedArea>
    );
  }
}