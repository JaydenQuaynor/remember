import { api } from '@/convex/_generated/api';
import { useQuery } from "convex/react";
import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

// Trigger: defineTable({
//   triggerLocation: v.string(),
//   triggerName: v.string(),
//   triggerRadius: v.float64(),
// }),
// {selectedTrigger == null ? (
//   // Nothing selected yet → show tags to pick from
//   <View style={styles.triggersContainer}>
//     {triggers.map((trigger) => (
//       <Pressable 
//         key={trigger._id}
//         onPress={() => setSelectedTrigger(trigger)}  // ← Add this!
//         style={styles.triggerButton}
//       >
//         <Text style={styles.triggerText}>{trigger.triggerName}</Text>
//       </Pressable>
//     ))}
//   </View>
// ) : (
//   // Something selected → show what was picked
//   <Pressable onPress={() => setSelectedTrigger(null)}>  {/* Tap to change */}
//     <Text style={styles.selectTriggerText}>@{selectedTrigger.triggerName}</Text>
//   </Pressable>
// )}

interface TriggerId  {
  _id : string,
  triggerName : string
  triggerLocation: string
}


export default function CreatableTagSelect() {
 const [ selectorOpen , setSelctorOpen] = useState(false);
 const [selectedTrigger , setSelectedTrigger ] = useState<TriggerId | null>(null);
 const [ isEditing , setIsEditing ] = useState(false);


  //gets data from convex DB
  const triggers = useQuery(api.Triggers.getTriggers);
//Live updating data, watching for changes
  useEffect(() => {
    console.log(triggers);
  },[triggers]);

  //if user has no triggers prompt them to make one
  if(triggers == null){
    return (
      <View style={styles.container}>
        <Text style={styles.emptyText}>Create New Trigger</Text>
      </View>
    );
  }
  //if triggers are undefined assume they are still loading
  if (triggers === undefined) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }
  return (


    <View style={styles.container}>
      <Pressable>
         <TextInput 
      //  ref={inputRef}
      //  style={[
      //    styles.taskNameText, tempInput && styles.taskNameActive
      //  ]}
      //  value={tempInput}
      //  onChangeText={setTempInput}
      //  onBlur={commitEdit}
      //  onSubmitEditing={commitEdit}
       placeholder='@Pick A Trigger'
       placeholderTextColor="rgba(255, 255, 255, 0.4)"
       selectionColor="#FFFFFF"
       returnKeyType="done"              
         />
      </Pressable>



    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  emptyText: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.4)',
    fontWeight: '500',
  },
  loadingText: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.4)',
  },
  selectTriggerBtn: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  selectTriggerText: {
    fontSize: 48,
    fontWeight: '600',
    color: '#C33333',
  },
  triggersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  triggerButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  triggerButtonPressed: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    opacity: 0.9,
  },
  triggerText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});