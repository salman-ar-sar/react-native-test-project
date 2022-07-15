import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabTwoScreen() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <Text style={styles.subTitle}>That was fast!</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={() => setClickCount(clickCount + 1)}
        onPressIn={() => console.log("pressed in")}
        onPressOut={() => console.log("pressed out")}
        onLongPress={() => console.log("long pressed")}
      >
        <Text style={styles.text}>Test Button</Text>
      </TouchableOpacity>
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "normal",
  },
  button: {
    padding: 10,
    borderRadius: 4,
    borderWidth: 5,
    borderColor: "red",
    backgroundColor: "cyan",
    marginVertical: 20,
  },
  text: {
    fontSize: 18,
    padding: 12,
    fontWeight: "bold",
    color: "black",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
