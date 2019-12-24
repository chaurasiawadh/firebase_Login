import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import styles from './component/style/styles';
import colors from '../../component/Color/colors';
import localStorage from 'react-native-local-storage';
import * as firebase from 'firebase';
import Home from "../Home/index";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMsg: null,
      userData:{}
    };
    
  }

  register = () => {
    this.props.navigation.navigate('Register');
  };

  home = (email, password) => {
    firebase.firestore().collection("users").doc(email).get().then(data=>{
      localStorage.save('users', {email, name: data.data().name, mobile: data.data().mobile, profilePic: data.data().profilePic }).then(()=>this.props.navigation.navigate("Home"));
    })
  };

  handleLogin = () => {
    const {email, password} = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.home(email, password))
      .catch(e => this.setState({errorMsg: e.message}));
  };

  async componentDidMount() {
    let userData = await localStorage.get('users');
    this.setState({userData});
  }

  renderItem = () => {
    return(
      <View  style={styles.container}>
        <TextInput
          style={styles.email}
          placeholder="email addess"
          placeholderTextColor={colors.skyBlack}
          autoCapitalize="none"
          onChangeText={email => this.setState({email})}
        />
        <TextInput
          style={styles.email}
          placeholder="password"
          placeholderTextColor={colors.skyBlack}
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={password => this.setState({password})}
        />

        <Text style={styles.err}>{this.state.errorMsg}</Text>

        <TouchableOpacity onPress={() => this.handleLogin()} style={[styles.box,  {
              opacity:
                this.state.email != '' &&
                this.state.password != ''
                  ? 1
                  : 0.4,
            },
          ]}
          disabled={this.state.email == '' || this.state.password == ''}
          >
          <Text style={styles.txt}>Login</Text>
        </TouchableOpacity>

        <View style={styles.sign}>
          <Text style={styles.account}>Don't have an account</Text>
          <TouchableOpacity
            onPress={() => this.register()}
            style={styles.signup}>
            <Text style={styles.signTxt}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  render(){
    return  (<View style={{flex: 1}}>{this.renderItem()}</View>)
  }
  }
export default index;
