import React from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam("categoryId");

  const pratosSelecionados = MEALS.filter(
    refeicao => refeicao.categoryIds.indexOf(catId) >= 0
  );

  return <MealList pratos={pratosSelecionados} navigation={props.navigation} />;
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");
  const categoriaEscolhida = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: categoriaEscolhida.title
  };
};

export default CategoryMealScreen;
