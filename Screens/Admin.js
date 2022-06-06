import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Admin = () => {
  return (
    <View>
      <Text style={styles.text}>
        <Text style={{fontSize: 24,fontWeight:'bold'}}>Admin can:{'\n'}</Text>
        Manage accounts{'\n'}Enable and disable services{'\n'}Add new services, etc.
      </Text>
      
    </View>
  )
}

export default Admin

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontWeight:'normal',
    height:100, 
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 40
},
})