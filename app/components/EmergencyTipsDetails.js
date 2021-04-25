import React from "react";
import { ListItem } from "native-base";
import { Text, Image, StyleSheet, View } from "react-native";
import { observer } from "mobx-react";
import { Card, Title } from "react-native-paper";
import { Spinner } from "@ui-kitten/components";
import tips1Mobx from "../Mobx/Tip1Mobx";

const EmergencyTipsDeatails = () => {
  const tip1 = tips1Mobx.tips1[0];
  if (tip1Mobx.loading) return <Spinner />;

  return (
    <ListItem>
      <View style={{ flex: 1, marginLeft: 23 }}>
        <View>
          <Card
            style={{
              width: 320,
              height: 150,
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
            }}
          >
            <Card.Content>
              <View style={styles.container}>
                <Image
                  style={styles.tinyLogo}
                  source={{ uri: Tips1.Details }}
                />
              </View>
              <Text style={styles.baseText}>Status:</Text>
              <Text style={styles.baseText2}>AMBULANCE</Text>
              <Text style={styles.baseText3}>Date and time</Text>
              <Text style={styles.baseText4}>Location:</Text>
            </Card.Content>
          </Card>
        </View>
      </View>
    </ListItem>
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

export default observer(EmergencyTipsDeatails);
