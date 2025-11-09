import { Tabs } from "expo-router";
import MyTabBar from "../components/MyTabBar";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={props => <MyTabBar {...props}/> }
    >
        <Tabs.Screen
            name="index"
            options={{
                title: 'Home',
                headerShown: false,
            }}
                />
        <Tabs.Screen
            name="Action"
            options={{
                title: 'Action',
                headerShown: false,
            }}
                />
        <Tabs.Screen
            name="test"
            options={{
                title: 'Profile',
                headerShown: false,
            }}
                />
    </Tabs>

  )
}
