import React, { useRef, useState } from 'react';
import { Keyboard, Pressable, StyleSheet, Text, TextInput } from 'react-native';
import CreatableTagSelect from '../../selctors/CreatableTagSelect';

export default function SetTrigger() {

  
  const [trigger, setTrigger] = useState(''); // set name of Reminder
  const [tempInput, setTempInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const handleTextPress = () => {
    console.log('Text Input Pressed: Running handleTextPress');
    setTempInput(trigger);
    setIsEditing(true);
    setTimeout(() => inputRef.current?.focus(), 100);
    console.log('Text Input Opened');
  };

  const commitEdit =  () =>{
    if (tempInput.trim()){
      console.log('Text input exsits');
      setTrigger(tempInput.trim());
    }
    console.log('isEditing is off');
    setIsEditing(false);
  }

  return (
 <Pressable 
    style={styles.container} 
    onPress={() => {
      if (isEditing) {
        Keyboard.dismiss();
        commitEdit();
      }
    }}
  >
    {
      isEditing ? (
        
        <CreatableTagSelect />
        // <TextInput 
        // ref={inputRef}
        // style={[
        //   styles.taskNameText, tempInput && styles.taskNameActive
        // ]}
        // value={tempInput}
        // onChangeText={setTempInput}
        // onBlur={commitEdit}
        // onSubmitEditing={commitEdit}
        // placeholder='@Pick A Trigger'
        // placeholderTextColor="rgba(255, 255, 255, 0.4)"
        // selectionColor="#FFFFFF"
        // returnKeyType="done"              
        // />

      ): (
          <Pressable onPress={handleTextPress}>
            <Text style= {[styles.taskNameText, trigger && styles.taskNameActive]}>
              {trigger || '@Trigger'}
            </Text>
          </Pressable>
      )}

      
        </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
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