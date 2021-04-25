import {
  ImageBackground,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Title } from "react-native-paper";
import * as React from "react";
import emergencyStore from "../stores/emergencyTypeStore";
import { Text } from "native-base";
import { Card } from "react-native-paper";

const Home = () => {
  const data = emergencyStore.types;
  return (
    <View style={styles.container}>
      <Title>Whats Your Emergemcy?</Title>
      {data.map((type) => (
        <View style={{ flex: 1 }}>
          <TouchableOpacity>
            <View style={{ position: "relative" }}>
              <Card key={type.id}>
                <Card.Content>
                  <Card.Cover
                    source={{ uri: type.image }}
                    style={styles.cardStyle}
                  ></Card.Cover>
                  <Text
                    style={{
                      alignSelf: "flex-end",
                      position: "absolute",
                      paddingTop: 50,
                      fontFamily: "monospace",
                      fontWeight: "bold",
                      fontSize: 40,
                      color: "#ff6f33",
                      overflow: "hidden",
                    }}
                  >
                    {type.type}
                  </Text>
                </Card.Content>
              </Card>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardStyle: {
    alignSelf: "center",
    width: 300,
    height: 87,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    shadowColor: "#000",
    position: "absolute",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  coverStyle: {},
});

export default Home;
