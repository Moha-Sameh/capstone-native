import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

//Screens
import HomeStackScreen from "../screens/HomeScreen";
import TipStackScreen from "../screens/TipScreen";
import HistoryStackScreen from "../screens/HistoryScreen";

const Tab = createMaterialBottomTabNavigator();
export const MainTapScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      labeled=""
      component="HomeStackScreen"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#694fad" }}
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
