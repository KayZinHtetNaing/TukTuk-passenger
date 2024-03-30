import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Animated,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { useState, useRef,useContext } from "react";
import { AntDesign } from '@expo/vector-icons';
import themeContext from "../theme/themeContext";
import { useNavigation } from "@react-navigation/native";
import theme from "../theme/theme";
import tw from 'twrnc';
import { SafeAreaView } from "react-native-safe-area-context";
import LoginGuide from "./LoginGuide";

import slides from "./slides";
import OnboardingItem from "./OnboardingItem";
//import { style } from "deprecated-react-native-prop-types/DeprecatedViewPropTypes";
//import { ViewPropTypes } from "deprecated-react-native-prop-types";

export default GuideScreen = () => {

  const navigation = useNavigation();

  const theme=useContext(themeContext)

  const [darkMode,setDarkMode]=useState(false)

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;
  
  const slidesRef = useRef(null);

  const viewableItemChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <ScrollView>
    <SafeAreaView>
    <View style={tw`flex-row justify-start`}>
            <TouchableOpacity
              style={tw`p-2 ml-4 mt-2`}
              onPress={() => navigation.navigate('Welcome')}
            >
          <AntDesign name="arrowleft" size={20} color="black" />        
    </TouchableOpacity>
          </View>
          <ScrollView>
    <View style={styles.container}>

      <View style={[{flex : 3}]}>
      <Text style={[tw`text-lg mt-1 mb-3 text-center`,{color:theme.color}]}>ဘယ်လိုအကောင့်ဖွင့်မလဲ</Text>
      <FlatList
        data={slides}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
      />
      </View>

      <View style={[{flex : 3}]}>
      <Text style={[tw`text-lg mt-5 mb-3 text-center`,{color:theme.color}]}>အကောင့်ရှိပြီးပါက အကောင့်ဘယ်လိုပြန်၀င်မလဲ</Text>
      <FlatList
        data={LoginGuide}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
      />
      </View>

        </View>
        </ScrollView>
        </SafeAreaView>
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