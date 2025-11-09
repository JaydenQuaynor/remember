import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

export default function InfoZone() {
  return (

    <Pressable style={styles.Container}>

        <Pressable style={styles.LocationButton} >
        <Text style={styles.LocationBasedAction}>Leaving</Text>
        <Text style={styles.LocationPlace}>Dorm</Text>
        </Pressable>

        <Pressable style={styles.TimeButton}>
        <Text style={styles.Time}>9:30</Text>
        </Pressable>

        <Pressable style={styles.DatePicker}>
            <Text style={[styles.DayOfWeek , styles.Sunday]}>S</Text>
            <Text style={[styles.DayOfWeek , styles.Monday]}>M</Text>
            <Text style={[styles.DayOfWeek , styles.Tuesday]}>T</Text>
            <Text style={[styles.DayOfWeek , styles.Wednesday]}>W</Text>
            <Text style={[styles.DayOfWeek , styles.Thursday]}>Th</Text>
            <Text style={[styles.DayOfWeek , styles.Friday]}>F</Text>
            <Text style={[styles.DayOfWeek , styles.Saturday]}>S</Text>
        </Pressable>

    </Pressable>  

)
}

const styles = StyleSheet.create({
    Container: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems: "center",
        backgroundColor: "#C33333",
        paddingTop:4,
    },
    LocationButton: {
        flexDirection: "row",
        
        gap: 4,
       
        
        
        
    },
    LocationBasedAction: {
  
        fontSize:12,
        
    },
    LocationPlace: {
        fontSize:12,

    },
    TimeButton: {

    },
    Time: {
        fontSize:12,
    },
    DatePicker: {
        flexDirection:"row",
        gap: 4,
    },
    DayOfWeek: {
        fontSize:12,

    },
    Sunday: {

    },
    Monday: {

    },
    Tuesday: {

    },
    Wednesday: {

    },
    Thursday: {

    },
    Friday: {

    },
    Saturday: {

    },
})