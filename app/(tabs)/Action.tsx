import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ReminderModal from '../components/modals/ReminderModal';

export default function Action() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Content at the top */}
        <View style={styles.topContainer}>
          <Text style={styles.title}>Top of the Screen</Text>
        </View>

        {/* Content in the middle */}
        <View style={styles.middleContainer}>
          <Text style={styles.paragraph}>
            Middle content is centered. Here's some text in the center of the screen!
          </Text>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Middle Button</Text>
          </Pressable>
        </View>
        
        {/* Content at the bottom */}
        <View style={styles.bottomContainer}>
          <Text style={styles.paragraph}>Bottom of the screen</Text>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Bottom Button</Text>
          </Pressable>
        </View>

        {/* The modal, always visible per current ReminderModal code */}
        <ReminderModal />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8'
  },
  topContainer: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 10
  },
  middleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  bottomContainer: {
    alignItems: 'center',
    paddingBottom: 40,
    paddingTop: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 8,
    color: '#C33333'
  },
  paragraph: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 16
  },
  button: {
    backgroundColor: '#C33333',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    marginTop: 4,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500'
  }
});