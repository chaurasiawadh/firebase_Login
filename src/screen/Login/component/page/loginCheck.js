import React, {Component} from 'react';
import {View,StatusBar} from 'react-native';
import localStorage from 'react-native-local-storage';
import colors from '../../../../component/Color/colors'

class loginCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
    };
  }

  async componentDidMount() {
    let userData = await localStorage.get('users');
    this.setState({userData});
  }

  log = () => {
    this.props.navigation.navigate('Login');
  };

  home = () => {
    this.props.navigation.navigate('Home');
  };
  render() {
    return (

      <View>
           <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
          {this.state.userData === null ? this.log() : this.home()}</View>
    );
  }
}

export default loginCheck;
