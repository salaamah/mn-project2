import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ServiceProvider = () => {
  return (
    <View>
      <Text style={styles.text}>
        <Text style={{fontSize: 24,fontWeight:'bold'}}>Service Provider can:{'\n'}</Text>
        Submit new service{'\n'}See provided services
      </Text>
    </View>
  )
}

export default ServiceProvider

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