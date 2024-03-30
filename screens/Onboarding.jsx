import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Animated,
  ScrollView
} from "react-native";
import { useState, useRef } from "react";
import slides from "./slides";
import OnboardingItem from "./OnboardingItem";
import tw from 'twrnc'
import theme from "../theme/theme";
import themeContext from "../theme/themeContext";
//import { style } from "deprecated-react-native-prop-types/DeprecatedViewPropTypes";
//import { ViewPropTypes } from "deprecated-react-native-prop-types";
import aboutguide from "./aboutguide";
export default Onboarding = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <ScrollView>
    <View style={styles.container}>

      <View style={[{flex : 3}]}>
      <Text style={[tw`text-lg mt-1 mb-3 text-center`,{color:theme.color}]}>ပင်မစာမျက်နှာကိုဘယ်လိုအသုံးပြုမလဲ</Text>
      <FlatList
        data={aboutguide}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
      />
      </View>

        </View>
        </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});