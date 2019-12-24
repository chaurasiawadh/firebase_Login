import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconE from 'react-native-vector-icons/Entypo';
import IconM from 'react-native-vector-icons/MaterialIcons';
import styles from '../style/menuStyle';
import * as firebase from 'firebase';



class Menu extends Component {
  constructor(props){
    super(props)
  }
  handleLogout = () => {    
    const auth = firebase.auth();
    console.warn('clicked')
    this.props.navigation.navigate("Home")
  };

   


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.touch}>
          <IconE name="user" size={28} color="#777777" />
          <Text style={styles.txt}>Your Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}>
          <Icon name="qrcode" size={28} color="#777777" />
          <Text style={styles.txt}>Your Account Code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}>
          <IconE name="notification" size={28} color="#777777" />
          <Text style={styles.txt}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}>
          <IconE name="chat" size={28} color="#777777" />
          <Text style={styles.txt}>Chat Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}>
          <IconE name="lock" size={28} color="#777777" />
          <Text style={styles.txt}>Privacy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}>
          <IconE name="help" size={28} color="#777777" />
          <Text style={styles.txt}>Help & About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}>
          <IconM name="feedback" size={28} color="#777777" />
          <Text style={styles.txt}>Feedback</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

export default Menu;
