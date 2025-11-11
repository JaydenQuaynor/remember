import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';


interface InfoZoneProps {
    trigger: 'Arriving' | 'Leaving';
    triggerLocation: string;
    triggerTime: string;

}

export default function InfoZone({trigger,triggerLocation,triggerTime}: InfoZoneProps) {
  return (

    <Pressable style={styles.Container}>

        <Pressable style={styles.LocationButton} >
        <Text style={styles.LocationBasedAction}>{trigger}</Text>
        <Text style={styles.LocationPlace}>{triggerLocation}</Text>
        </Pressable>

        <Pressable
          onPressIn={() => {}}
          style={({ pressed }) => [
            styles.TimeButton,
            pressed && { backgroundColor: 'rgba(255, 255, 255, 0.45)' }
          ]}
        >
        <Text style={styles.Time}>{triggerTime}</Text>
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
        gap: 12,
        alignItems: "center",
        backgroundColor: "#C33333",
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 100,
    },
    LocationButton: {
        flexDirection: "row",
        
        gap: 4,
       
        
        
        
    },
    LocationBasedAction: {
        color: "rgba(255, 255, 255, 1)",
        fontSize:12,
        
    },
    LocationPlace: {
        color: "rgba(255, 255, 255, 0.45)",
        fontSize:12,

    },
    TimeButton: {

    },
    Time: {
        fontSize:12,
        color: "rgba(255, 255, 255, 0.54)",
    },
    DatePicker: {
        flexDirection:"row",
        gap: 12,
    },
    DayOfWeek: {
        fontSize:8,
        color:"rgba(255, 255, 255, 0.35)",

    },
    Sunday: {

    },
    Monday: {

    },
    Tuesday: {
        color: "rgba(255, 255, 255, 1)",

    },
    Wednesday: {

    },
    Thursday: {
        color: "rgba(255, 255, 255, 1)",

    },
    Friday: {
        color: "rgba(255, 255, 255, 1)",

    },
    Saturday: {

    },
})