import React from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

import COLORS from "../constants/colors";

const { width } = Dimensions.get("screen");

export default function PlaceCard({ place, navigation }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate("DetailsScreen", place)}
    >
      <ImageBackground style={styles.cardImage} source={place.image}>
        <Text style={styles.placeName}>{place.name}</Text>
        <View style={styles.cardFooter}>
          <View style={{ flexDirection: "row" }}>
            <Icon name="place" size={20} color={COLORS.white} />
            <Text style={{ marginLeft: 5, color: COLORS.white }}>
              {place.location}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Icon name="star" size={20} color={COLORS.white} />
            <Text style={{ marginLeft: 5, color: COLORS.white }}>5.0</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardImage: {
    height: 220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: "hidden",
    borderRadius: 10,
  },

  placeName: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "700",
    marginTop: 10,
  },

  cardFooter: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-end",
  },
});
