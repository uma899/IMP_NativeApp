import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "./src/Home";
import Layout from "./src/layout";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content" // Or "light-content" depending on your header's background
        backgroundColor="#27679c" // Match your header background
        translucent={false}
      />
      <View style={{paddingBottom: 0, flex: 1}}>
        <Layout />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
