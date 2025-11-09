import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Cap from '../../assets/icons/cap.svg'
import Pencil from '../../assets/icons/pencil.svg'
import InfoZone from './InfoZone'
import StartCheckBtn from './StartCheckBtn'
export default function RememberBlock() {
  return (
    <View style={styles.Container}>
   

        <View style={styles.LeftContainer}>

        <View style={styles.InfoContainer}>    
        <View style={styles.InfoContent}>   
            <Pressable style={styles.CapButton}><Cap width={24} /></Pressable> 
            <Pressable style={styles.TextButton}><Text style={styles.ItemName}>Work <Text style={styles.ItemTag}>@Sweetgreens</Text></Text></Pressable> 
        </View>
        <Pressable style={styles.PencilButton}><Pencil width={14} style={styles.Pencil} /></Pressable> 
        </View>
     
        <View style={styles.InfoZoneContainer}>   
            <InfoZone />
        </View>

        </View> 
       
        <View style={styles.RightContainer}>
            
        
       <StartCheckBtn />
        </View> 
       

     
      
    </View>
  )
}

const styles = StyleSheet.create({
    Container : {
        height:65,
        flexDirection: "row",
        justifyContent: "space-between"

    },
    LeftContainer : {
        justifyContent: "center",
        gap:4,

    },
    InfoContainer : {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    InfoContent : {
        flexDirection: "row",

    },
    ItemName : {
        color: "rgb(68, 68, 68)"
    },
    ItemTag : {
        color: "#C33333",
    },


    InfoZoneContainer : {

    },
    RightContainer : {
       
        


    },
    CheckButtonContainer : {
        flexDirection: "column",
        borderRadius: 14,
        backgroundColor: "#C33333",

        padding: 14,
        
    },
    CheckButton : {
        alignItems:"center",
        justifyContent:"center",
       
    },
    CheckButtonText : {
        color: "#FFF",

    },
    CapButton : {

    },
    TextButton : {

    },
    PencilButton : {

    },
    Pencil : {
      color: "rgba(44, 44, 44, 0.51)"
    },
    
})