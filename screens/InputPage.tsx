import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import InputField from "../components/InputField";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "ASYNC_STORAGE_NAME";

export default function ScrollingPage() {
  const [name, setName] = useState("");

  async function loadName() {
    try {
      const name = await AsyncStorage.getItem(STORAGE_KEY);

      if (name === null) return;

      setName(name);
    } catch (e) {
      console.error("Failed to load name.");
    }
  }

  const saveName = async (name: string) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, name);
      setName(name);
    } catch (e) {
      console.error("Failed to save name.");
    }
  };

  useEffect(() => {
    loadName();
  }, []);

  return (
    <View style={styles.container}>
      <InputField
        placeholder="Enter your name"
        onSubmitEditing={(name) => saveName(name)}
      />
      <Text style={styles.text}>Hello {name}!</Text>
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
