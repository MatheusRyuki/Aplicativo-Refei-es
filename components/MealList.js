import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { useSelector } from "react-redux";

const MealList = props => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

  const renderItem = itemData => {
    const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id);

    return (
      <MealItem
        title={itemData.item.title}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFav: isFavorite
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
