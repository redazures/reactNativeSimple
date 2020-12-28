import React, { useContext } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";

import Card from "../components/Card";
import AppButton from '../components/AppButton'
import AuthContext from '../auth/AuthContext'
import SafeScreen from '../components/SafeScreen'

const data = [
  {
    id: "one",
    title: "Dogs",
    subTitle:"Random dogs",
    img:'https://www.petplace.com/static/672e2df9a8c1f36529fa760e0a1ee125/c23ac/shutterstock_159546053.jpg'
  },
  {
    id: "two",
    title: "Lord of the Rings",
    subTitle:"Just a list of LOTR books",
    img:'https://images.unsplash.com/photo-1599957015834-02d074874b82?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: "three",
    title: "Dungeons and Dragons",
    subTitle:"Just a list of LOTR books",
    img:'https://sm.ign.com/ign_in/feature/h/how-to-sta/how-to-start-playing-dungeons-dragons_t3ms.jpg',
  },
];

const InterestScreen = () => {
    const context = useContext(AuthContext)

    const renderItem = ({ item }) => {
        return (
          <Card 
              title={item.title}
              image={{uri: item.img}}
              onPress={()=>console.log("Clicked")}
          />
        );
      };
    
      return (
        <SafeScreen>
            <AppButton 
                title="logout"
                color="secondary"
                onPress={()=>{
                    context.setUser(false)
                }}
            />
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            styles={styles.container}
          />
        </SafeScreen>
      );
}

export default InterestScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height:'50%'
    },
  });