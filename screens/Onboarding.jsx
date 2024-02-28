import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Animated,
} from "react-native";
import { useState, useRef } from "react";
import slides from "./slides";
import OnboardingItem from "./OnboardingItem";
//import { style } from "deprecated-react-native-prop-types/DeprecatedViewPropTypes";
//import { ViewPropTypes } from "deprecated-react-native-prop-types";

export default Onboarding = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces = {false}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});