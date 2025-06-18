import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity, // Import Dimensions for screen width
} from "react-native";
import Home from "./Home";
import { useState } from "react";
import Page2 from "./Page2";
import Page3 from "./Page3";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window"); // Get screen width

export default function Layout() {
  const [sc, setSc] = useState("Home");
  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Test Home</Text>
      </View>
      <ScrollView style={{ paddingHorizontal: 5 }}>
        {sc === "Home" ? (
          <Home />
        ) : sc === "Page3" ? (
          <Page3 />
        ) : sc === "Page2" ? (
          <Page2 />
        ) : (
          <Text>Select a page</Text>
        )}
      </ScrollView>
      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => {
            setSc("Home");
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "800",
              color: sc == "Home" ? "white" : "black",
            }}
          >
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSc("Page2");
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "800",
              color: sc == "Page2" ? "white" : "black",
            }}
          >
            Page2
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSc("Page3");
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "800",
              color: sc == "Page3" ? "white" : "black",
            }}
          >
            Page3
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: screenHeight * 0.09, // Fixed height for header
    width: "100%",
    backgroundColor: "#27679c",
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
  title: {
    fontSize: 25,
    fontWeight: "800",
    color: "#fff", // White text for header
  },
  footer: {
    height: screenHeight * 0.07, // Fixed height for footer
    width: "100%",
    backgroundColor: "#27679c",

    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  footerText: {
    color: "#fff",
    fontSize: 16,
  },
  contentContainer: {},
});
