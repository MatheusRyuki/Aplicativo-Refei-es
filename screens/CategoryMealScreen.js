import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam("categoryId");

  const renderItem = itemData => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
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
