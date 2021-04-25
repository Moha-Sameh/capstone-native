import React from "react";

import { Text, Image, StyleSheet, View } from "react-native";
import { observer } from "mobx-react";
import { Card } from "react-native-paper";

const AccedentsDetails = ({ tip2 }) => {
  return (
    <View style={{ flex: 1 }}>
      <Image style={styles.tinyLogo} />
      <Card
        style={{
          width: 375,
          height: 373,
          borderBottomRightRadius: 15,
          borderBottomLeftRadius: 15,
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 7,
          },
          shadowOpacity: 0.41,
          shadowRadius: 9.11,

          elevation: 14,
          marginTop: 280,
          marginLeft: 15,
        }}
      >
        <Card.Content>
          <View style={styles.container}></View>
          <Text style={styles.baseText}>Status:</Text>
          <Text style={styles.baseText2}>AMBULANCE</Text>
          <Text style={styles.baseText3}>Date and time</Text>
          <Text style={styles.baseText4}>Location:</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
  },
  tinyLogo: {
    width: 70,
    height: 70,
  },
  baseText: {
    fontWeight: "bold",
    marginLeft: "70%",
    marginTop: "-35%",
  },
  baseText2: {
    fontWeight: "bold",
    marginLeft: "37%",
    marginTop: 15,
  },
  baseText3: {
    fontWeight: "bold",
    marginLeft: "37%",
  },
  baseText4: {
    fontWeight: "bold",
    marginLeft: "37%",
  },
  innerText: {
    color: "red",
  },
});

export default observer(AccedentsDetails);