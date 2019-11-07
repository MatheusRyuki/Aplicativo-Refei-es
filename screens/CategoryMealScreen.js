import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam("categoryId");
  const categoriaEscolhida = CATEGORIES.find(cat => cat.id === catId);

  return (
    <View style={styles.screen}>
      <Text> {categoriaEscolhida.title}</Text>
      <Button
        title="Ir para tela de Detalhe de Refeição!"
        onPress={() =>
          props.navigation.navigate({
            routeName: "MealDetail"
          })
        }
      />
      <Button title="Voltar" onPress={() => props.navigation.pop()} />
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
