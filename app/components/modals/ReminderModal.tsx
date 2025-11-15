import { BlurView } from 'expo-blur';
import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';


export default function ReminderModal() {
  return (
<Modal style={styles.Modal} transparent={true} animationType="slide">
      <BlurView intensity={10} style={styles.blurContainer}>
        <View style={styles.ScreenFill}>

        </View>
      </BlurView>
    </Modal>
  )
}


const styles = StyleSheet.create({
  Modal: {
    // To allow background to show, the Modal itself doesn't need a background color,
    // but we'll set transparent to true in the Modal component. This style can be empty or omitted.
  },
  blurContainer: {
    flex: 1,
    width: "100%",
    color: "rgb(26, 19, 19)",
  },
  ScreenFill: {
    marginTop: "25%",
    borderTopRightRadius: 24,
    borderTopLeftRadius:  24,
    justifyContent: "center",
    flex:1,
    backgroundColor: "#C33333",
    width: "100%",
  
    },
     box: {
   
  
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
    },
    header: {
      fontSize: 32,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
    },
  })