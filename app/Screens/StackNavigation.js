import React,{useContext} from 'react';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { Button, StyleSheet } from 'react-native'

import SafeScreen from '../components/SafeScreen'
import AppText from '../components/AppText'
import AuthContext from '../auth/AuthContext'
import Colors from '../config/Colors'

const posts = [
    {
        key:1,
        topic:"Travis Kelce Makes History *Click Here*",
        content:"Travis Kelce now has 1,400 receiving yards, the most by a TE in a single season in NFL history. Absolutely incredible."
    }
]

const Post =({navigation},topic)=>(
  <SafeScreen style={styles.container}>
    <AppText onPress={()=>navigation.navigate("Content")}>Travis Kelce Makes History *Click Here*</AppText>
  </SafeScreen>
)

const Content =()=>(
  <SafeScreen>
    <AppText>Travis Kelce now has 1,400 receiving yards, the most by a TE in a single season in NFL history.
        Absolutely incredible.</AppText>
  </SafeScreen>
)

enableScreens();
const Stack = createNativeStackNavigator();



const StackNavigator =()=>{
    const context = useContext(AuthContext)
    return(
        <Stack.Navigator initialRouteName="Post">
            <Stack.Screen name="Post" component={Post}
                options={{
                    headerRight: () => (
                            <Button
                                onPress={() => context.setUser(false)}
                                title="Logout"
                                color={Colors.secondary}
                            />
                    )
                }}
            />
            <Stack.Screen name="Content" component={Content}/>
        </Stack.Navigator>

    )
}

export default StackNavigator

const styles  = StyleSheet.create({
    container:{
        backgroundColor:Colors.medium,
    },
})