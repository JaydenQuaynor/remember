/**
 * Formats a date string (YYYY-MM-DD) to a readable format
 * Example: "2024-11-13" -> "Wednesday Nov 13th"
 */
const formatDate = (dateString: string): string => {
  const date = new Date(dateString + 'T00:00:00');
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const dayName = days[date.getDay()];
  const month = months[date.getMonth()];
  const day = date.getDate();
  
  const getOrdinal = (n: number) => {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };
  
  return `${dayName} ${month} ${getOrdinal(day)}`;
};

export default formatDate;

/**
 * Gets today's date as a string in YYYY-MM-DD format
 */
export const getTodayString = (): string => {
  return new Date().toISOString().split('T')[0];
};

/**
 * Generates an array of date strings for the next X days (including today)
 * @param numberOfDays - Number of days to generate (default: 7)
 * @returns Array of date strings in YYYY-MM-DD format
 */
export const generateDateRange = (numberOfDays: number = 7): string[] => {
  const today = new Date();
  const dateRange: string[] = [];
  
  for (let i = 0; i < numberOfDays; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dateRange.push(date.toISOString().split('T')[0]);
  }
  
  return dateRange;
};

/**
 * Groups reminders by their trigger date
 * @param reminders - Array of reminders with triggerDate property
 * @returns Map with date strings as keys and arrays of reminders as values
 */
export const groupRemindersByDate = <T extends { triggerDate: string }>(
  reminders: T[]
): Map<string, T[]> => {
  const remindersByDate = new Map<string, T[]>();
  
  reminders.forEach((reminder) => {
    const date = reminder.triggerDate;
    
    if (!remindersByDate.has(date)) {
      remindersByDate.set(date, []);
    }
    remindersByDate.get(date)!.push(reminder);
  });
  
  return remindersByDate;
};

/**
 * Creates sections for a SectionList with reminders organized by date
 * Handles repeating reminders by showing them on all applicable days
 * @param reminders - Array of reminders
 * @param numberOfDays - Number of days to show (default: 7)
 * @returns Array of sections with title, data, and dateString
 */
export const createReminderSections = <T extends { triggerDate: string; isRepeating: boolean; repeatDays?: number[] }>(
  reminders: T[],
  numberOfDays: number = 7
): Array<{ title: string; data: (T | 'empty')[]; dateString: string }> => {
  const todayString = getTodayString();
  const dateRange = generateDateRange(numberOfDays);
  const remindersByDate = new Map<string, T[]>();
  
  // For each date in the range
  dateRange.forEach((dateString) => {
    const date = new Date(dateString + 'T00:00:00');
    const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    // Find all reminders that should appear on this date
    reminders.forEach((reminder) => {
      let shouldShow = false;
      
      if (reminder.isRepeating && reminder.repeatDays && reminder.repeatDays.length > 0) {
        // For repeating reminders, check if this day of week is in repeatDays
        shouldShow = reminder.repeatDays.includes(dayOfWeek);
      } else {
        // For non-repeating reminders, only show on exact triggerDate
        shouldShow = reminder.triggerDate === dateString;
      }
      
      if (shouldShow) {
        if (!remindersByDate.has(dateString)) {
          remindersByDate.set(dateString, []);
        }
        remindersByDate.get(dateString)!.push(reminder);
      }
    });
  });
  
  const sections = dateRange
    .map((dateString) => ({
      title: formatDate(dateString),
      data: remindersByDate.has(dateString) 
        ? remindersByDate.get(dateString)!
        : ['empty' as const],
      dateString: dateString
    }))
    .sort((a, b) => {
      // Custom sort: today first, then chronological
      if (a.dateString === todayString) return -1;
      if (b.dateString === todayString) return 1;
      return a.dateString.localeCompare(b.dateString);
    });
  
  return sections;
};

