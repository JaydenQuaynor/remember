import { useQuery } from "convex/react";
import React from 'react';
import { Pressable, SectionList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Plus from '../../assets/icons/tabbar/Plus.svg';
import { api } from "../../convex/_generated/api";
import HomeHeader from '../components/HomeHeader';
import RememberBlock from '../components/RememberBlock';
import { createReminderSections } from '../utils/dateUtils';


export default function index() {
  const reminders = useQuery(api.Reminders.getAllReminders);
  
  if (reminders === undefined) {
    return <Text>Loading...</Text>;
  }

  // Use the utility function to create sections organized by date
  type ReminderType = NonNullable<typeof reminders>[number];
  const sections = createReminderSections(reminders, 7) as Array<{
    title: string;
    data: (ReminderType | 'empty')[];
    dateString: string;
  }>;

  return (
    <SafeAreaView style={styles.safeView}> 

      <HomeHeader />
      <View style={styles.topOptionView}>
        <Pressable 
         
        style={styles.topOptionViewButtons}><Text style={styles.topOptionViewButtonsText}>List</Text></Pressable>
        <Pressable style={styles.topOptionViewButtons}><Text style={styles.topOptionViewButtonsText}>Timeline</Text></Pressable>
        <Pressable style={styles.topOptionViewButtons}><Text style={styles.topOptionViewButtonsText}>Calander</Text></Pressable>
      </View>

      <SectionList
        sections={sections}
        ItemSeparatorComponent={() => <View style={{ height: 22 }} />}
        renderItem={({ item }) => {
          if (item === 'empty' || (typeof item === 'object' && !item.reminderName)) {
            return (
              <View style={styles.emptyStateContainer}>
                <Text style={styles.emptyStateText}>Remember Something...</Text>
                <Pressable>
                  <Plus width={24} fill="#000" />
                </Pressable>
              </View>
            );
          }
          // Map database fields to component props
          const trigger = item.triggerType.charAt(0).toUpperCase() + item.triggerType.slice(1) as 'Arriving' | 'Leaving';
          
          return <RememberBlock 
          itemName={item.reminderName}
          itemTag={item.triggerLocation || ''} 
          trigger={trigger} 
          triggerLocation={item.triggerLocation || ''} 
          triggerTime={item.triggerTime || ''} 
          triggerDay={item.triggerDate}
          isRepeating={item.isRepeating}
          repeatDays={item.repeatDays}
          triggerDate={item.triggerDate}
        />;
        }}
        renderSectionHeader={({ section }) => {
          return (
            <View style={{ marginBottom: 14, marginTop: 34 }}>
              <Text style={{ fontWeight: 'regular', fontSize: 12 }}>{section.title}</Text>
            </View>
          );
        }}
      />
      {/* <RememberBlock />
      <RememberBlock />
      <RememberBlock /> */}
    
    </SafeAreaView>
  )

}
const styles = StyleSheet.create({
  safeView : {
    padding: 32,
    gap: 26,
  },
  topOptionView : {
    flexDirection: "row",
    justifyContent: "center",
    gap:16,
  },
  topOptionViewButtons : {

  },
  topOptionViewButtonsText : {
    color: "rgba(0, 0, 0, 0.25)",
  },
  emptyStateContainer: {
    minHeight: 65,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  emptyStateText: {
    color: "rgba(0, 0, 0, 0.25)",
    fontSize: 14,
  },
})