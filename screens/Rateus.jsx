import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  TextInput,
} from "react-native";
import React, { useState,useContext } from "react";
import tw from "twrnc";
import CheckBox from "react-native-check-box";
import axios from "axios";
import { useNavigation } from '@react-navigation/native'
import { EventRegister } from 'react-native-event-listeners'
import themeContext from '../theme/themeContext'

export default function RateusScreen() {
  const theme=useContext(themeContext)

  const [darkMode,setDarkMode]=useState(false)

  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);
  const [checkbox4, setCheckbox4] = useState(false);

  const [isChecked, setIsChecked] = useState({
    socialmedia: false,
    friends: false,
    searchengine: false,
    other: false,
  });
  const [errorMessage, setErrorMessage] = useState(null);

  const createFeedback = async (feedbacks) => {
    try {
      const response = await axios.post(
        "http://192.168.43.239:3000/feedback",
        feedbacks
      );
      console.log("Feedback response:", response.data);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error("Server responded with status:", error.response.status);
        console.error("Response data:", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received from server");
      } else {
        // Something happened in setting up the request that triggered an error
        console.error("Error setting up request:", error.message);
      }
      throw error; // Rethrow the error to handle it further up the call stack if needed
    }
  };

  const sendFeedback = () => {
    const how_know = [];

    if (checkbox1) how_know.push("Social Media");
    if (checkbox2) how_know.push("Friends");
    if (checkbox3) how_know.push("Search Engine");
    if (checkbox4) how_know.push("Others");

    if (!name || !feedback || !suggestion) {
      setErrorMessage("All fields are required");
      return;
    } else {
      // const feedbacks = { name, feedback, suggestion, checkedOptions };
      const feedbacks = { name, feedback, suggestion, how_know };
      console.log(feedbacks);

      createFeedback(feedbacks);
      setName("");
      setFeedback("");
      setSuggestion("");
      setIsChecked({
        socialmedia: false,
        friends: false,
        searchengine: false,
        other: false,
      });
      Alert.alert("အကြံပြုမှုအတွက်ကျေးဇူးတင်ပါသည်။");
    }
  };

  return (
    <ScrollView style={{backgroundColor:theme.backgroundColor}}>
      <View style={[{flex:1,backgroundColor:"white",minHeight:"100%"},{backgroundColor:theme.backgroundColor}]}>
        <View style={tw`flex-1 justify-center items-center mt-5`} >
          <Text
            style={tw`text-orange-500 font-bold text-3xl tracking-wide leading-normal mb-8`}
          >
          App အတွက်အကြုံပြုစာ
          </Text>
          {/* tw`flex-1 px-8 pt-8 bg-white rounded-t-10` */}
        </View>
        <View style={[{flex:1,paddingLeft:8,paddingRight:8,backgroundColor:"white",borderRadius:15},{backgroundColor:theme.backgroundColor}]}>
          {errorMessage ? (
            <Text style={tw`ml-20 animate-fade-right text-red-600`} class>
              {errorMessage}
            </Text>
          ) : null}
          <View>
            <Text style={tw`text-orange-500 ml-10 `}>အမည်</Text>
            <TextInput
              style={tw`p-4 bg-white text-gray-700 rounded-2xl ml-9 mr-9 mt-3 mb-7`}
              onChangeText={(text) => setName(text)}
              value={name}
              placeholder="အမည်ရိုက်ထည့်ပါ"
            />
            <Text style={tw`text-orange-500 ml-4 ml-10`}>အကြုပြုစာ</Text>
            <TextInput
              style={tw`p-4 bg-white text-gray-700 rounded-2xl ml-9 mr-9 mt-3 mb-7`}
              onChangeText={(text) => setFeedback(text)}
              value={feedback}
              placeholder="သင့်ရဲ့အကြံပြုစာရေးထည့်ပါ"
            />
            <Text style={tw`text-orange-500 ml-4 ml-10`}>
            တိုးတက်မှုအတွက် အကြံပြုချက်
            </Text>
            <TextInput
              style={tw`p-4 bg-white text-gray-700 rounded-2xl mb-5 min-h-24 ml-9 mr-9 mt-3 mb-7`}
              onChangeText={(text) => setSuggestion(text)}
              value={suggestion}
              placeholder="ကျေးဇူးပြု၍ကျွန်ုပ်ကိုအကြံပြုချက်အချို့ပေးပါ"
            />
            <Text style={tw`text-orange-500 ml-4 mb-3 ml-10`}>
            ဒီ App ကို ဘယ်လိုသိခဲ့တာလဲ။
            </Text>
            <CheckBox
              style={tw`text-gray-700 ml-10 mb-3`}

              isChecked={isChecked.socialmedia}
              onClick={() => {
                setIsChecked({
                  ...isChecked,
                  socialmedia: !isChecked.socialmedia,
                });
                setCheckbox1(!checkbox1); // Update checkbox state
              }}
              rightText="လူမှုမီဒီယာများမှတဆင့်"
              rightTextStyle={{
                color: isChecked.socialmedia ? "green" : "darkorange",
              }}
              checkedCheckBoxColor="green"
              uncheckedCheckBoxColor="red"
            />

            {/* Repeat similar changes for the other checkbox components */}

            <CheckBox
              style={tw`text-gray-700 ml-10 mb-3`}
              isChecked={isChecked.friends}
              onClick={() => {
                setIsChecked({ ...isChecked, friends: !isChecked.friends });
                setCheckbox2(!checkbox2);
              }}
              rightText="သူငယ်ချင်းများမှတဆင့်"
              //  value={checkbox2} onValueChange={setCheckbox2}
              rightTextStyle={{ color: isChecked.friends ? "green" : "darkorange" }}
              checkedCheckBoxColor="green"
              uncheckedCheckBoxColor="red"
            />

            <CheckBox
              style={tw`text-gray-700 ml-10 mb-3`}
              isChecked={isChecked.searchengine}
              onClick={() => {
                setIsChecked({
                  ...isChecked,
                  searchengine: !isChecked.searchengine,
                });
                setCheckbox3(!checkbox3);
              }}
              rightText="ရှာဖွေမှုများမှတဆင့်(ဥပမာ-Google)"
              //  value={checkbox3} onValueChange={setCheckbox3}
              rightTextStyle={{
                color: isChecked.searchengine ? "green" : "darkorange",
              }}
              checkedCheckBoxColor="green"
              uncheckedCheckBoxColor="red"
            />

            <CheckBox
              style={tw`text-gray-700 ml-10 mb-3`}
              isChecked={isChecked.other}
              onClick={() => {
                setIsChecked({ ...isChecked, other: !isChecked.other });
                setCheckbox4(!checkbox4);
              }}
              rightText="အခြားအရာများမှတဆင့်..."
              //  value={checkbox4} onValueChange={setCheckbox4}
              rightTextStyle={{ color: isChecked.other ? "green" : "darkorange" }}
              checkedCheckBoxColor="green"
              uncheckedCheckBoxColor="red"
            />

            <View >
              <TouchableOpacity
                style={tw`py-3 rounded-full bg-orange-400 m-7`}
                onPress={() => {
                  sendFeedback();
                }}
              >
                <Text
                  style={tw`text-xl font-bold text-center text-white text-base`}
                >
                  ပေးပို့မည်
                </Text>
              </TouchableOpacity>
             
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}