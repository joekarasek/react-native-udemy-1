import React, { Component} from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
  // const { viewStyle } = styles;
  componentWillMount() {
    console.log('Component Will Mount');
  }

  render() {
    return (
        <View>
          <Text>Album List!!!</Text>
        </View>
    );
  }
}

const styles = {
  viewStyle: {
    elevation: 1,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center'
  }
};


export default AlbumList;
