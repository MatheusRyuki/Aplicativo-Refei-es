import React, { useEffect, useCallback } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import { toggleFavorite } from "../store/actions/meals";

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetail = props => {
  const mealId = props.navigation.getParam("mealId");

  const availableMeals = useSelector(state => state.meals.meals);

  const currentMealIsFavorite = useSelector(state =>
    state.meals.favoriteMeals.some(meal => meal.id === mealId)
  );

  const selectedMeal = availableMeals.find(meal => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteDispatch = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteDispatch });
  }, [toggleFavoriteDispatch]);

  useEffect(() => {
    props.navigation.setParams({ isFav: currentMealIsFavorite });
  }, [currentMealIsFavorite]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.detail}>
        <DefaultText>{selectedMeal.duracao} minutos</DefaultText>
        <DefaultText>{selectedMeal.complexidade.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.preco.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredientes</Text>
      {selectedMeal.ingredientes.map((ingrediente, index) => (
        <ListItem key={index}>{ingrediente}</ListItem>
      ))}
      <Text style={styles.title}>Passos</Text>
      {selectedMeal.passos.map((passo, index) => (
        <ListItem key={index}>{passo}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetail.navigationOptions = navigationData => {
  const title = navigationData.navigation.getParam("mealTitle");

  const toggleFav = navigationData.navigation.getParam("toggleFav");

  const isFav = navigationData.navigation.getParam("isFav");

  return {
    headerTitle: title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorito"
          iconName={isFav ? "ios-star" : "ios-star-outline"}
          onPress={toggleFav}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200
  },
  detail: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around"
  },
  title: {
    fontFamily: "open-sans-bold",
    textAlign: "center",
    fontSize: 22
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10
  }
});

export default MealDetail;
