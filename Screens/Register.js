import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style = {styles.regForm}>
            <Text style={styles.header}>Registration</Text>
            <TextInput style={styles.textInput} placeholder='Your name' underlineColorAndroid={'transparent'}/>
            <TextInput style={styles.textInput} placeholder='Your email' underlineColorAndroid={'transparent'}/>
            <TextInput style={styles.textInput} placeholder='Password' secureTextEntry={true} underlineColorAndroid={'transparent'}/>
            <TouchableOpacity style={styles.button} onPress={()=>{
                navigation.navigate('UseServices');}}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('Login');}}>
                <Text style={styles.haveAccount}>Already have an account?{'\n'}Login.</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:"#36485f",
        paddingLeft:60,
        paddingRight:60,
    },
    regForm: {
        alignSelf: 'stretch'
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
    haveAccount:{
        marginTop:10,
        textAlign:'center'
    }
})