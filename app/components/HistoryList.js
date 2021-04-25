import { observer } from "mobx-react";
import { Content, List } from "native-base";
import React from "react";
import emergencyStore from "../stores/EmergencyStore";

import HistoryItem from "./HistoryItem";

const HistoryList = () => {
  //Stores => EmergencyStore => fitch all the emergancies from the backend

  //.filter((emergency) => emergency.requesterId === AuthStore.user.id)
  const historyList = emergencyStore.emergencies.map((emergency) => (
    <HistoryItem emergency={emergency} key={emergency.id} />
  ));

  return (
    <Content>
      <List>{historyList}</List>
    </Content>
  );
};

export default observer(HistoryList);
