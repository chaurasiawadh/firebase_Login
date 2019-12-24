import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import localStorage from 'react-native-local-storage';
import styles from './style/styles';

class index extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    localStorage
      .get('users')
      .then(userData => {
        console.warn(`user data`, userData);
        if (userData == null) this.props.navigation.replace('Login');
      })
      .catch(err => console.warn(`Error: ${err}`));
  }

  _profile = () => {
    this.props.navigation.navigate('Profile');
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._profile} style={styles.box}>
          <Text style={styles.txt}>Profile</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default index;
