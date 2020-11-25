import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewOneStyle: {
    width: 50,
    height: 50,
    backgroundColor: "red",
  },
  viewTwoStyle: {
    width: 50,
    height: 50,
    alignSelf: "flex-end",
    backgroundColor: "green",
  },
  viewThreeStyle: {
    width: 50,
    height: 50,
    backgroundColor: "purple",
  },
});

export default BoxScreen;
