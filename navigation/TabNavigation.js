import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import MainScreen from "../screens/Profile/MainScreen";
import Chatstud from "../screens/Catstud/MainScreen";
import { Image, Text, TouchableOpacity, View } from "react-native";
import tw from "../lib/tailwind";
import Styles from "../styles/Global";
import Icons from "../constans/Icons";

const Tab = createBottomTabNavigator();
const RenderItemMenu = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.navigation()}
      style={[tw`justify-center items-center`]}
    >
      <Image source={props.isFocused ? props.imageSolid : props.image} />
      <Text
        style={[
          tw.style(
            `text-white mt-1`,
            props.isFocused ? "font-bold" : "font-medium"
          ),
        ]}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};
function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View
      style={[
        tw`bg-primary flex-row justify-between py-1`,
        Styles.containerPadding,
      ]}
    >
      <RenderItemMenu
        isFocused={state.index === 1}
        image={Icons.Chat}
        imageSolid={Icons.ChatSolid}
        title="Chatstud"
        navigation={() => navigation.navigate("ChatstudScreen")}
      />
      <RenderItemMenu
        isFocused={state.index === 0}
        image={Icons.Home}
        imageSolid={Icons.HomeSolid}
        title="Home"
        navigation={() => navigation.navigate("HomeScreen")}
      />
      <RenderItemMenu
        isFocused={state.index === 2}
        image={Icons.Profile}
        imageSolid={Icons.ProfileSolid}
        title="Profile"
        navigation={() => navigation.navigate("ProfileScreen")}
      />
    </View>
    // <View style={{ flexDirection: "row" }}>
    //   {state.routes.map((route, index) => {
    //     const { options } = descriptors[route.key];
    //     const label =
    //       options.tabBarLabel !== undefined
    //         ? options.tabBarLabel
    //         : options.title !== undefined
    //         ? options.title
    //         : route.name;

    //     const isFocused = state.index === index;

    //     const onPress = () => {
    //       const event = navigation.emit({
    //         type: "tabPress",
    //         target: route.key,
    //         canPreventDefault: true,
    //       });

    //       if (!isFocused && !event.defaultPrevented) {
    //         // The `merge: true` option makes sure that the params inside the tab screen are preserved
    //         navigation.navigate({ name: route.name, merge: true });
    //       }
    //     };

    //     const onLongPress = () => {
    //       navigation.emit({
    //         type: "tabLongPress",
    //         target: route.key,
    //       });
    //     };

    //     return (
    //       <TouchableOpacity
    //         accessibilityRole="button"
    //         accessibilityState={isFocused ? { selected: true } : {}}
    //         accessibilityLabel={options.tabBarAccessibilityLabel}
    //         testID={options.tabBarTestID}
    //         onPress={onPress}
    //         onLongPress={onLongPress}
    //         style={{ flex: 1 }}
    //         key={index}
    //       >
    //         <Text style={{ color: isFocused ? "#673ab7" : "#222" }}>
    //           {label}
    //         </Text>
    //       </TouchableOpacity>
    //     );
    //   })}
    // </View>
  );
}
function TabNavigation() {
  return (
    <Tab.Navigator initialRouteName="HomeScreen" tabBar={MyTabBar}>
      <Tab.Screen
        name="HomeScreen"
        options={{
          headerShown: false,
          title: "Home",
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="ChatstudScreen"
        options={{
          headerShown: false,
          title: "ChatudScreen",
        }}
        component={Chatstud}
      />
      <Tab.Screen
        name="ProfileScreen"
        options={{
          headerShown: false,
          title: "Profile",
        }}
        component={MainScreen}
      />
    </Tab.Navigator>
  );
}
export default TabNavigation;
