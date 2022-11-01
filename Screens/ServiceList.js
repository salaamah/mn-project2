import { ImageBackground, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import data from './data';

const ServiceList = () => {
    const [servces, setServices] = useState([]);
    useEffect( ()=>{
        fetch('https://mn-server.herokuapp.com/services')
        .then(res=>res.json())
        .then(result=>setServices(result))
    },[]);
    const allServices = [...data, ...servces];
    const [statusCmd, setStatusCmd] = useState("Active");
    const handleUpdate = (status, s_id) =>{ 
        status == "Active" ? setStatusCmd('disabled') : setStatusCmd('Active')
        const url = `https://mn-server.herokuapp.com/services/${s_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                //'Accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({statusCmd})  
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('success', data);
            Alert.alert("Service status updated!")
        })
    }
  return (
    <ImageBackground
        source={require('../assets/mn-bg-sky.png')}>
        <Text style={styles.text}>All Services</Text>
        <ScrollView style={styles.serviceContainer}>
        {
          allServices.map(({s_id, s_name, status, icon})=>(
              
            <View
              key = {s_id}
              style={styles.service}
              >
              <Image
                style={styles.image}
                source={icon}
                />
              <Text style={styles.text}>{s_name}{"\n"}status: {status}</Text>
              <TouchableOpacity
                onPress={()=>handleUpdate(status, s_id)
                    
                    
                    //try{
                        // fetch(`https://mn-server.herokuapp.com/services/${s_id}`,{
                        //     method: 'PUT',
                        //     headers: {
                        //         'Accept': 'application/json',
                        //         'content-type': 'application/json'
                        //     },
                        //     body: JSON.stringify(s)  
                        // })
                        // .then(res=>res.json())
                        
                    // }catch(error){
                    //     Alert.alert(error.message);
                    //     console.log(error.message);
                    // }
                    //navigation.navigate("ServiceList");
                
                }>
                {status == "Active" 
                ? <Text style={styles.click}>Click to disable</Text> 
                : <Text style={styles.click}>Click to activate</Text>}
              </TouchableOpacity>
            </View>
            
          ))
        }
        </ScrollView>
    </ImageBackground>
  )
}

export default ServiceList

const styles = StyleSheet.create({
    serviceContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        //justifyContent: 'space-evenly',
        margin: 40,
      },
      image:{
        height:150,
        width:150,
        borderRadius:10,
      },
      service:{
        height:150,
        width:150,
        margin:84,
      },
      text:{
        textAlign:'center',
        fontSize:20,
        //color:'white'
      },
      click:{
        textAlign:'center',
        textDecorationLine: 'underline',
        color:"red",
        fontSize:20,
        marginTop:10
      }
})