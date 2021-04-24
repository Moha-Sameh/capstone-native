import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tips from "../components/TipsContent";
import Ionicons from "react-native-vector-icons/Ionicons";

const TipStack = createStackNavigator();
const TipStackScreen = ({ navigation }) => {
  return (
    <TipStack.Navigator>
      <TipStack.Screen
        name="Tips"
        component={Tips}
        options={{
          headerLeft: () => (
            <Ionicons.Button
              name="menu"
              size={29}
              backgroundColor="white"
              onPress={() => navigation.openDrawer()}
              color="#000"
            />
          ),
        }}
      />
    </TipStack.Navigator>
  );
};

export default TipStackScreen;
