import React, { Component, PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
            aa: 2000
         };
    }
    render() {
        console.log('render state::', this.state.aa);
        
        return (
            <View>
    <Text style={{fontSize:30}}>{this.state.aa}</Text>
                <TouchableOpacity 
                onPress={() => this.setState({aa: 2000})}
                style={{backgroundColor:"red", padding:20, alignSelf:"center"}}>
                    <Text>Update</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default index;