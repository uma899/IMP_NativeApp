import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Page3 = () => {
  return (
    <View>
      <View style={styles.rect}></View>
      <View style={styles.rect}></View>
      <View style={styles.rect}></View>
    </View>
  );
};

export default Page3;

const styles = StyleSheet.create({
  rect: {
    height: 120, // Slightly increased height for visibility
    borderRadius: 15,
    backgroundColor: "#8a8a8a",
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
