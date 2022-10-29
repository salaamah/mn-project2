import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ServiceList = () => {
  return (
    <ImageBackground
        style={styles.bg}
        source={require('../assets/mn-bg-sky.png')}>
        <Text>ServiceList</Text>
        <ScrollView>
            
        </ScrollView>
    </ImageBackground>
  )
}

export default ServiceList

const styles = StyleSheet.create({})