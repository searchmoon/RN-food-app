import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const MealItem = ({ item }) => {
  return (
    <View>
      <Pressable>
        <View>
          <Image style={styles.img} source={{ uri: item.imageUrl }} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});

export default MealItem;
