import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Admin = ({navigation}) => {
  const [user, setUser] = useState();
  useEffect( ()=>{
    fetch('https://mn-server.herokuapp.com/users')
    .then(res=>res.json())
    .then(result=>setUser(result.length))
  },[]);

  const [services, setServices]= useState();
  useEffect( ()=>{
    fetch('https://mn-server.herokuapp.com/services')
    .then(res=>res.json())
    .then(result=>setServices(result.length))
  },[]);

  return (
    <ImageBackground 
      style={styles.bg}
      source={require('../assets/mn-bg2.png')}>
      <View style={styles.innerBox}>
        <Text>Number of users: {user}</Text>
        <Text>Number of services: {services}</Text>
        <TouchableOpacity      
          style={styles.button} 
          onPress={()=>{
            navigation.navigate("AddService");
            }
          }
          >
          <Text style={styles.buttonText}>Add new service</Text>            
        </TouchableOpacity>
      </View>      
    </ImageBackground>
  )
}

export default Admin

const styles = StyleSheet.create({
  bg:{
    height:"100%",
    width:"100%",
    flex:1,
    justifyContent:'center', 
           
},
  innerBox: {
      alignSelf: 'stretch',
      paddingLeft:60,
        paddingRight:60,
  },
  header:{
      fontSize: 24,
      color: '#fff',
      paddingBottom:10,
      marginBottom:40,
      borderBottomColor:'#199187',
      borderBottomWidth: 1
  },
  textInput:{
      alignSelf: 'stretch',
      height: 40,
      marginBottom:30,
      color: '#fff',
      borderBottomColor: '#f8f8f8',
      borderBottomWidth:1
  },
  button:{
      alignSelf:'stretch',
      alignItems:'center',
      padding:20,
      backgroundColor:'#59cbbd',
      marginTop:30,
  },
  buttonText:{
      color:'#fff',
      fontWeight: 'bold'
  },
})