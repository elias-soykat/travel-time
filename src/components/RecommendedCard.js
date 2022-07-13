import React from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

import COLORS from "../constants/colors";

const { width } = Dimensions.get("screen");

export default function RecommendedCard({ place }) {
  return (
    <ImageBackground style={styles.rmCardImage} source={place.image}>
      <Text style={styles.placeName}>{place.name}</Text>
      <View style={styles.cardFooter}>
        <View style={{ flexDirection: "row" }}>
          <Icon name="place" size={22} color={COLORS.white} />
          <Text style={{ color: COLORS.white, marginLeft: 5 }}>
            {place.location}
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginLeft: 15 }}
        >
          <Icon name="star" size={22} color={COLORS.white} />
          <Text style={{ color: COLORS.white, marginLeft: 5 }}>4.5</Text>
        </View>
      </View>
      <Text style={{ color: COLORS.white, fontSize: 13, marginTop: 5 }}>
        {place.details}
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  rmCardImage: {
    width: width - 40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: "hidden",
    padding: 10,
  },

  placeName: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: "700",
    marginTop: 10,
  },

  cardFooter: {
    width: "100%",
    flexDirection: "row",
    marginTop: 10,
  },
});
