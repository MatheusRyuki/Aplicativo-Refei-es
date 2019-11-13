import React from "react";
import { useSelector } from "react-redux";
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam("categoryId");

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const pratosSelecionados = availableMeals.filter(
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
