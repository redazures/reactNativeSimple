import React, {useState} from 'react'
import { StyleSheet, Alert, TouchableOpacity, View } from 'react-native'

import AppButton from '../components/AppButton'
import Colors from '../config/Colors'
import AppText from '../components/AppText'
import SafeAreaView from '../components/SafeScreen'


const AdviceScreen =()=>{
    const [advice, setAdvice] = useState("Ask a Question")

    const getAdvice=()=>{
        fetch('https://api.adviceslip.com/advice')
        .then(rs=>rs.json())
        .then(data=>setAdvice(data.slip.advice))
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.fortune}>
                <AppText style={styles.text}>
                    {advice}
                </AppText>
                <AppButton 
                    title="Get Advice"
                    onPress={()=>{
                        Alert.alert("Message", "We are working to get the right advice for you!",[{
                            text:"I am waiting for my advice"
                        }])
                        getAdvice()
                    }}
                />
            </View>
        </SafeAreaView>

    )
}

export default AdviceScreen

const styles  = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:Colors.medium,
        width:'100%'
    },
    fortune:{
        width:"100%",
    },
    text:{
        fontSize:30,
        fontWeight:'bold',
        textAlign: 'center',
        paddingBottom:10
    },
})