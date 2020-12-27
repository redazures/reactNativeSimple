import React, { useContext, useState, createContext } from 'react';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import SafeScreen from './app/components/SafeScreen'
import AuthContext from './app/auth/AuthContext'
import AppText from './app/components/AppText'
import WelcomeScreen from './app/Screens/WelcomeScreen'

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

const Welcome = ()=>{
  const context = useContext(AuthContext)
  return(
    <SafeScreen>
      <AppText>This is the Welcome Screen</AppText>
      <Button title="Login" onPress={()=>context.setUser(true)}/>
    </SafeScreen>
  )
}

export default function App() {
  const [user,setUser]  = useState(false)
  return (
    <AuthContext.Provider value={{user,setUser}}>
      <NavigationContainer>
        {user ?  <StackNavigator/> : <WelcomeScreen/>}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
