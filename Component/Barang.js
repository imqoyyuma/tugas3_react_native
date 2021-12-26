import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class Barang extends Component {
  constructor() {
    super();
    this.state = {
      jumlah: 0,
    };
  }

  handleTambah = () => {
    this.setState({
      jumlah: this.state.jumlah + 1,
    });
  };

  handleKurang = () => {
    if (this.state.jumlah > 0) {
      this.setState({
        jumlah: this.state.jumlah - 1,
      });
    } else {
      alert('Jumlah Tidak Boleh Kurang Dari 0');
    }
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Text
          style={{
            flex: 1,
            backgroundColor: '#9bab4e',
            textAlign: 'center',
            color: 'purple',
            fontSize: 25,
          }}>
          SELAMAT DATANG
        </Text>
        <Text
          style={{
            textAlign: 'right',
            marginBottom: 10,
            marginRight: 10,
          }}>
          Jumlah: {this.state.jumlah}
        </Text>
        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            fontSize: 20,
          }}>
          Silahkan Tekan Tombol Di Bawah
        </Text>
        <Text style={{flex: 2}}>
          <View flexDirection="row">
            <TouchableOpacity
              style={styles.button1}
              onPress={this.handleTambah}>
              <Text style={{color: 'white'}}>+</Text>
            </TouchableOpacity>
            {
              <TouchableOpacity
                style={styles.button2}
                onPress={this.handleKurang}>
                <Text style={{color: 'white'}}>-</Text>
              </TouchableOpacity>
            }
          </View>
        </Text>
        <Text
          style={{
            flex: 5,
            fontSize: 60,
            textAlign: 'center',
            color: 'darkblue',
          }}>
          {this.state.jumlah}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button1: {
    alignItems: 'center',
    backgroundColor: 'green',
    paddingLeft: 50,
    paddingRight: 50,
    padding: 10,
    marginRight: 40,
    marginLeft: 60,
  },
  button2: {
    alignItems: 'center',
    backgroundColor: 'darkred',
    paddingLeft: 50,
    paddingRight: 50,
    padding: 10,
  },
});
