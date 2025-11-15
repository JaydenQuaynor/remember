import { BlurView } from 'expo-blur';
import React, { useRef, useState } from 'react';
import { Keyboard, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';


export default function ReminderModal() {
  const [taskName, setTaskName] = useState(''); // set name of Reminder
  const [tempInput, setTempInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const handleTextPress = () => {
    console.log('Text Input Pressed: Running handleTextPress');
    setTempInput(taskName);
    setIsEditing(true);
    setTimeout(() => inputRef.current?.focus(), 100);
    console.log('Text Input Opened');
  };

  const commitEdit =  () =>{
    if (tempInput.trim()){
      console.log('Text input exsits');
      setTaskName(tempInput.trim());
    }
    console.log('isEditing is off');
    setIsEditing(false);
  }

  return (
<Modal style={styles.Modal} transparent={true} animationType="slide">
      <BlurView intensity={10} style={styles.blurContainer}>
        <View style={styles.ScreenFill}>
        <Pressable 
    style={{ flex: 1 }} 
    onPress={() => {
      if (isEditing) {
        Keyboard.dismiss();
        commitEdit();
      }
    }}
  >
    {
      isEditing ? (
        <TextInput 
        ref={inputRef}
        style={[
          styles.taskNameText, tempInput && styles.taskNameActive
        ]}
        value={tempInput}
        onChangeText={setTempInput}
        onBlur={commitEdit}
        onSubmitEditing={commitEdit}
        placeholder='Task Name'
        placeholderTextColor="rgba(255, 255, 255, 0.4)"
        selectionColor="#FFFFFF"
        returnKeyType="done"              
        />

      ): (
          <Pressable onPress={handleTextPress}>
            <Text style= {[styles.taskNameText, taskName && styles.taskNameActive]}>
              {taskName || 'Reminder Name'}
            </Text>
          </Pressable>
      )}
        </Pressable>
        
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
      justifyContent: "center",
      flex: 1,
      backgroundColor: "#C33333",
      width: "100%",
      paddingHorizontal: 24,
      paddingTop: 32,
    },
    taskNameText: {
      fontSize: 48,
      fontWeight: '600',
      color: 'rgba(255, 255, 255, 0.4)', // Low opacity placeholder
      padding: 0,
      margin: 0,
    },
    taskNameActive: {
      color: '#FFFFFF', // Full opacity when has content
      opacity: 1,
    },
    box: {},
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
  });