import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import SelectList from 'react-native-dropdown-select-list'
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {useState} from 'react';
import {auth} from '../firebase'

const Register = ({navigation}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [selected, setSelected] = useState("");
    const data = [
                    {key:'1',value:'Visitor'},
                    {key:'2',value:'Service Provider'}
                ];

    const handleRegister = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
            const userData = {name, email, selected};
            fetch('https://mn-server.herokuapp.com/users',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userData)  
            })
            .then(res=>res.json())
            .catch((error) => console.warn("fetch error:", error))
            .then(data=>{
                console.log('success',data)
            })  
            navigation.navigate('UseServices');
        } catch (error) {
            console.log(error.message);
        }
    };

  return (
    <ImageBackground 
        style={styles.bg}
        source={require('../assets/mn-bg2.png')}>
        <View style = {styles.regForm}>
            <Text style={styles.header}>Registration</Text>
            <TextInput 
                style={styles.textInput} 
                placeholder='Your name'
                onChangeText={(name) => setName(name)}
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
            <SelectList 
                setSelected={setSelected}
                data={data} 
                search={false}
                defaultOption={{ key:'3', value:'Select user type' }}
            />
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
    </ImageBackground>
  )
}

export default Register

const styles = StyleSheet.create({
    bg:{
        height:"100%",
        width:"100%",
        flex:1,
        justifyContent:'center',        
    },
    regForm: {
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
    haveAccount:{
        marginTop:10,
        textAlign:'center'
    }
})