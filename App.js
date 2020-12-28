import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthContext from './app/auth/AuthContext'
import WelcomeScreen from './app/Screens/WelcomeScreen'
import TabNavigator from './app/Screens/TabNavigator'


export default function App() {
  const [user,setUser]  = useState(false)
  
  return (
    <AuthContext.Provider value={{user,setUser}}>
      <NavigationContainer>
      {user ?  <TabNavigator/> : <WelcomeScreen/>}
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
