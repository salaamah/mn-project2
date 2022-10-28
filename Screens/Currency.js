import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import SelectList from 'react-native-dropdown-select-list'

const Currency = () => {
    const [selectFrom, setSelectFrom] = useState("");
    const [selectTo, setSelectTo] = useState("");
    const [symbols, setSymbols] = useState("");
    const [amount, setAmount] = useState("");
    const [resultAmount, setResultAmount] = useState("");
    
    fetch("https://api.exchangerate.host/symbols")
        .then(response => response.json())
        .then(result => setSymbols(Object.getOwnPropertyNames(result?.symbols)))
        .catch(error => console.log('error', error));

    const handleConvert = () =>{
        fetch(`https://api.exchangerate.host/convert?from=${selectFrom}&to=${selectTo}`)
            .then(response => response.json())
            .then(result => setResultAmount(`${((result.result)*amount).toFixed(2)}`))
            .catch(error => console.log('error', error));
    }
    return (
    <ImageBackground
        style={styles.bg}
        source={require('../assets/mn-bg-sky.png')}>
        <View style = {styles.regForm}>
            <Text style={styles.header}>Currency Converter</Text>
            <SelectList
                style={styles.textInput}
                setSelected={setSelectFrom}
                data={symbols} 
                search={false}
                defaultOption={{key:'from',value:'Base Currency' }}
            />
            <Text style={{paddingVertical:5, paddingLeft:30}}>to</Text>
            <SelectList
                style={styles.textInput}
                setSelected={setSelectTo}
                data={symbols} 
                search={false}
                defaultOption={{key:'to',value:'Target Currency' }}
            />
            <TextInput 
                style={styles.textInput} 
                placeholder='Write amount'
                onChangeText={(amount) => setAmount(amount)}
                underlineColorAndroid={'transparent'}/>
            <TextInput 
                style={styles.textInput} 
                editable={false}
                value={resultAmount}
                placeholder='Result' 
                underlineColorAndroid={'transparent'}/>
            <TouchableOpacity 
                style={styles.button} 
                onPress={handleConvert}
            >
                <Text style={styles.buttonText}>Convert</Text>
            </TouchableOpacity>
        </View>
    </ImageBackground>
  )
}

export default Currency

const styles = StyleSheet.create({
    bg:{
        height:"100%",
        width:"100%",
        flex:1,
        justifyContent:'center',        
    },
    regForm: {
        alignSelf: 'stretch',
        paddingLeft:60,
        paddingRight:60,
    },
    header:{
        fontSize: 24,
        color: '#fff',
        paddingBottom:10,
        marginBottom:40,
        borderBottomColor:'#199187',
        borderBottomWidth: 1
    },
    textInput:{
        alignSelf: 'stretch',
        height: 40,
        marginVertical:10,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth:1,
        fontSize: 17
    },
    button:{
        alignSelf:'stretch',
        alignItems:'center',
        padding:20,
        backgroundColor:'#59cbbd',
        marginTop:30,
    },
    buttonText:{
        color:'#fff',
        fontWeight: 'bold'
    },
})