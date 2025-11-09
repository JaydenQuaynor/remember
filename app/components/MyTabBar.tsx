import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable, Text } from '@react-navigation/elements';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import Home from "../../assets/icons/tabbar/Home.svg";
import Plus from "../../assets/icons/tabbar/Plus.svg";
import Profile from "../../assets/icons/tabbar/Profile.svg";


export default function MyTabBar({ state, descriptors, navigation } : BottomTabBarProps) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();
    const icon = {
        index: (props:any) => <Home width={24} color={'#222'} />,
        Action: (props:any) => <Plus width={24} color={'#222'} />,
        test: (props:any) => <Profile width={24} color={'#222'} />,
    };
  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

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

        return (
          <PlatformPressable
            key={route.name}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabbarItem}

          >
           {icon[route.name]({
                 color: isFocused ? colors.primary : colors.text 
           })}
            <Text style={{ color: isFocused ? colors.primary : colors.text }}>
              {label}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
    tabbar: {
        position:"absolute",
        bottom: 50,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems: "center",
        backgroundColor: "#FfFF",
        marginHorizontal: 80,
        paddingVertical: 15,
        borderRadius: 35,
        shadowColor: "#000",
        shadowOffset: {width:0, height:10,},
        shadowOpacity: 0.1,
        shadowRadius: 10,
        // paddingHorizontal: 10,
        // 
    },
    tabbarItem:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        gap:5,
    }
})