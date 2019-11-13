import React from "react";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const FavoriteScreen = props => {
  const availableMeals = useSelector(state => state.meals.favoriteMeals);

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

export default FavoriteScreen;
