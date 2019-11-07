import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const renderGridItem = itemData => {
  return (
    <View style={styles.gridItem}>
      <Text>{itemData.item.title}</Text>
    </View>
  );
};

const CategoryScreen = props => {
  return (
    <FlatList
      numColumns={2}
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default CategoryScreen;
