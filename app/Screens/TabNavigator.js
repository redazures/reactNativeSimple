import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AdviceScreen from './AdviceScreen'
import StackNavigation from './StackNavigation'
import Colors from '../config/Colors'

const Tab = createBottomTabNavigator();

const TabNavigator = ()=>(
    <Tab.Navigator>
        <Tab.Screen name="Advice" component={AdviceScreen}/>
        <Tab.Screen name="Post" component={StackNavigation}/>
    </Tab.Navigator>
)

export default TabNavigator

const styles  = StyleSheet.create({
    container:{
        justifyContent:"center",
        backgroundColor:Colors.medium,
        
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