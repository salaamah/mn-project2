import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ServiceProvider = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.bg}
      source={require('../assets/mn-bg2.png')}>
        <View style={styles.innerBox}>
        <Text style={styles.header}>This is Service Provider page. {'\n'}More options will be added</Text>

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

export default ServiceProvider

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
    fontSize: 20,
    color: '#fff',
    marginBottom:90,
    borderBottomColor:'#199187',
    borderBottomWidth: 1,
    textAlign:"center"
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