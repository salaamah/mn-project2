import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
        <View>
            <Text style = {styles.welcome}>
                Welcome to{'\n'}Al-Masjid An-Nabawi!
            </Text>
        </View>
        <View style={styles.buttons}>
            <TouchableOpacity
            onPress={()=>{
                navigation.navigate('Login');
            }
            }
            >
                <Text style={styles.button}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{
                navigation.navigate('Register');
            }
            }
            >
                <Text style={styles.button}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{
                navigation.navigate('UseServices');
            }
            }
            >
                <Text style={styles.button}>Continue without login</Text>
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
    button: {
        textAlign: 'center',
        backgroundColor: 'blue',
        marginTop: 10,
        paddingVertical: 10,
        marginHorizontal:80,
        borderRadius: 10,
        fontSize: 18
    }
})