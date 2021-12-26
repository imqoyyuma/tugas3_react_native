import React, {Component} from 'react';
import {View} from 'react-native';
import Barang from './Component/Barang';
import Headers from './Component/Headers';

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Headers />
        <Barang />
      </View>
    );
  }
}

export default App;
