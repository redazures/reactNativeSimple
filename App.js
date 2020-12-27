import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import SafeScreen from './app/components/SafeScreen'
import AuthContext from './app/auth/AuthContext'
import AppText from './app/components/AppText'
import WelcomeScreen from './app/Screens/WelcomeScreen'
import StackNavigator from './app/Screens/StackNavigation'
import AdviceScreen from './app/Screens/AdviceScreen'


export default function App() {
  const [user,setUser]  = useState(false)
  return (
    <AuthContext.Provider value={{user,setUser}}>
      <NavigationContainer>
        <AdviceScreen/>
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
//{user ?  <StackNavigator/> : <WelcomeScreen/>}