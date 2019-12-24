import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../style/interestStyle';

const list = [
  {type: 'Gaming'},
  {type: 'Movies'},
  {type: 'Football'},
  {type: 'Musics'},
  {type: 'Cooking'},
];
class Interests extends Component {
  render() {
    return (
      <View style={styles.container}>
        {list.map(i => (
          <TouchableOpacity style={styles.touch}>
            <Text style={styles.txt}>{i.type}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

export default Interests;