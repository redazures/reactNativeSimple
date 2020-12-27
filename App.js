import React, { useContext, useState, createContext } from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import SafeScreen from './app/components/SafeScreen'
import AuthContext from './app/auth/AuthContext'

const Post =({navigation})=>(
  <SafeScreen>
    <Text onPress={()=>navigation.navigate("Content")}>Kamara rushes for 6 Touchdowns</Text>
  </SafeScreen>
)

const Content =()=>(
  <SafeScreen>
    <Text>What are we going to do now?</Text>
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
  console.log("this is welcome",context.user)
  return(
    <SafeScreen>
      <Text>This is the Welcome Screen</Text>
      <Button title="Login" onPress={()=>context.setUser(true)}/>
    </SafeScreen>
  )
}

export default function App() {
  const [user,setUser]  = useState(false)
  console.log(user)
  return (
    <AuthContext.Provider value={{user,setUser}}>
      <NavigationContainer>
        {user ?  <StackNavigator/> : <Welcome/>}
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
