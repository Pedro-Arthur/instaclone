import React from 'react';
import { StatusBar, ScrollView } from 'react-native';

import Feed from './src/components/Feed';
import Header from './src/components/Header';
import BottomBar from './src/components/BottomBar';
import Stories from './src/components/Stories';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor='#FFF' barStyle='dark-content' />

      <Header />

      <ScrollView showsVerticalScrollIndicator={false} >
        <Stories />
        <Feed />
      </ScrollView>

      <BottomBar />
    </>
  );
}