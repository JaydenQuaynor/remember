import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface DayIndicatorProps {
  isRepeating: boolean;
  repeatDays?: number[];
  triggerDate?: string;
}

// Helper function to format date
const formatDate = (dateString?: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Check if it's today
  if (date.toDateString() === today.toDateString()) {
    return 'Today';
  }

  // Check if it's tomorrow
  if (date.toDateString() === tomorrow.toDateString()) {
    return 'Tomorrow';
  }

  // Otherwise show the date (e.g., "Jan 15" or "15/01")
  const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

export default function DayIndicator({ isRepeating, repeatDays, triggerDate }: DayIndicatorProps) {
  const dayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  if (!isRepeating) {
    // Show only the date for non-repeating reminders
    const formattedDate = formatDate(triggerDate);
    return (
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{formattedDate}</Text>
      </View>
    );
  }

  // Show day indicators for repeating reminders
  return (
    <View style={styles.dayIndicatorContainer}>
      {dayLabels.map((day, index) => {
        const isActive = repeatDays?.includes(index);
        return (
          <View
            key={index}
            style={[
              styles.dayCircle,
              isActive && styles.dayCircleActive
            ]}
          >
            <Text style={[
              styles.dayText,
              isActive && styles.dayTextActive
            ]}>
              {day}
            </Text>
          </View>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  dayIndicatorContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  dayCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#C3333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayCircleActive: {
    backgroundColor: '#F0F0F0',
  },
  dayText: {
    fontSize: 10,
    color: 'rgba(255, 255, 255, 0.52), 255, 0)',
    fontWeight: '500',
  },
  dayTextActive: {
    color: '#C33333',
    fontWeight: '600',
  },
  dateContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#F0F0F0',
    borderRadius: 4,
  },
  dateText: {
    fontSize: 12,
    color: '#C33333',
    fontWeight: '600',
  },
});