import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addName, removeName } from "../features/NamesList/namesSlice";
import InputField from "../components/InputField";

export default function ScrollingPage() {
  const namesList = useAppSelector((state) => state.namesList);
  const dispatch = useAppDispatch();

  const handleNameAdd = (name: string) => dispatch(addName(name));
  const handleNameRemove = (name: string) => dispatch(removeName(name));

  return (
    <View style={styles.container}>
      <InputField
        placeholder="Enter your name"
        onSubmitEditing={handleNameAdd}
      />
      {namesList.map((name, index) => (
        <View key={index}>
          <Pressable onPress={() => handleNameRemove(name)}>
            <Text style={styles.text}>Hello {name}!</Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    padding: 15,
    backgroundColor: "lightgreen",
  },
});
