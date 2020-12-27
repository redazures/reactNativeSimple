import React from 'react'
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet, View } from 'react-native';

const SafeScreen =({children})=>{
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>{children}</View>
        </SafeAreaView>
    )
}

export default SafeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:Constants.statusBarHeight
    },
    view:{
       flex:1 
    }
})