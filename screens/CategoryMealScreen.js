import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam("categoryId");

  const renderItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        onSelect={() => {}}
        duracao={itemData.item.duracao}
        complexidade={itemData.item.complexidade}
        preco={itemData.item.preco}
        image={itemData.item.imageUrl}
      />
    );
  };

  const pratosSelecionados = MEALS.filter(
    refeicao => refeicao.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={pratosSelecionados}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");
  const categoriaEscolhida = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: categoriaEscolhida.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealScreen;
