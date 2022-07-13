import React from "react";
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

import ListCategory from "../components/ListCategory";
import PlaceCard from "../components/PlaceCard";
import RecommendedCard from "../components/RecommendedCard";

import COLORS from "../constants/colors";
import places from "../constants/places";

const { width } = Dimensions.get("screen");

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar translucent={false} backgroundColor={COLORS.primary} />
      <View style={styles.header}>
        <Icon name="sort" size={28} color={COLORS.white} />
        <Icon name="notifications-none" size={28} color={COLORS.white} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: COLORS.primary,
            height: 120,
            paddingHorizontal: 20,
          }}
        >
          <View>
            <Text style={styles.headerTitle}>Explore the</Text>
            <Text style={styles.headerTitle}>Beautiful places</Text>
            <View style={styles.inputContainer}>
              <Icon name="search" size={28} />
              <TextInput
                placeholder="Search place"
                style={{ color: COLORS.grey, paddingRight: 20 }}
              />
            </View>
          </View>
        </View>
        <ListCategory />
        <Text style={styles.sectionTitle}>Places</Text>
        <View>
          <FlatList
            contentContainerStyle={{ paddingLeft: 20 }}
            data={places}
            renderItem={({ item }) => (
              <PlaceCard place={item} navigation={navigation} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <Text style={styles.sectionTitle}>Recommended</Text>
          <FlatList
            snapToInterval={width - 20}
            contentContainerStyle={{ paddingLeft: 20, paddingBottom: 20 }}
            data={places}
            renderItem={({ item }) => <RecommendedCard place={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.primary,
  },

  headerTitle: {
    color: COLORS.white,
    fontWeight: "700",
    fontSize: 23,
  },

  inputContainer: {
    height: 60,
    width: "100%",
    backgroundColor: COLORS.white,
    borderRadius: 10,
    position: "absolute",
    top: 90,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    elevation: 12,
  },

  sectionTitle: {
    margin: 20,
    fontWeight: "700",
  },
});
