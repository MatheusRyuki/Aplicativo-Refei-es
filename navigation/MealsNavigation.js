import { createStackNavigator, createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoryScreen";
import CategoriesMealsScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoriesMealsScreen
  },
  MealDetail: MealDetailScreen
});

export default createAppContainer(MealsNavigator);
