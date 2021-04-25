import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

//Screens
import HomeStackScreen from "../screens/HomeScreen";
import TipStackScreen from "../screens/TipScreen";
import HistoryStackScreen from "../screens/HistoryScreen";

const Tab = createBottomTabNavigator();
export const MainTapScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      labeled=""
      component="HomeStackScreen"
      inactiveColor="#3e2465"
      activeColor="#f0edf6"
      tabBarOptions={{
        activeTintColor: "#ff5733",
        inactiveTintColor: "orange",
        showLabel: false,
        style: {
          borderWidth: 0,
          borderBottomWidth: 0,
          backgroundColor: "#e6e6e6",
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          borderColor: "white",
          position: "absolute",
          marginBottom: 25,
          marginLeft: 60,
          height: 45,
          width: "70%",
        },
      }}
    >
      <Tab.Screen
        name="Info"
        component={TipStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="book-medical" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="radiation-alt" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="history" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTapScreen;
