import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

//const image = { uri: "https://picsum.photos/200/300"};

const Home = ({navigation}) => {
  return (
    <View>    
        <View>
            <Text style = {styles.welcome}>
                Welcome to{'\n'} The Electronic Services of{'\n'}Al-Masjid An-Nabawi!
            </Text>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity
            style={styles.button}
            onPress={()=>{
                navigation.navigate('Login');
            }
            }
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.button}
            onPress={()=>{
                navigation.navigate('Register');
            }
            }
            >
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.button}
            onPress={()=>{
                navigation.navigate('UseServices');
            }
            }
            >
                <Text style={styles.buttonText}>Continue without login</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    welcome: {
        color: 'green',
        height:100, 
        fontSize: 28,
        textAlign: 'center',
        marginVertical: 40
    },
    buttonContainer:{
        //flex: 1,
        //backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    button:{
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#199187",
        //backgroundColor: "#FF1493",
    },
    buttonText: {
         fontSize: 20
    },
})