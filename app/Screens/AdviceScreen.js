import React, { useState, useContext } from 'react'
import { StyleSheet, Alert, View } from 'react-native'

import AppButton from '../components/AppButton'
import Colors from '../config/Colors'
import AppText from '../components/AppText'
import SafeAreaView from '../components/SafeScreen'
import AuthContext from '../auth/AuthContext'


const AdviceScreen =()=>{
    const [advice, setAdvice] = useState("Ask a Question")
    const context = useContext(AuthContext)

    const getAdvice=()=>{
        fetch('https://api.adviceslip.com/advice')
        .then(rs=>rs.json())
        .then(data=>setAdvice(data.slip.advice))
    }

    return(
        <SafeAreaView style={styles.container}>
            <View>
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
                <AppButton 
                    title="logout"
                    color="secondary"
                    onPress={()=>{
                        context.setUser(false)
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
        backgroundColor:Colors.medium,
        
    },
    text:{
        fontSize:30,
        fontWeight:'bold',
        textAlign: 'center',
        paddingBottom:10
    },
})