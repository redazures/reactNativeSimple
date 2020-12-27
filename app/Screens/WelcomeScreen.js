import React,{ useContext } from 'react'
import { ImageBackground, StyleSheet } from 'react-native'

import AppText from '../components/AppText'
import AuthContext from '../auth/AuthContext'
import AppButton from '../components/AppButton'
import Colors from '../config/Colors'

const WelcomeScreen = ()=>{
    const context = useContext(AuthContext)
    return(
      <ImageBackground
        source={image}
        style={styles.background}
      >
            <AppText style={styles.text}>Simple React</AppText>
            <AppButton 
              title="Login" 
              onPress={()=>context.setUser(true)}
            />
      </ImageBackground>
    )
  }

  export default WelcomeScreen

  const image = { uri: "https://images.unsplash.com/photo-1492539438225-2666b2a98f93?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1353&q=80" };

  const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    text:{
       fontSize:30,
       backgroundColor:Colors.white,
       opacity:.5,
       fontWeight:"bold",
       textAlign:'center',
    }
})