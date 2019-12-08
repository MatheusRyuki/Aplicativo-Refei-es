import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const renderGridItem = props => {
  return (
    <View style={styles.gridItem}>
      <TouchableOpacity onPress={props.onSelect} style={{ flex: 1 }}>
        <View style={{ ...styles.container, backgroundColor: props.color }}>
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "right"
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 5,
    overflow: "hidden"
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  }
});

export default renderGridItem;
