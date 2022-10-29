import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const PrayerTimes = () => {
  const [timeTable, setTimeTable] = useState({});

  useEffect( ()=>{
    fetch('https://api.aladhan.com/v1/timingsByCity?city=Madinah&country=Saudi%20Arabia%20&method=4')
    .then(res=>res.json())
    .then(result=>setTimeTable(result.data))
  },[]);
  
  const Fajr = timeTable.timings?.Fajr;
  const Dhuhr = timeTable.timings?.Dhuhr;
  const Asr = timeTable.timings?.Asr;
  const Maghrib = timeTable.timings?.Maghrib;
  const Isha = timeTable.timings?.Isha;
  const day = timeTable.date?.gregorian?.weekday?.en;
  const date = timeTable.date?.readable
  const hijri = timeTable.date?.hijri?.date
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{textAlign:"center",fontSize:20,fontWeight:'bold'}}>
          Prayer Times in Madinah
          {'\n'}{day}
          {'\n'}{date}
          {'\n'}{hijri}
        </Text>
      </View>

      <ImageBackground 
      style={styles.timesContainer}
      source={require('../assets/mn-bg-sky.png')}
      >
        <View style={styles.box}>
          <Text style={styles.text}>Fazr:</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>{Fajr}</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Juhr:</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>{Dhuhr}</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Asr:</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>{Asr}</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Magrib:</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>{Maghrib}</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Isha:</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>{Isha}</Text>
        </View>
      </ImageBackground>      
    </View>
  )
}

export default PrayerTimes

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  timesContainer:{
    height:"100%",
    width:"100%",
    flexDirection: 'row',
    flexWrap: 'wrap'      
},
  header:{
    width: '100%',
    height: '20%',
    backgroundColor: '#c8c8c8',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:"center",
  },
  box:{
    width: '40%',
    height: '10%',
    padding: 10,
    backgroundColor: "#7B7F40",
    margin: '5%',
    borderRadius: 10,
    justifyContent: "center"
  },

  text:{
    fontSize:22,
  },
})