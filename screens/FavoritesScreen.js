import React from "react";
import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { MEALS } from "../data/dummy-data";

const FavoriteScreen = props => {
  const favMeals = MEALS.filter(meal => meal.id === "m1" || meal.id === "m2");
  return <MealList pratos={favMeals} navigation={props.navigation} />;
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

export default FavoriteScreen;
