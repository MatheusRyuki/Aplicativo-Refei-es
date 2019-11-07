import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoryScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The CategoryScreen!</Text>
      <Button
        title="Ir para tela de Refeições!"
        onPress={() =>
          props.navigation.navigate({
            routeName: "CategoryMeals"
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryScreen;
