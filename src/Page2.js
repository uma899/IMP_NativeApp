import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

const Page2 = () => {
  const [api, setApi] = useState(""); // Initialize with an empty string for text input
  const [data, setData] = useState([]);
  const [st, setSt] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [click, setClick] = useState(false);
  // Assuming these states are defined in your component:
  // const [data, setData] = useState(null);
  // const [status, setStatus] = useState(null); // To store a custom status from the API response body
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const fetchData = async () => {
    // Accept the api as an argument
    setLoading(true); // Indicate that data fetching has started
    setError(null); // Clear any previous errors

    try {
      let response = await fetch(api);
      setSt(response.status);

      if (!response.ok) {
        const errorText = await response.text(); // Try to get error message from response body
        throw new Error(
          `HTTP error! Status: ${response.status} - ${
            errorText || "Unknown Error"
          }`
        );
      }

      let got = await response.json();
      setData(got);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.message || "Failed to fetch data."); // Store the error message
    } finally {
      setLoading(false);
    }
  };

  const Item = () => {
    if (loading && click) {
      return <Text>Loading...</Text>;
    }
    if (!click) {
      return <Text>Make sure to put http..</Text>;
    }
    if (error) {
      return (
        <View>
          <Text>{error}</Text>{" "}
          <Text>
            <Text style={{ fontWeight: "bold" }}>Status: </Text>
            {st.toString()}
          </Text>
        </View>
      );
    }
    return (
      <View style={{ flexDirection: "column" }}>
        <Text>{JSON.stringify(data)}</Text>
        <Text>
          <Text style={{ fontWeight: "bold" }}>Status: </Text>
          {st.toString()}
        </Text>
      </View>
    );
  };

  return (
    <View style={{ paddingVertical: 20 }}>
      <TextInput
        style={{
          paddingLeft: 10, // Increased padding for better text visibility
          borderColor: "gray", // Changed to gray for a softer look
          borderWidth: 1,
          borderRadius: 5, // Added border radius for a modern feel
          height: 40, // Fixed height for consistency
        }}
        onChangeText={(text) => {
          // Use onChangeText to directly get the text value
          setClick(false);
          setApi(text);
        }}
        value={api} // Make it a controlled component by binding value to state
        placeholder="Enter a api" // Capitalized "api"
        placeholderTextColor="#888" // Added placeholder color
        autoCapitalize="none" // apis are usually lowercase
      />
      <Text style={{ marginTop: 10, fontSize: 16 }}>
        You entered: <Text style={{ fontWeight: "bold" }}>{api}</Text>
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#27679c",
          alignSelf: "flex-start",
          padding: 8,
          borderRadius: 6,
        }}
        onPress={() => {
          fetchData();
          setClick(true);
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
          Fetch
        </Text>
      </TouchableOpacity>
      <Item></Item>
    </View>
  );
};

export default Page2;

const styles = StyleSheet.create({}); // Stylesheet is empty, but can be used for TextInput too.
