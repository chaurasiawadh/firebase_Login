import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import * as firebase from 'firebase';
import localStorage from 'react-native-local-storage';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Entypo';
import styles from '../style/editProfileStyle';
import colors from '../../../component/Color/colors';

const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class editProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.navigation.getParam('name'),
      email: this.props.navigation.getParam('email'),
      mobile: this.props.navigation.getParam('mobile'),
      profilePic: this.props.navigation.getParam('profilePic'),
      
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

  onSubmit = () => {
    firebase
      .firestore()
      .collection('users')
      .doc(this.state.email)
      .update(this.state)
      .then(data => {
        localStorage
          .save('users', {
            name: this.state.name,
            mobile: this.state.mobile,
            email: this.state.email,
            profilePic: this.state.profilePic,
          })
          .then(data => {
            this.props.navigation.navigate('Home');
          });
      })
      .catch(err => console.warn(err));
};
  render() {    
    return (
      <View style={styles.container}>
        <Image source={this.state.profilePic} style={styles.imgs} />

        <TouchableOpacity style={styles.icn} onPress={this.pickImage}>
          <Icon name="camera" size={30} color={colors.darPrimary}/>
        </TouchableOpacity>
        <TextInput
          value={this.state.email}
          style={[styles.input, {color: '#999'}]}
          editable={false}
          placeholder="Email"
          autoCapitalize="none"
        />
        <TouchableOpacity>
          <TextInput
            name="name"
            onChangeText={name => this.setState({name})}
            value={this.state.name}
            style={styles.input}
            placeholder="Name"
            autoCapitalize="none"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <TextInput
            name="mobile"
            onChangeText={mobile => this.setState({mobile})}
            value={this.state.mobile}
            keyboardType="phone-pad"
            maxLength={10}
            style={styles.input}
            placeholder="Mobile"
            autoCapitalize="none"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={this.onSubmit}>
          <Text style={styles.btnTxt}>Update</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default editProfile;
