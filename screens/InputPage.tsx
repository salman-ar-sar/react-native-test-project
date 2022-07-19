import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  addName,
  tickName,
  removeName,
  NameListType,
} from "../features/NamesList/namesSlice";
import InputField from "../components/InputField";

export default function ScrollingPage() {
  const namesList = useAppSelector((state) => state.namesList);
  const dispatch = useAppDispatch();

  const handleNameAdd = (name: NameListType) => dispatch(addName(name));
  const handleNameTick = (name: NameListType) => dispatch(tickName(name.id));
  const handleNameRemove = (name: NameListType) =>
    dispatch(removeName(name.id));

  const nameObjectCreator = (name: string): NameListType => ({
    id: Math.round(Math.random() * 1000),
    name,
    ticked: false,
  });

  return (
    <View style={styles.container}>
      <InputField
        placeholder="Enter your name"
        onSubmitEditing={(name) => handleNameAdd(nameObjectCreator(name))}
      />
      {namesList.map((nameObject, index) => (
        <View key={index}>
          <View style={styles.nameContainer}>
            <Text
              style={
                nameObject.ticked ? { textDecorationLine: "line-through" } : {}
              }
              onPress={() => handleNameTick(nameObject)}
            >
              Hello {nameObject.name}!
            </Text>
            <Text
              style={{ fontWeight: "900" }}
              onPress={() => handleNameRemove(nameObject)}
            >
              X
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nameContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "lightgreen",
    padding: 15,
  },
});
