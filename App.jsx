import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    fetch("http://192.168.56.1:8080/produtos/find/19").then((response) => {
      response.json().then((data) => {
        console.log(data);
      });
    });
  });

  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
