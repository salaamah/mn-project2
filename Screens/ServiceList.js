import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import data from './data';

const ServiceList = () => {
    const [servces, setServices] = useState([]);
    useEffect( ()=>{
        fetch('https://mn-server.herokuapp.com/services')
        .then(res=>res.json())
        .then(result=>setServices(result))
    },[]);
    const allServices = [...data, ...servces];
  return (
    <ImageBackground
        style={styles.bg}
        source={require('../assets/mn-bg-sky.png')}>
        <Text>ServiceList</Text>
        <ScrollView>
        {
          allServices.map(({s_id, s_name, status, icon})=>(
              
            <View
              key = {s_id}
              style={styles.service}
              >
              <Image
                style={styles.image}
                source={icon}
                />
              <Text style={styles.text}>{s_name}{"\n"}status: {status}</Text>
              <TouchableOpacity
                onPress={(s_id, status)=>{
                    let statusCmd = {status:""};
                    status == "Active" ? statusCmd.status = "disabled" : statusCmd.status = "Active"
                    try{
                        fetch(`https://mn-server.herokuapp.com/services/:${s_id}`,{
                            method: 'PUT',
                            headers: {
                                'Accept': 'application/json',
                                'content-type': 'application/json'
                        },
                            body: JSON.stringify(statusCmd)  
                        })
                        .then(res=>res.json())
                    }catch(error){
                        Alert.alert(error.message);
                    }
                }
                }>
                {status == "Active" ? <Text>Click to disable</Text> : <Text>Click to activate</Text>}
              </TouchableOpacity>
            </View>
            
          ))
        }
        </ScrollView>
    </ImageBackground>
  )
}

export default ServiceList

const styles = StyleSheet.create({})