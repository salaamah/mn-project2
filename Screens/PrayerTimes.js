import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const PrayerTimes = () => {
  const [timeTable, setTimeTable] = useState({});

  useEffect( ()=>{
    fetch('https://api.aladhan.com/v1/timingsByCity?city=Madinah&country=Saudi%20Arabia%20&method=4')
    .then(res=>res.json())
    .then(result=>setTimeTable(result.data.timings))
  },[]);
  //const {Fajr,Sunrise,Dhuhr,Asr,Maghrib,Isha} = timeTable.timings;
  const Fajr = timeTable.Fajr
  const Dhuhr = timeTable.Dhuhr;
  const Asr = timeTable.Asr;
  const Maghrib = timeTable.Maghrib;
  const Isha = timeTable.Isha;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Prayer Times in Madinah</Text>
      </View>

      <View style={styles.timesContainer}>
        <View style={styles.nameBox}>
          <Text>Fazr:</Text>
        </View>
        <View style={styles.timeBox}>
          <Text>{Fajr}</Text>
        </View>
        <View style={styles.nameBox}>
          <Text>Juhr:</Text>
        </View>
        <View style={styles.timeBox}>
          <Text>{Dhuhr}</Text>
        </View>
        <View style={styles.nameBox}>
          <Text>Asr:</Text>
        </View>
        <View style={styles.timeBox}>
          <Text>{Asr}</Text>
        </View>
        <View style={styles.nameBox}>
          <Text>Magrib:</Text>
        </View>
        <View style={styles.timeBox}>
          <Text>{Maghrib}</Text>
        </View>
        <View style={styles.nameBox}>
          <Text>Isha:</Text>
        </View>
        <View style={styles.timeBox}>
          <Text>{Isha}</Text>
        </View>
      </View>      
    </View>
  )
}

export default PrayerTimes

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  header:{
    width: '100%',
    height: '20%',
    backgroundColor: '#c8c8c8',
    alignItems: 'center',
    justifyContent: 'center'
  },
  timesContainer:{
    width: '100%',
    height: '80%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  nameBox:{
    width: '40%',
    height: '10%',
    padding: 10,
    backgroundColor: '#dbbabd',
    margin: '5%',
    borderRadius: 10
  },
  timeBox:{
    width: '40%',
    height: '10%',
    margin: '5%',
    padding: 10,
    backgroundColor: '#e4cbcd',
    borderRadius: 10
  }
})