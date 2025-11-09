import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Check from '../../assets/icons/check.svg'
export default function StartCheckBtn() {
  return (
    <View style={styles.CheckButtonContainer}>
        <Pressable style={styles.CheckButton}>
            <Check width={24} />
            <Text style={styles.CheckButtonText}>Start Check</Text>
            </Pressable>
            </View>

  )
}

const styles = StyleSheet.create({

    CheckButtonContainer : {
        justifyContent: "center",
        alignItems:"center",
        borderRadius: 14,
        backgroundColor: "#C33333",
        height: "100%",
        padding: 14,
        
    },
    CheckButton : {
        alignItems:"center",
        gap:4,
        justifyContent:"center",
       
    },
    CheckButtonText : {
        color: "#FFF",

    },

    
})