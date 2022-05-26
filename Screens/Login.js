import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';

const Login = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
        <View style={styles.loginForm}>
            <Text style={styles.header}>Login</Text>
            <TextInput
                style={styles.TextInput}
                placeholder="Email."
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                style={styles.TextInput}
                placeholder="Password."
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
            />
            <TouchableOpacity 
                style={styles.button} onPress={()=>{
                    navigation.navigate('UseServices');}}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('Register');}}>
                <Text style={styles.noAccount}>Don't have account?{'\n'}Register.</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        backgroundColor:"#36485f",
        paddingLeft:60,
        paddingRight:60,
      },
      loginForm:{
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
      TextInput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom:30,
        color: 'red',
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
      noAccount: {
        marginTop:10,
        textAlign:'center'
      },
})