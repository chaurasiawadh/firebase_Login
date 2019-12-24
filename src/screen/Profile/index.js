import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Button,
} from 'react-native';
import colors from '../../component/Color/colors';
import localStorage from 'react-native-local-storage';
import Social from './component/social';
import Menu from './component/menu';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Interests from './component/interests';
import styles from './style/style';
import * as firebase from "firebase"

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      header: true,
      name: '',
      mobile: '',
      email: '',
      profilePic: '',
    };
  }
  gotoHome = ()=>{
    firebase.auth().signOut().then(()=>{
      localStorage.clear("users").then(()=>{
        this.props.navigation.replace('Login')
      })
    }).catch(err=>console.warn(`Error: ${err}`))
  }

  editProfile = () => {
    
    this.props.navigation.navigate('EditProfile', {
      name: this.state.name,
      mobile: this.state.mobile,
      email: this.state.email,
      profilePic: this.state.profilePic,
    });
  };

  async componentDidMount() {
    let {name, mobile, email, profilePic} = await localStorage.get('users');
    console.warn('111111', profilePic);
    
    this.setState({
      name,
      mobile,
      email,
      profilePic,
    });
  }

  handleScroll = event => {
    if (event.nativeEvent.contentOffset.y >= 80) {
      this.setState({
        header: false,
      });
    } else {
      this.setState({
        header: true,
      });
    }
  };

  render() {
    
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.darPrimary} />
        {this.state.header ? (
          <View>
            <ImageBackground
              source={{
                uri:
                  'https://images.pexels.com/photos/133953/pexels-photo-133953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              }}
              imageStyle={{resizeMode: 'cover'}}
              style={{width: '100%', opacity: 1}}>
              <View style={styles.header}></View>

              <View style={styles.head}>
                <Text 
                numberOfLines={1}
                style={styles.title}>{this.state.name}</Text>
                <TouchableOpacity onPress={this.editProfile}>
                  <Icon
                    name="edit"
                    style={{marginTop: 25}}
                    color="#999"
                    size={25}
                  />
                </TouchableOpacity>
              </View>
              { console.warn(this.state.profilePic)}
              <View style={styles.img}>
                <Image style={styles.dp} source={this.state.profilePic} />
              </View>
            </ImageBackground>
          </View>
        ) : (
          <View style={styles.headerSort}>
            <ImageBackground
              source={{
                uri:
                  'https://images.pexels.com/photos/133953/pexels-photo-133953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              }}
              imageStyle={{resizeMode: 'cover'}}
              style={{width: '100%', opacity: 1}}>
              <View style={styles.header2}>
                <Text style={styles.name2}>{this.state.name}</Text>
              </View>

              <View style={styles.head2} />
              <View style={styles.img2}>
                <Image style={styles.dp2} source={this.state.profilePic} />
              </View>
            </ImageBackground>
          </View>
        )}

        <ScrollView
          style={this.state.header ? null : styles.scroll}
          onScroll={this.handleScroll}>
          <View style={styles.users}>
            <Text style={styles.userName}>{this.state.email}</Text>
            <Text style={styles.userName}>+91 {this.state.mobile}</Text>
          </View>

          <View>
            <Interests />
          </View>
          <View style={styles.social}>
            <Social />
          </View>

          <Menu/>
          <TouchableOpacity style={styles.btn} onPress={()=>this.gotoHome()}>
            <Text style={styles.btnTxt}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default Profile;
