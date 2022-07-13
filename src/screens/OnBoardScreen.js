import React from "react";
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import COLORS from "../constants/colors";

export default function OnBoardScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0)" />
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../assets/onboardImage.jpg")}
      >
        <View style={styles.details}>
          <Text style={styles.title}>Discover</Text>
          <Text style={styles.title}>World With Us</Text>
          <Text style={{ color: COLORS.white, lineHeight: 25, marginTop: 15 }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. tempora
            rerum voluptates dignissimos eveniet.
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <View style={styles.btn}>
              <Text style={{ fontWeight: "700", fontSize: 14 }}>
                Get Started
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    height: "50%",
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 40,
  },

  title: {
    color: COLORS.white,
    fontSize: 42,
    fontWeight: "700",
  },

  btn: {
    height: 48,
    width: 120,
    backgroundColor: COLORS.white,
    marginTop: 20,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
});
