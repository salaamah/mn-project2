import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const PrayerTimes = () => {
  const [timeTable, setTimeTable] = useState({});

  useEffect( ()=>{
    fetch('https://api.aladhan.com/v1/timingsByCity?city=Madinah&country=Saudi%20Arabia%20&method=4')
    .then(res=>res.json())
    .then(data=>setTimeTable(data.data.timings))
  },[]);

  const Fazr = timeTable.Fajr;
  return (
    <View>
      <Text>Prayer Times in Madinah</Text>
      <Text>Fazr: {Fazr}</Text>
    </View>
  )
}

export default PrayerTimes

const styles = StyleSheet.create({})