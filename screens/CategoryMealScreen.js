import React from "react";
import { useSelector } from "react-redux";
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import { View, StyleSheet } from "react-native";
import DefaultText from "../components/DefaultText";

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam("categoryId");

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const pratosSelecionados = availableMeals.filter(
    refeicao => refeicao.categoryIds.indexOf(catId) >= 0
  );

  if (pratosSelecionados.length === 0 || !pratosSelecionados) {
    return (
      <View style={styles.content}>
        <DefaultText>Nenhum Prato foi encontrado.</DefaultText>
      </View>
    );
  }

  return <MealList pratos={pratosSelecionados} navigation={props.navigation} />;
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");
  const categoriaEscolhida = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: categoriaEscolhida.title
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealScreen;
