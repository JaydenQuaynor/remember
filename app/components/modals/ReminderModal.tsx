import { BlurView } from 'expo-blur';
import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import CreatableTagSelect from '../selctors/CreatableTagSelect';
import SetNameSelctor from '../selctors/SetNameSelctor';



export default function ReminderModal() {


  return (
<Modal style={styles.Modal} transparent={true} animationType="slide">
      <BlurView intensity={10} style={styles.blurContainer}>
        <View style={styles.ScreenFill}>
          <View style={styles.contentContainer}>
            {/* set Reminder name */}
            <SetNameSelctor />  
            
            {/* Trigger Component */}
            <CreatableTagSelect />
            
            {/* <SingleTagSelctor /> */}
          </View>
        </View>
      </BlurView>
    </Modal>
  )
}


  const styles = StyleSheet.create({
    Modal: {},
    blurContainer: {
      flex: 1,
      width: "100%",
      color: "rgb(26, 19, 19)",
    },
    ScreenFill: {
      marginTop: "25%",
      borderTopRightRadius: 24,
      borderTopLeftRadius: 24,
      flex: 1,
      backgroundColor: "#C33333",
      width: "100%",
      paddingHorizontal: 24,
      paddingTop: 32,
    },
    contentContainer: {
      gap: 8,
      alignItems: 'flex-start',
    },
   
  });