import React from 'react';
import { AppRegistry, Text, View } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import Card from './src/components/Card';

const App = () => {
  return (
      <View>
        <Header headerText={'Albums!'}/>
        <AlbumList />
      </View>
  );
};

AppRegistry.registerComponent('albums', () => App);
