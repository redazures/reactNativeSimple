import React from 'react'
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet, View } from 'react-native';

const SafeScreen =({ children, style })=>{
    return(
        <SafeAreaView style= {[styles.container, style ]}>
            <View style={[styles.view], style}>
                {children}
            </View>
        </SafeAreaView>
    )
}

export default SafeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:Constants.statusBarHeight
    }
})