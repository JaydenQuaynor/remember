import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function ReminderModal() {
  return (
    <View style={styles.container}>
    <View style={styles.box}>

      <Text>s</Text>

    </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
    justifyContent: "center",
    height: "100%",
    borderRadius: 24,
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