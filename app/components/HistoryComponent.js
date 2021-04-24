import { View } from "react-native";
import { Title } from "react-native-paper";
import * as React from "react";

export default function History() {
  return (
    <View style={{ marginTop: 30 }}>
      <Title style={{ marginBottom: 20, marginLeft: 80 }}>
        This is your history
      </Title>
    </View>
  );
}
