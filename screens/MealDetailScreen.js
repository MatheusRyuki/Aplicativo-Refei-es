import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetail = props => {
  const mealId = props.navigation.getParam("mealId");

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button title="Voltar" onPress={() => props.navigation.popToTop()} />
    </View>
  );
};

MealDetail.navigationOptions = navigationData => {
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MealDetail;
