
import React, { useState } from 'react';
import { Pressable, SectionList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Plus from '../../assets/icons/tabbar/Plus.svg';
import HomeHeader from '../components/HomeHeader';
import RememberBlock from '../components/RememberBlock';

interface TaskData {
  itemName: string;
  itemTag: string;
  trigger: 'Arriving' | 'Leaving';
  triggerLocation: string;
  triggerTime: string;
  triggerDay: string;
}

export default function index() {
  const [activeTab, setActiveTab] = useState("rgba(0, 0, 0, 0.25)");
  const data: Array<{ title: string; data: (TaskData | 'empty')[] }> = [
    {
      title: 'Monday Nov 10th',
      data: ['empty'] as (TaskData | 'empty')[], // Empty day
    },
    {
      title: 'Tuesday Nov 11th',
      data: [
        {
          itemName: 'Work',
          itemTag: 'Sweetgreens',
          trigger: 'Leaving' as const,
          triggerLocation: 'Dorm',
          triggerTime: '9:30',
          triggerDay: 'Tuesday',
        },
        {
          itemName: 'Gym',
          itemTag: 'Fitness Center',
          trigger: 'Arriving' as const,
          triggerLocation: 'Gym',
          triggerTime: '8:00',
          triggerDay: 'Tuesday',
        },
      ],
    },
    {
      title: 'Wednesday Nov 12th',
      data: ['empty'] as (TaskData | 'empty')[], // Empty day
    },
    {
      title: 'Thursday Nov 13th',
      data: [
        {
          itemName: 'Class',
          itemTag: 'University',
          trigger: 'Leaving' as const,
          triggerLocation: 'Home',
          triggerTime: '8:15',
          triggerDay: 'Thursday',
        },
      ],
    },
    {
      title: 'Friday Nov 14th',
      data: [
        {
          itemName: 'Work',
          itemTag: 'Sweetgreens',
          trigger: 'Leaving' as const,
          triggerLocation: 'Dorm',
          triggerTime: '9:30',
          triggerDay: 'Friday',
        },
        {
          itemName: 'Dinner',
          itemTag: 'Restaurant',
          trigger: 'Arriving' as const,
          triggerLocation: 'Mikes',
          triggerTime: '19:30',
          triggerDay: 'Friday',
        },
      ],
    },
    {
      title: 'Saturday Nov 15th',
      data: [
        {
          itemName: 'Grocery Shopping',
          itemTag: 'Supermarket',
          trigger: 'Arriving' as const,
          triggerLocation: 'Mall',
          triggerTime: '10:00',
          triggerDay: 'Saturday',
        },
      ],
    },
    {
      title: 'Sunday Nov 16th',
      data: ['empty'] as (TaskData | 'empty')[], // Empty day
    },
    {
      title: 'Monday Nov 17th',
      data: ['empty'] as (TaskData | 'empty')[], // Empty day
    },
    {
      title: 'Tuesday Nov 18th',
      data: ['empty'] as (TaskData | 'empty')[], // Empty day
    },
    {
      title: 'Wednesday Nov 19th',
      data: ['empty'] as (TaskData | 'empty')[], // Empty day
    },
    {
      title: 'Thursday Nov 20th',
      data: ['empty'] as (TaskData | 'empty')[], // Empty day
    },
    {
      title: 'Friday Nov 21st',
      data: ['empty'] as (TaskData | 'empty')[], // Empty day
    },
  ];
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
        sections={data}
        ItemSeparatorComponent={() => <View style={{ height: 22 }} />}
        renderItem={({ item }) => {
          if (item === 'empty' || (typeof item === 'object' && !item.itemName)) {
            return (
              <View style={styles.emptyStateContainer}>
                <Text style={styles.emptyStateText}>Remember Something...</Text>
                <Pressable>
                  <Plus width={24} fill="#000" />
                </Pressable>
              </View>
            );
          }
          return <RememberBlock 
            itemName={item.itemName}
            itemTag={item.itemTag} 
            trigger={item.trigger} 
            triggerLocation={item.triggerLocation} 
            triggerTime={item.triggerTime} 
            triggerDay={item.triggerDay} 
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