import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Headers extends Component {
  render() {
    return (
      <View>
        <Text
          style={{
            backgroundColor: '#9bab4e',
            paddingTop: 20,
            color: 'white',
            textAlign: 'center',
          }}>
          Tugas 3 React Native
        </Text>
      </View>
    );
  }
}
