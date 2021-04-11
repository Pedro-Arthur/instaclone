import React, { useState } from 'react';
import { StatusBar, FlatList, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import List from './src/components/List';
import Header from './src/components/Header';
import BottomBar from './src/components/BottomBar';
import Stories from './src/components/Stories';

export default function App() {

  const [feed, setFeed] = useState([
    {
      id: '1',
      name: 'joao45alves',
      description: 'Que paisagem linda',
      profileImg: require('./src/assets/img/users/friend1.jpg'),
      postImg: require('./src/assets/img/posts/post1.jpg'),
      liked: true,
      likes: 1,
      comments: 41,
      postedAgo: '25 minutos'
    },
    {
      id: '2',
      name: 'larissa_silva12',
      description: 'Família é a base de tudo!',
      profileImg: require('./src/assets/img/users/friend2.jpg'),
      postImg: require('./src/assets/img/posts/post2.jpg'),
      liked: false,
      likes: 0,
      comments: 14,
      postedAgo: '45 minutos'
    },
    {
      id: '3',
      name: 'maria5pereira',
      description: 'Bora pra mais um dia de trabalho',
      profileImg: require('./src/assets/img/users/friend3.jpg'),
      postImg: require('./src/assets/img/posts/post3.jpg'),
      liked: false,
      likes: 3,
      comments: 112,
      postedAgo: '1 hora'
    },
    {
      id: '4',
      name: 'james74souza',
      description: 'Trabalho em equipe sempre!',
      profileImg: require('./src/assets/img/users/friend4.jpg'),
      postImg: require('./src/assets/img/posts/post4.jpg'),
      liked: true,
      likes: 1,
      comments: 2,
      postedAgo: '7 minutos'
    },
    {
      id: '5',
      name: 'ana_silveira15',
      description: 'Vamos Brasil!!!',
      profileImg: require('./src/assets/img/users/friend5.jpg'),
      postImg: require('./src/assets/img/posts/post5.jpg'),
      liked: false,
      likes: 32,
      comments: 21,
      postedAgo: '4 horas'
    }
  ]);

  return (
    <Container>
      <StatusBar backgroundColor='#FFF' barStyle='dark-content' />

      <Header />

      <ScrollView>
        <Stories />
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={feed}
          renderItem={({ item }) => <List data={item} />}
        />
      </ScrollView>

      <BottomBar />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #FFF;
`;