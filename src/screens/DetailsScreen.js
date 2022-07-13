import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

import COLORS from "../constants/colors";

export default function DetailsScreen({ navigation, route }) {
  const place = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0)" />
      <ImageBackground style={{ flex: 0.7 }} source={place.image}>
        <View style={styles.header}>
          <Icon
            name="arrow-back-ios"
            size={28}
            color={COLORS.white}
            onPress={navigation.goBack}
          />
          <Icon name="more-vert" size={28} color={COLORS.white} />
        </View>
        <View style={styles.imageDetails}>
          <Text style={styles.placeName}>{place.name}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Icon name="star" size={28} color={COLORS.white} />
            <Text
              style={{
                color: COLORS.white,
                fontWeight: "700",
                fontSize: 20,
                marginLeft: 4,
              }}
            >
              4.0
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.detailsContainer}>
        <View style={styles.iconContainer}>
          <Icon name="favorite" size={30} color={COLORS.red} />
        </View>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <Icon name="place" size={27} color={COLORS.primary} />
          <Text style={styles.placeLocation}>{place.location}</Text>
        </View>
        <Text style={{ marginTop: 15, fontSize: 20, fontWeight: "700" }}>
          About the trip
        </Text>
        <Text style={{ marginTop: 15, lineHeight: 22 }}>{place.details}</Text>
      </View>
      <View style={styles.footer}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{ fontSize: 18, fontWeight: "700", color: COLORS.white }}
          >
            $100
          </Text>
          <Text style={{ fontSize: 12, fontWeight: "700", color: COLORS.grey }}>
            {" "}
            / PER DAY
          </Text>
        </View>
        <View style={styles.bookNowBtn}>
          <Text
            onPress={() => navigation.navigate("OnBoardScreen")}
            style={{ color: COLORS.primary, fontSize: 16, fontWeight: "700" }}
          >
            Book Now
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  imageDetails: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    bottom: 30,
  },

  placeName: {
    width: "70%",
    fontSize: 30,
    fontWeight: "700",
    color: COLORS.white,
    marginBottom: 20,
  },

  detailsContainer: {
    top: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    flex: 0.3,
  },

  iconContainer: {
    height: 55,
    width: 55,
    position: "absolute",
    top: -30,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    right: 20,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  placeLocation: {
    marginLeft: 5,
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.primary,
  },

  footer: {
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    height: 70,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  bookNowBtn: {
    height: 45,
    width: 140,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
