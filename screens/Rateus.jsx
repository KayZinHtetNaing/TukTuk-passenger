import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import CheckBox from "react-native-check-box";
import axios from "axios";

export default function RateusScreen() {
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
      Alert.alert("Thanks for your feedback");
    }
  };

  return (
    <ScrollView>
      <View style={tw`flex-1 bg-white min-h-full`}>
        <View style={tw`flex-1 justify-center items-center mt-5`}>
          <Text
            style={tw`text-orange-500 font-bold text-3xl tracking-wide leading-normal`}
          >
            App Feedback
          </Text>
        </View>
        <View style={tw`flex-1 px-8 pt-8 bg-white rounded-t-10`}>
          {errorMessage ? (
            <Text style={tw`ml-20 animate-fade-right  text-red-600`} class>
              {errorMessage}
            </Text>
          ) : null}
          <View style={tw`form space-y-2`}>
            <Text style={tw`text-gray-700 ml-4 mb-3`}>Name</Text>
            <TextInput
              style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-5`}
              onChangeText={(text) => setName(text)}
              value={name}
              placeholder="Enter your name"
            />
            <Text style={tw`text-gray-700 ml-4 mb-3`}>Feedback</Text>
            <TextInput
              style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-5 min-h-24`}
              onChangeText={(text) => setFeedback(text)}
              value={feedback}
              placeholder="Please let us know Your Feedback "
            />
            <Text style={tw`text-gray-700 ml-4 mb-3`}>
              Suggestion for improvement
            </Text>
            <TextInput
              style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-5 min-h-24`}
              onChangeText={(text) => setSuggestion(text)}
              value={suggestion}
              placeholder="Please give me some suggestions"
            />
            <Text style={tw`text-gray-700 ml-4 mb-3`}>
              How did you hear this App
            </Text>
            <CheckBox
              style={tw`text-gray-700 ml-4 mb-3`}

              isChecked={isChecked.socialmedia}
              onClick={() => {
                setIsChecked({
                  ...isChecked,
                  socialmedia: !isChecked.socialmedia,
                });
                setCheckbox1(!checkbox1); // Update checkbox state
              }}
              rightText="Social Media"
              rightTextStyle={{
                color: isChecked.socialmedia ? "green" : "black",
              }}
              checkedCheckBoxColor="green"
              uncheckedCheckBoxColor="red"
            />

            {/* Repeat similar changes for the other checkbox components */}

            <CheckBox
              style={tw`text-gray-700 ml-4 mb-3`}
              isChecked={isChecked.friends}
              onClick={() => {
                setIsChecked({ ...isChecked, friends: !isChecked.friends });
                setCheckbox2(!checkbox2);
              }}
              rightText="Friends"
              //  value={checkbox2} onValueChange={setCheckbox2}
              rightTextStyle={{ color: isChecked.friends ? "green" : "black" }}
              checkedCheckBoxColor="green"
              uncheckedCheckBoxColor="red"
            />

            <CheckBox
              style={tw`text-gray-700 ml-4 mb-3`}
              isChecked={isChecked.searchengine}
              onClick={() => {
                setIsChecked({
                  ...isChecked,
                  searchengine: !isChecked.searchengine,
                });
                setCheckbox3(!checkbox3);
              }}
              rightText="Search Engine(e.g Google)"
              //  value={checkbox3} onValueChange={setCheckbox3}
              rightTextStyle={{
                color: isChecked.searchengine ? "green" : "black",
              }}
              checkedCheckBoxColor="green"
              uncheckedCheckBoxColor="red"
            />

            <CheckBox
              style={tw`text-gray-700 ml-4 mb-3`}
              isChecked={isChecked.other}
              onClick={() => {
                setIsChecked({ ...isChecked, other: !isChecked.other });
                setCheckbox4(!checkbox4);
              }}
              rightText="Other"
              //  value={checkbox4} onValueChange={setCheckbox4}
              rightTextStyle={{ color: isChecked.other ? "green" : "black" }}
              checkedCheckBoxColor="green"
              uncheckedCheckBoxColor="red"
            />

            <View >
              <TouchableOpacity
                style={tw`py-3 rounded-full bg-orange-400`}
                onPress={() => {
                  sendFeedback();
                }}
              >
                <Text
                  style={tw`font-xl font-bold text-center text-white text-base`}
                >
                  Submit
                </Text>
              </TouchableOpacity>
             
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}