import React,{ useContext } from 'react'
import { Button, StyleSheet } from 'react-native'

import SafeScreen from '../components/SafeScreen'
import AppText from '../components/AppText'
import AuthContext from '../auth/AuthContext'
import AppButton from '../components/AppButton'


const WelcomeScreen = ()=>{
    const context = useContext(AuthContext)
    return(
      <SafeScreen>
        <AppText>This is the Welcome Screen</AppText>
        <AppButton 
          title="Login" 
          onPress={()=>context.setUser(true)}
        />
      </SafeScreen>
    )
  }

  export default WelcomeScreen

  const styles = StyleSheet.create({
    Button:{
        flex:1,
    },
    view:{
       flex:1 
    }
})