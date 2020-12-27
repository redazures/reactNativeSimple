import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import SafeScreen from '../components/SafeScreen'
import AppText from '../components/AppText'

const Post =({navigation})=>(
  <SafeScreen>
    <AppText onPress={()=>navigation.navigate("Content")}>Kamara rushes for 6 Touchdowns</AppText>
  </SafeScreen>
)

const Content =()=>(
  <SafeScreen>
    <AppText>What are we going to do now?</AppText>
  </SafeScreen>
)

enableScreens();
const Stack = createNativeStackNavigator();

const StackNavigator =()=>(
  <Stack.Navigator initialRouteName="Post">
    <Stack.Screen name="Post" component={Post}/>
    <Stack.Screen name="Content" component={Content}/>
  </Stack.Navigator>
)

export default StackNavigator