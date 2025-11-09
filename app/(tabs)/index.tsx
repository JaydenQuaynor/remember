
import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from '../components/HomeHeader';
import RememberBlock from '../components/RememberBlock';

export default function index() {
  const data = [
    {
      title: 'Monday Nov 10th',
      data: ['empty'],
    },
    {
      title: 'Tuesday Nov 11th',
      data: ['static'],
    },
    {
      title: 'Wednesday Nov 12th',
      data: ['empty'],
    },
    {
      title: 'Thursday Nov 13th',
      data: ['static'],
    },
    {
      title: 'Friday Nov 14th',
      data: ['static'],
    },
  ];
  return (
    <SafeAreaView style={styles.safeView}> 

      <HomeHeader />

      <SectionList
        sections={data}
        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
        renderItem={({ item }) => {
          if (item === 'empty') {
            return (
              <View style={{ paddingVertical: 14 }}>
                <Text style={{ color: '#aaa', textAlign: 'center' }}>No data for this day</Text>
              </View>
            );
          }
          return <RememberBlock />;
        }}
        renderSectionHeader={({ section }) => {
          return (
            <View style={{ marginBottom: 8, marginTop: 24 }}>
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
    gap:18,
    
  
  },

    
    
})