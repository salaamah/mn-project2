import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const NewRequest = () => {
    const img = require("../assets/images/new-service-icon.jpg");
    const [servces, setServices] = useState([]);
    useEffect( ()=>{
        fetch('https://mn-server.herokuapp.com/services')
        .then(res=>res.json())
        .then(result=>setServices(result))
    },[]);

    const handlActivate = (status, s_id) =>{ 
        const url = `https://mn-server.herokuapp.com/services/${s_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                //'Accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({st:"Atcive"})  
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('success', data);
            Alert.alert("Service status updated!")
        })
    }
  return (
    <View>
      <Text style={styles.text}>New Service Requests</Text>
        <ScrollView style={styles.serviceContainer}>
        {
          servces.map(({s_id, s_name, status})=> (
            status == "Active" 
            ? null 
            :
            <View
              key = {s_id}
              style={styles.service}
              >
              <Image
                style={styles.image}
                source={img}
                />
              <Text style={styles.text}>{s_name}</Text>
              <TouchableOpacity
                onPress={()=>{handlActivate(status, s_id)}
                }>
                <Text style={styles.click}>Click to accept</Text>
              </TouchableOpacity>
            </View>
            
          ))
        }
        </ScrollView>
    </View>
  )
}

export default NewRequest

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