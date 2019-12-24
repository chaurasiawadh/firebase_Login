import {createStackNavigator} from 'react-navigation';
import React from 'react';
import {View} from 'react-native';
import Login from './screen/Login/index';
import Register from './screen/Login/component/page/register';
import Home from './screen/Home/index';
import Profile from './screen/Profile/index';
import LoginCheck from './screen/Login/component/page/loginCheck';
import EditProfile from "./screen/Profile/component/editProfile";
import * as firebase from "firebase";

// var firebaseConfig = {
//   apiKey: 'AIzaSyATRqlKBgGuTTYnJRN48hnwjHkNG3ou9Ao',
//   authDomain: 'fir-app-14dc8.firebaseapp.com',
//   databaseURL: 'https://fir-app-14dc8.firebaseio.com',
//   projectId: 'fir-app-14dc8',
//   storageBucket: 'fir-app-14dc8.appspot.com',
//   messagingSenderId: '259465472246',
//   appId: '1:259465472246:web:64ac1b67e9c7cf516464d7',
//   measurementId: 'G-0SSH0GKCFQ',
// };

// firebase.initializeApp(firebaseConfig);

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      header: <View />,
      headerStyle: {
        elevation: 0,
        marginTop: 20,
      },
    }),
  },
  Login: {
    screen: Login,
    navigationOptions: () => ({
      header: <View />,
      headerStyle: {
        elevation: 0,
        marginTop: 20,
      },
    }),
  },
  Register: {
    screen: Register,
    navigationOptions: () => ({
      header: <View />,
      headerStyle: {
        elevation: 0,
        marginTop: 20,
      },
    }),
  },
  
  Profile: {
    screen: Profile,
    navigationOptions: () => ({
      header: <View />,
      headerStyle: {
        elevation: 0,
        marginTop: 20,
      },
    }),
  },
  EditProfile: {
    screen: EditProfile,
    navigationOptions: () => ({
      header: <View />,
      headerStyle: {
        elevation: 0,
        marginTop: 20,
      },
    }),
  },
});
export default AppNavigator;
