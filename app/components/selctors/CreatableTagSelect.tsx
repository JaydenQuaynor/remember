import { api } from '@/convex/_generated/api';
import { useQuery } from "convex/react";
import React, { useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';




export default function CreatableTagSelect() {
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
      {/* mapps convex db triggerTitle to a component */}
      <View style={styles.triggersContainer}>
        {triggers.map((trigger) => (
          <Pressable 
            key={trigger._id}
            style={({ pressed }) => [
              styles.triggerButton,
              pressed && styles.triggerButtonPressed
            ]}
          >
            <Text style={styles.triggerText}>{trigger.triggerName}</Text>
          </Pressable>
        ))}
      </View>
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