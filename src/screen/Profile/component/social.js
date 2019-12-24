import React, {Component} from 'react';
import {View, TouchableOpacity, Linking} from 'react-native';

import Icon from 'react-native-vector-icons/Foundation';
import IconF from 'react-native-vector-icons/FontAwesome';
import styles from '../style/socialStyle';

class social extends Component {
  fb = () => {
    Linking.openURL(`https://www.facebook.com/`);
  };

  twitter = () => {
    Linking.openURL(`https://www.twitter.com/`);
  };

  skype = () => {
    Linking.openURL(`https://www.skype.com/`);
  };
  linkedin = () => {
    Linking.openURL(`https://www.linkedin.com/`);
  };

  sendOnWhatsApp = text => {
    Linking.openURL(`whatsapp://send?text=${text}`);
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.fb} style={styles.touch}>
          <Icon name="social-facebook" color="#3b5998" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.twitter} style={styles.touch}>
          <Icon name="social-twitter" color="#00acee" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.skype} style={styles.touch}>
          <Icon name="social-skype" color="#00aff0" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.linkedin} style={styles.touch}>
          <Icon name="social-linkedin" color="#0e76a8" size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.sendOnWhatsApp("I'm using whatsApp.")}
          style={styles.touch}>
          <IconF name="whatsapp" color="#25d366" size={30} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default social;
