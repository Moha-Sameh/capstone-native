import { View } from "react-native";

import { Avatar, Card, Title, Paragraph } from "react-native-paper";
import * as React from "react";
import authStore from "../stores/authStore";

export default function Profile() {
  return (
    <>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Avatar.Image size={60} source={{ uri: authStore.user.image }} />
      </View>
      <View
        style={{
          marginBottom: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          style={{
            width: "50%",
            height: 50,
            borderBottomRightRadius: 40,
            borderBottomLeftRadius: 40,
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
          }}
        >
          <Card.Content>
            <Title style={{ marginTop: -7, marginLeft: 50 }}>
              {authStore.user.firstName}
            </Title>
          </Card.Content>
        </Card>
      </View>
      <View
        style={{
          marginBottom: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          style={{
            width: "50%",
            height: 50,
            borderBottomRightRadius: 40,
            borderBottomLeftRadius: 40,
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
          }}
        >
          <Card.Content>
            <Title style={{ marginTop: -7, marginLeft: 50 }}>
              {" "}
              {authStore.user.lastName}
            </Title>
          </Card.Content>
        </Card>
      </View>
      <View
        style={{
          marginBottom: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          style={{
            width: "50%",
            height: 50,
            borderBottomRightRadius: 40,
            borderBottomLeftRadius: 40,
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
          }}
        >
          <Card.Content>
            <Title style={{ marginTop: -7, marginLeft: 50 }}>
              {" "}
              {authStore.user.username}
            </Title>
          </Card.Content>
        </Card>
      </View>
      <View
        style={{
          marginBottom: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          style={{
            width: "50%",
            height: 50,
            borderBottomRightRadius: 40,
            borderBottomLeftRadius: 40,
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
          }}
        >
          <Card.Content>
            <Title style={{ marginTop: -7, marginLeft: 50 }}>
              {authStore.user.phonenumber}
            </Title>
          </Card.Content>
        </Card>
      </View>
    </>
  );
}
