import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator
} from "react-navigation";
import CategoriesScreen from "../screens/CategoryScreen";
import CategoriesMealsScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";
import { Platform, Text } from "react-native";
import FavoriteScreen from "../screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import FilterScreen from "../screens/FilterScreen";

const defaultNavConfig = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "white"
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
    fontWeight: undefined
  },
  headerBackStyle: {
    fontFamily: "open-sans",
    fontWeight: undefined
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
};

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
    defaultNavigationOptions: defaultNavConfig
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoriteScreen,
    MealDetail: MealDetailScreen
  },
  {
    mode: "modal",
    defaultNavigationOptions: defaultNavConfig
  }
);

const FilterNavigator = createStackNavigator(
  {
    Filter: FilterScreen
  },
  {
    mode: "modal",
    navigationOptions: {
      drawerLabel: "Filtros"
    },
    defaultNavigationOptions: defaultNavConfig
  }
);

const tabConfig = {
  Refeições: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
      tarBarLabel:
        Platform.OS === "android" ? (
          <Text
            style={{
              fontFamily: "open-sans-bold",
              fontWeight: undefined
            }}
          >
            Refeições
          </Text>
        ) : (
          "Refeições"
        )
    }
  },
  Favoritos: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
      tarBarLabel:
        Platform.OS === "android" ? (
          <Text
            style={{
              fontFamily: "open-sans-bold"
            }}
          >
            Favoritos
          </Text>
        ) : (
          "Favoritos"
        )
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabConfig, {
        activeTintColor: "white",
        shifting: true
      })
    : createBottomTabNavigator(tabConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor
        }
      });

const MainNavigator = createDrawerNavigator(
  {
    MealsFav: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Refeições"
      }
    },
    Filters: FilterNavigator
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: "open-sans-bold",
        fontWeight: undefined
      }
    }
  }
);

export default createAppContainer(MainNavigator);
