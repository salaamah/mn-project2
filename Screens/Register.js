import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {useState} from 'react';
import {auth} from '../firebase'

const Register = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
            navigation.navigate('UseServices');
        } catch (error) {
            console.log(error.message);
        }
    };

    //const handleLogin = async () =>{};

    //const handleLogout = async () =>{};
    
  return (
    <View style={styles.container}>
        <View style = {styles.regForm}>
            <Text style={styles.header}>Registration</Text>
            <TextInput 
                style={styles.textInput} 
                placeholder='Your name' 
                underlineColorAndroid={'transparent'}/>
            <TextInput 
                style={styles.textInput} 
                placeholder='Your email' 
                onChangeText={(email) => setEmail(email)}
                underlineColorAndroid={'transparent'}/>
            <TextInput 
                style={styles.textInput} 
                placeholder='Password' 
                onChangeText={(password) => setPassword(password)}
                secureTextEntry={true} 
                underlineColorAndroid={'transparent'}/>
            <TouchableOpacity 
                style={styles.button} 
                onPress={handleRegister}
            >
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