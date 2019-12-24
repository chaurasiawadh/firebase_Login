import React, {Component} from 'react';
import styles from '../style/registerStyle';
import colors from '../../../../component/Color/colors';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Image,
 ScrollView 
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Entypo';

import localStorage from 'react-native-local-storage';
// import * as firebase from 'firebase';
const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: 'AIzaSyATRqlKBgGuTTYnJRN48hnwjHkNG3ou9Ao',
  authDomain: 'fir-app-14dc8.firebaseapp.com',
  projectId: 'fir-app-14dc8',
});

var db = firebase.firestore();

const auth = firebase.auth();

const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      mobile: '',
      email: '',
      password: '',
      profilePic: '',
      errormsg: null,
    };
  }

  pickImage = () => {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        alert('You cancelled image picker 😟');
      } else if (response.error) {
        alert('And error occured: ', response.error);
      } else {
        const source = {uri: response.uri};
        this.setState({
          profilePic: source,
        });
      }
    });
  };

  log = () => {
    this.props.navigation.navigate('Login');
  };

  home = async (name, mobile, email, password, profilePic) => {
    await localStorage.save('users', {
      name,
      mobile,
      email,
      password,
      profilePic,
    });
    this.props.navigation.navigate('Home');
  };

  validate = email => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === false) {
      this.setState({errormsg: 'email address not correct.'});
    } else {
      this.setState({email, errormsg: ''});
    }
  };

  handleRegister = () => {
    const {name, mobile, email, password, profilePic} = this.state;
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(
        db
          .collection('users')
          .doc(email)
          .set({
            name: name,
            mobile: mobile,
            email: email,
            password: password,
            profilePic: profilePic,
          })
          .then(this.home(name, mobile, email, password, profilePic))
          .catch(function(e) {
            this.setState({errormsg: e});
          }),
      )

      .catch(e => this.setState({errormsg: e}));
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.profilePic} style={styles.imgs} />
        <TouchableOpacity onPress={this.pickImage}>
          <Icon name="camera" size={30} color={colors.primary} />
        </TouchableOpacity>
        <TextInput
          style={styles.email}
          placeholder="Name"
          placeholderTextColor={colors.skyBlack}
          autoCapitalize="none"
          onChangeText={name => this.setState({name})}
        />

        <TextInput
          style={styles.email}
          placeholder="Mobille no"
          placeholderTextColor={colors.skyBlack}
          minLength={10}
          maxLength={10}
          keyboardType="numeric"
          autoCapitalize="none"
          onChangeText={mobile => this.setState({mobile})}
        />

        <TextInput
          style={styles.email}
          placeholder="email addess"
          placeholderTextColor={colors.skyBlack}
          autoCapitalize="none"
          onChangeText={email => this.validate(email)}
        />
        <TextInput
          style={styles.email}
          placeholder="password"
          placeholderTextColor={colors.skyBlack}
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={password => this.setState({password})}
        />

        <Text style={styles.err}>{this.state.errormsg}</Text>
        <TouchableOpacity
          onPress={() => this.handleRegister()}
          style={[
            styles.box,
            {
              opacity:
                this.state.name != '' &&
                this.state.mobile != '' &&
                this.state.profilePic != '' &&
                this.state.email != '' &&
                this.state.password != ''
                  ? 1
                  : 0.4,
            },
          ]}
          disabled={
            this.state.name == '' ||
            this.state.mobile == '' ||
            this.state.profilePic == '' ||
            this.state.email == '' ||
            this.state.password == ''
          }>
          <Text style={styles.txt}>Registration</Text>
        </TouchableOpacity>

        <View style={styles.sign}>
          <Text style={styles.account}>Already have an account</Text>

          <TouchableOpacity onPress={() => this.log()} style={styles.signup}>
            <Text style={styles.signTxt}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default index;
