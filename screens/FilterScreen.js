import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const FilterScreen = props => {
  const [glutten, setGlutten] = useState(false);
  const [lactose, setLactose] = useState(false);
  const [vegetariano, setVegetariano] = useState(false);
  const [vegan, setVegan] = useState(false);

  const { navigation } = props;

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      gluttenFree: glutten,
      lactoseFree: lactose,
      vegetariano: vegetariano,
      vegan: vegan
    };

    console.log(appliedFilters);
  }, [glutten, lactose, vegetariano, vegan]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  const FilterItem = props => {
    return (
      <View style={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch
          value={props.state}
          onValueChange={value => props.onChange(value)}
          trackColor={{ true: Colors.primaryColor }}
          thumbColor={Platform.OS === "android" ? Colors.primaryColor : "white"}
        />
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Filtros / restrições</Text>
      <FilterItem label="Sem Glúten" state={glutten} onChange={setGlutten} />
      <FilterItem label="Sem Lactose" state={lactose} onChange={setLactose} />
      <FilterItem
        label="Vegetariano"
        state={vegetariano}
        onChange={setVegetariano}
      />
      <FilterItem label="Vegan" state={vegan} onChange={setVegan} />
    </View>
  );
};

FilterScreen.navigationOptions = NavData => {
  return {
    headerTitle: "Filtro de Refeições",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => NavData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={NavData.navigation.getParam("save")}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center"
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15
  }
});

export default FilterScreen;
