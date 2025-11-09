
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Fire from "../../assets/icons/fire.svg";
import Gear from "../../assets/icons/gear.svg";
import Map from "../../assets/icons/map.svg";




export default function HomeHeader() {
    const [streakColor, setStreakColor] = useState("#E6E6E6"); 
    const [streakText, setStreakText] = useState("#C33333");
  return (
    <View style={styles.header}>
    <TouchableOpacity ><Map width={24}  fill="#000"  /></TouchableOpacity> 
    <Pressable 
    style={[styles.streakBox, {backgroundColor : streakColor}]}
    onPress={()=> {
        setStreakColor(streakColor === "#E6E6E6" ? "#C33333" : "#E6E6E6");
        setStreakText(streakText === "#C33333" ? "#FFFFFF": "#C33333");

    }}
    >
      <Fire width={24}  style={{color : streakText }} /> 
      <Text
      style={{color : streakText }}
      >25</Text>
      </Pressable> 
    <TouchableOpacity ><Gear width={24}  fill="#000" /></TouchableOpacity> 
      </View>
  )
}
const styles = StyleSheet.create({
    header : {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      
    
    },
    streakBox : {
      flexDirection: "row",
      alignItems:"center",
      gap: 10,
      padding: 10,
      borderRadius: 1000,
  
      
    },
    
      
  })