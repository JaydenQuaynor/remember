import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Text } from '@react-navigation/elements';
import { Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Home from "../../assets/icons/tabbar/Home.svg";
import Plus from "../../assets/icons/tabbar/Plus.svg";
import Profile from "../../assets/icons/tabbar/Profile.svg";

// TabButton component for HOME and ACCOUNT tabs
interface TabButtonProps {
  icon: React.ReactNode;
  label: string;
  isFocused: boolean;
  onPress: () => void;
  onLongPress: () => void;
  accessibilityLabel?: string;
  testID?: string;
}

function TabButton({ 
  icon, 
  label, 
  isFocused, 
  onPress, 
  onLongPress, 
  accessibilityLabel,
  testID 
}: TabButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      accessibilityRole="tab"
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={accessibilityLabel || label}
      testID={testID}
      style={({ pressed }) => [
        styles.tabButton,
        isFocused && styles.tabButtonActive,
        pressed && styles.tabButtonPressed
      ]}
    >
      <View style={styles.tabButtonContent}>
        <View style={[styles.iconContainer, isFocused && styles.iconContainerActive]}>
          {icon}
        </View>
        <Text style={[styles.tabButtonLabel, isFocused && styles.tabButtonLabelActive]}>
          {label.toUpperCase()}
        </Text>
      </View>
    </Pressable>
  );
}

// CenterPlusButton component for the prominent center button
interface CenterPlusButtonProps {
  onPress: () => void;
  onLongPress: () => void;
  isFocused: boolean;
  accessibilityLabel?: string;
  testID?: string;
}

function CenterPlusButton({ 
  onPress, 
  onLongPress, 
  isFocused,
  accessibilityLabel,
  testID 
}: CenterPlusButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={accessibilityLabel || "Add new item"}
      testID={testID}
      style={({ pressed }) => [
        styles.centerButton,
        pressed && styles.centerButtonPressed
      ]}
    >
      <View style={styles.centerButtonContent}>
        <Plus width={28} height={28} color="#C3333" />
      </View>
    </Pressable>
  );
}

export default function MyTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  // Icon components mapping
  const iconComponents = {
    index: (color: string) => <Home width={24} height={24} color={color} />,
    Action: (color: string) => <Plus width={28} height={28} color={color} />,
    test: (color: string) => <Profile width={24} height={24} color={color} />,
  };

  // Get route configurations
  const homeRoute = state.routes.find(route => route.name === 'index');
  const actionRoute = state.routes.find(route => route.name === 'Action');
  const accountRoute = state.routes.find(route => route.name === 'test');

  const getRouteConfig = (route: typeof state.routes[0] | undefined) => {
    if (!route) return null;
    const { options } = descriptors[route.key];
    const label =
      options.tabBarLabel !== undefined
        ? options.tabBarLabel
        : options.title !== undefined
          ? options.title
          : route.name === 'index' ? 'HOME' : route.name === 'test' ? 'ACCOUNT' : route.name;

    const isFocused = state.routes[state.index]?.name === route.name;

    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name, route.params);
      }
    };

    const onLongPress = () => {
      navigation.emit({
        type: 'tabLongPress',
        target: route.key,
      });
    };

    return {
      route,
      options,
      label,
      isFocused,
      onPress,
      onLongPress,
    };
  };

  const homeConfig = getRouteConfig(homeRoute);
  const actionConfig = getRouteConfig(actionRoute);
  const accountConfig = getRouteConfig(accountRoute);

  return (
    <View style={[styles.tabbar, { paddingBottom: Math.max(insets.bottom, 12) }]}>
      {/* HOME Tab */}
      {homeConfig && (
        <TabButton
          icon={iconComponents.index('#FFFFFF')}
          label={homeConfig.label as string}
          isFocused={homeConfig.isFocused}
          onPress={homeConfig.onPress}
          onLongPress={homeConfig.onLongPress}
          accessibilityLabel={homeConfig.options.tabBarAccessibilityLabel || 'Home tab'}
          testID={homeConfig.options.tabBarButtonTestID}
        />
      )}

      {/* Center Plus Button */}
      {actionConfig && (
        <CenterPlusButton
          onPress={actionConfig.onPress}
          onLongPress={actionConfig.onLongPress}
          isFocused={actionConfig.isFocused}
          accessibilityLabel={actionConfig.options.tabBarAccessibilityLabel || 'Add new item'}
          testID={actionConfig.options.tabBarButtonTestID}
        />
      )}

      {/* ACCOUNT Tab */}
      {accountConfig && (
        <TabButton
          icon={iconComponents.test('#FFFFFF')}
          label={accountConfig.label as string}
          isFocused={accountConfig.isFocused}
          onPress={accountConfig.onPress}
          onLongPress={accountConfig.onLongPress}
          accessibilityLabel={accountConfig.options.tabBarAccessibilityLabel || 'Account tab'}
          testID={accountConfig.options.tabBarButtonTestID}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#C33333',
    paddingTop: 12,
    paddingHorizontal: 20,
    paddingBottom: 12,
    minHeight: 70,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 44,
    minWidth: 44,
  },
  tabButtonPressed: {
    opacity: 0.7,
  },
  tabButtonContent: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  iconContainer: {
    opacity: 0.6,
  },
  iconContainerActive: {
    opacity: 1,
  },
  tabButtonActive: {
    opacity: 1,
  },
  tabButtonLabel: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
    opacity: 0.6,
  },
  tabButtonLabelActive: {
    opacity: 1,
    fontWeight: '600',
  },
  centerButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 56,
  },
  centerButtonPressed: {
    opacity: 0.8,
  },
  centerButtonContent: {
    width: '100%',
    
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});