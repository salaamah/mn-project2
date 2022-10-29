import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View> 
        <ImageBackground
            style={styles.bg}
            source={require('../assets/mn-bg2.png')}
        >
            
                <Text style = {styles.welcome}>
                    Welcome to{'\n'}
                    <Text style={{fontSize: 23}}>
                        The Electronic Services of
                    </Text>
                    {'\n'}Al-Masjid An-Nabawi!
                </Text>
            
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
                navigation.navigate('Services');
            }
            }
            >
                <Text style={styles.buttonText}>Continue without login</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
        
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    welcome: {
        color: '#345B2A',
        fontWeight:'bold',
        //fontVariant:'',
        height:"20%", 
        fontSize: 28,
        textAlign: 'center',
        marginVertical: 40
    },
    bg:{
        height:"100%",
        width:"100%"
    },
    buttonContainer:{
        //flex: 1,
        //backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    button:{
        width: "65%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        //backgroundColor: "#199187",
        //backgroundColor: "#b78727",
        backgroundColor: "#7B7F1A",
        //backgroundColor: "#FF1493",
    },
    buttonText: {
         fontSize: 20
    },
})