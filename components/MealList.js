import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";

const MealList = props => {
  const renderItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id
            }
          });
        }}
        duracao={itemData.item.duracao}
        complexidade={itemData.item.complexidade}
        preco={itemData.item.preco}
        image={itemData.item.imageUrl}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={props.pratos}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MealList;
