
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from '../components/HomeHeader';
import RememberBlock from '../components/RememberBlock';

export default function index() {
  
  return (
    <SafeAreaView style={styles.safeView}> 
      <HomeHeader />
    <RememberBlock />
    </SafeAreaView>

  )

}
const styles = StyleSheet.create({
  safeView : {
    padding: 32,
    
  
  },

    
    
})