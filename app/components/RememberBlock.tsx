import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Cap from '../../assets/icons/cap.svg'
import Pencil from '../../assets/icons/pencil.svg'
import InfoZone from './InfoZone'
export default function RememberBlock() {
  return (
    <View style={styles.Container}>
   

        <View style={styles.LeftContainer}>

        <View style={styles.InfoContainer}>    
        <View style={styles.InfoContent}>   
            <Pressable style={styles.CapButton}><Cap width={24} /></Pressable> 
            <Pressable style={styles.TextButton}><Text>Work <Text>@Sweetgreens</Text></Text></Pressable> 
        </View>
        <Pressable style={styles.PencilButton}><Pencil width={24} /></Pressable> 
        </View>
     
        <View style={styles.InfoZoneContainer}>   
            <InfoZone />
        </View>

        </View> 
       
        <View style={styles.RightContainer}>

        <View style={styles.ButtonContainer}></View>

        </View> 
       

     
      
    </View>
  )
}

const styles = StyleSheet.create({
    Container : {

    },
    LeftContainer : {

    },
    InfoContainer : {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    InfoContent : {
        flexDirection: "row",

    },
    InfoZoneContainer : {

    },
    RightContainer : {

    },
    ButtonContainer : {

    },
    CapButton : {

    },
    TextButton : {

    },
    PencilButton : {

    },
    
})