import { StyleSheet, TouchableOpacity, Text, View, Image, ImageBackground, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import data from './data';

const Services = ({navigation}) => { 
  const [allServces, setAllServices] = useState([]);
  useEffect( ()=>{
    fetch('https://mn-server.herokuapp.com/services')
    .then(res=>res.json())
    .then(result=>setAllServices(result))
  },[]);

  const activeServices = allServces.filter(service=>service?.status == 'Active');
  const activedata = data.filter(service=>service?.status == 'Active');

  return (
    <ImageBackground 
    style={styles.bg}
    source={require('../assets/mn-bg-sky.png')}
      >      
      <Text style={styles.text}>Available services</Text>

      <ScrollView>
      <View style={styles.serviceContainer}>               
        {
          activedata.map(({s_id, s_name, icon, route})=>(
              
            <TouchableOpacity
              key = {s_id}
              style={styles.service}
              onPress={()=>{
                navigation.navigate(route);
              }
              }
              >
              <Image
                style={styles.image}
                source={icon}
                />
              <Text style={styles.text}>{s_name}</Text>
            </TouchableOpacity>
          ))
        }
        {
          activeServices.map(({s_id, s_name, status, icon, route})=>(
              
            <TouchableOpacity
              key = {s_id}
              style={styles.service}
              onPress={()=>{
                navigation.navigate("NewService");
              }
              }
              >
              <Image
                style={styles.image}
                source={require("../assets/images/new-service-icon.jpg")}
                />
              <Text style={styles.text}>{s_name}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
         
      <TouchableOpacity 
        style={styles.button} 
        onPress={()=>{
          navigation.navigate("Home");}}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  )
}

export default Services

const styles = StyleSheet.create({
  background:{
    backgroundColor:"#ffe6cc",
    height:700
  },
  bg:{
    height:"100%",
    width:"100%",
    flex:1,
    justifyContent:'center',        
},
  text:{
    textAlign:'center',
    fontSize:20,
    //color:'white'
  },
  button:{
    alignSelf:'center',
    alignItems:'center',
    padding:12,
    backgroundColor:'#345B2A',
    margin:50,
    width:120,
    borderRadius:5,
    
  },
  buttonText:{
    fontWeight:'bold',
    fontSize: 18,
  },
  service:{
    height:150,
    width:150,
    marginTop:35,
    
  },
  image:{
    height:150,
    width:150,
    borderRadius:10,
  },
  serviceContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
})