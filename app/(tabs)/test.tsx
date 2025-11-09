import React from 'react';
import { SectionList, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

export default function test() {
  return (
<SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>
      <SectionList
      sections={DATA}
      renderItem={({item}) => {
        return(
            <View style={styles.container}>
            <Text style={styles.item}>{item}</Text>
        </View>

        )
      }}
      renderSectionHeader={({section}) => {
        return(
            <View style={styles.header}>
                <Text style={styles.title}>{section.title}</Text>
            </View>
        )
      }}

      />
    </SafeAreaView>
  </SafeAreaProvider>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
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
