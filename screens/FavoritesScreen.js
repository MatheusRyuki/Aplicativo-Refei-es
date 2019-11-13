import React from "react";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { View, StyleSheet } from "react-native";
import DefaultText from "../components/DefaultText";

const FavoriteScreen = props => {
  const availableMeals = useSelector(state => state.meals.favoriteMeals);

  if (!availableMeals || availableMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>Não foi encontrado favoritos.</DefaultText>
      </View>
    );
  }

  return <MealList pratos={availableMeals} navigation={props.navigation} />;
};

FavoriteScreen.navigationOptions = NavData => {
  return {
    headerTitle: "Seus Favoritos",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => NavData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default FavoriteScreen;
