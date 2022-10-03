import { StyleSheet, ImageBackground, TextInput, TouchableOpacity, Text, View } from 'react-native'
import React, { useState } from 'react'

const AddService = ({navigation}) => {
    const [title, setTitle] = useState("");
    const [sp, setSp]  = useState("");
    const [description, setDescription] = useState("");

    const handleAddService = () =>{
        const service = {title, sp, description};
        fetch('https://mn-server.herokuapp.com/services',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)  
        })
        .then(res=>res.json())
        .catch((error) => console.warn("fetch error:", error))
        .then(data=>{
            console.log('success',data)
        })  
        navigation.navigate('Admin');
    }

  return (
    <ImageBackground 
        style={styles.bg}
        source={require('../assets/mn-bg2.png')}>
        <View style = {styles.form}>
            <Text style={styles.header}>Add New Service</Text>
            <TextInput 
                style={styles.textInput} 
                placeholder='Title of the service'
                onChangeText={(title) => setTitle(title)}
                underlineColorAndroid={'transparent'}/>
            <TextInput 
                style={styles.textInput} 
                placeholder='Name of Service Provider' 
                onChangeText={(sp) => setSp(sp)}
                underlineColorAndroid={'transparent'}/>
            <TextInput 
                style={styles.textInput} 
                placeholder='Write description' 
                onChangeText={(description) => setDescription(description)}
                underlineColorAndroid={'transparent'}/>    
            <TouchableOpacity 
                style={styles.button} 
                onPress={handleAddService}
            >
                <Text style={styles.buttonText}>Add Service</Text>
            </TouchableOpacity>
        </View>
    </ImageBackground>
  )
}

export default AddService

const styles = StyleSheet.create({
    bg:{
        height:"100%",
        width:"100%",
        flex:1,
        justifyContent:'center',        
    },
    form: {
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