import React from 'react';
import {View, Text, Button,StyleSheet, TouchableOpacity, TextInput} from 'react-native';
export default class HomeScreen extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            taikhoan: "",
            matkhau: "",
        }
    }
    _Login(){
        if(this.state.taikhoan=="vutien" && this.state.matkhau=="12345"){
            return this.props.navigation.navigate('Main');
        }else return alert('tai khoan hoac mat khau khong dung.');
        
    }
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',}}>
                <View>
                    <Text style={{textAlign: "center", fontSize: 25, fontWeight: "bold"}}>Nhập thông tin tài khoản để đăng nhập</Text>
                </View>
                <View style={{marginTop: 20}}>
                    <TextInput onChangeText={value => this.setState({taikhoan: value})} value={this.state.taikhoan} placeholder="Tai khoan"/>
                </View>
                <View style={{marginTop: 20}}>
                    <TextInput onChangeText={value => this.setState({matkhau: value})} value={this.state.matkhau} placeholder="Mat khau"/>
                </View>
                <Button style={{marginTop: 20}} title="Login" onPress={()=> this._Login()} />
            </View>
        )
    }
}

const Styles = StyleSheet.create({

    div:{
        justifyContent: 'center',
        flexDirection: 'row',
    },

  });