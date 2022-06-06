import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native'
import React, {useState, useEffect} from 'react';

const UseServices = ({navigation}) => {
 
  return (
    <View style={styles.background}>
      <Text style={styles.text}>Available services</Text>
      <View style={styles.serviceContainer}>
        <TouchableOpacity style={styles.service}>
          <Image
            style={styles.image}
            source={require('../assets/images/PrayerTime.jpeg')}
          />
          <Text style={styles.text}>Prayer Times</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.service}>
          <Image
            style={styles.image}
            source={require('../assets/images/Guidance.jpeg')}
          />
          <Text style={styles.text}>Guidance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.service}>
          <Image
            style={styles.image}
            source={require('../assets/images/LostAndFound.jpeg')}
          />
          <Text style={styles.text}>Lost and Found</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.service}>
          <Image
            style={styles.image}
            source={require('../assets/images/Zamzam.jpeg')}
          />
          <Text style={styles.text}>Zamzam</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity 
        style={styles.button} 
        onPress={()=>{
          navigation.navigate("Home");}}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default UseServices

const styles = StyleSheet.create({
  background:{
    //backgroundColor:"#36485f",
    height:700
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
    marginTop:50,
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
    justifyContent: 'space-evenly'
  },
})