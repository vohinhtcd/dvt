import React from 'react';
import {View, Text, Button,StyleSheet, TouchableOpacity, Image,FlatList,ActivityIndicator} from 'react-native';
export default class MainScreen extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            dataSource: [
              {id: 1, mon:'Toán',diem:'7'},
              {id: 2,mon:'Văn',diem:'6'},
              {id: 3,mon:'Lịch sử',diem:'8'},
              {id: 4,mon:'Địa Lý',diem:'7'},
              {id: 5,mon:'Tiếng Anh',diem:'9'},
              {id: 6,mon:'Hóa học',diem:'5'},
              {id: 7,mon:'Sinh học',diem:'7'},
            ],
            
        }
    }
    
    render(){
        const {navigate} = this.props.navigation;
      return(
        <View style={{padding: 10}}>
          <Text style={{textAlign: "center", fontSize: 25, fontWeight: "bold"}}>Danh sách điểm các môn học</Text>

        <FlatList style={{marginTop: 30}} data={this.state.dataSource} renderItem={({item}) => (
        <View style={[Styles.div]}>
          <Text style={{flex: 2}}>{item.mon}</Text>
          <Text style={{flex: 1}} >{item.diem}</Text>
        </View>
      )}
      keyExtractor={({id}, index) => id}
    />
    <View style={{marginTop: 30}}>
      <Button title="Trang Chu" onPress={() => navigate('Home')} />
    </View>
        </View>
      )
    }
}

const Styles = StyleSheet.create({
    div:{
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 20,
        flex: 3,
    },

  });