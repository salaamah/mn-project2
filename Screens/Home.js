import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
      <Text style>
          Welcome to Al-Masjid An-Nabawi!
      </Text>
      <TouchableOpacity
      onPress={()=>{
          navigation.navigate('Login');
      }
    }
      >
          <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>{
          navigation.navigate('Register');
      }
    }
      >
          <Text>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>{
          navigation.navigate('UseServices');
      }
    }
      >
          <Text>Continue to services</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})