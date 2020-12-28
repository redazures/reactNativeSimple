import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import Colors from '../config/Colors'
import AppText from './AppText'

const Card =({ image, onPress, title, subTitle })=>{
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.image} source={image}/>
                <View style={styles.subContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Card

const styles  = StyleSheet.create({
    container:{
        backgroundColor:Colors.white,
        marginBottom:20,
        overflow:'hidden',
        borderRadius:15,
    },
    image:{
        width:"100%",
        height:200
    },
    subContainer:{
        padding:20
    }
})