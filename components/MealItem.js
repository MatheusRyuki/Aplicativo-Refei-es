import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";

const MealItem = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onSelect}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
            <Text>{props.duracao} minutos</Text>
            <Text>{props.complexidade.toUpperCase()}</Text>
            <Text>{props.preco.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    color: "white",
    textAlign: "center"
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  mealHeader: {
    height: "85%"
  },
  mealDetails: {
    height: "15%",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center"
  },
  mealRow: {
    flexDirection: "row"
  },
  container: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10
  }
});

export default MealItem;
