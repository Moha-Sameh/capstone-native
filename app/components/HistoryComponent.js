import { View } from "react-native";
import { Title } from "react-native-paper";
import * as React from "react";
import HistoryItem from "./HistoryItem";
export default function History() {
  return (
    <View style={{ flex: 1, marginTop: 70 }}>
      <Title style={{ padding: 30, marginTop: -30, marginLeft: 135 }}>
        History
      </Title>
      <HistoryItem />
    </View>
  );
}
