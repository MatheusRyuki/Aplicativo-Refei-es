import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import CategoriesScreen from "../screens/CategoryScreen";
import CategoriesMealsScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";
import { Platform } from "react-native";
import FavoriteScreen from "../screens/FavoritesScreen";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen
    },
    CategoryMeals: {
      screen: CategoriesMealsScreen
    },
    MealDetail: MealDetailScreen
  },
  {
    mode: "modal",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primaryColor : "white"
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
    }
  }
);

const MealsFavTabNavigator = createBottomTabNavigator({
  Refeições: MealsNavigator,
  Favoritos: FavoriteScreen
});

export default createAppContainer(MealsFavTabNavigator);
