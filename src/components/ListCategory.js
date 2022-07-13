import React from "react";
import { StyleSheet, View } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

import COLORS from "../constants/colors";

const categoryIcons = [
  <Icon name="flight" size={25} color={COLORS.primary} />,
  <Icon name="beach-access" size={25} color={COLORS.primary} />,
  <Icon name="near-me" size={25} color={COLORS.primary} />,
  <Icon name="place" size={25} color={COLORS.primary} />,
];

export default function ListCategory() {
  return (
    <View style={styles.categoryContainer}>
      {categoryIcons.map((icon, i) => (
        <View key={i} style={styles.iconContainer}>
          {icon}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
