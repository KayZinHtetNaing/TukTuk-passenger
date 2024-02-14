import { View, Text, TouchableOpacity, ScrollView, Alert ,TextInput} from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import CheckBox from 'react-native-check-box';
import axios from 'axios';

export default function RateusScreen() {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [howKnow, setHowKnow] = useState('');
  const [isChecked, setIsChecked] = useState({
    socialMedia: false,
    friends: false,
    searchEngine: false,
    others: false
  });
  const [errorMessage, setErrorMessage] = useState(null);

  const handleCheckboxChange = (key) => {
    setIsChecked({
      ...isChecked,
      [key]: !isChecked[key]
    });
  };

  const createFeedback = async (feedbacks) => {
    try {
      const response = await axios.post("http://192.168.1.209:3000/feedback", feedbacks);
      console.log('Feedback response:', response.data);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Server responded with status:', error.response.status);
        console.error('Response data:', error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received from server');
      } else {
        // Something happened in setting up the request that triggered an error
        console.error('Error setting up request:', error.message);
      }
      throw error; // Rethrow the error to handle it further up the call stack if needed
    }
  };
  

  const sendFeedback = () => {
    if (!name || !feedback || !suggestion || Object.values(isChecked).every(value => !value)) {
      setErrorMessage("All fields are required");
      return;
    } else {
      const checkedOptions = Object.keys(isChecked).filter(key => isChecked[key]);
      console.log('Name:', name);
      console.log('Feedback:', feedback);
      console.log('Suggestion:', suggestion);
      console.log('Checked options:', checkedOptions);
      // const feedbacks = { name, feedback, suggestion, checkedOptions };
      const feedbacks = { name, feedback, suggestion, how_know: howKnow, checkedOptions };
      createFeedback(feedbacks);
      setName('');
      setFeedback('');
      setSuggestion('');
      setIsChecked({
        socialMedia: false,
        friends: false,
        searchEngine: false,
        others: false
      });
      Alert.alert("Thanks for your feedback");
    }
  };

  return (
    <ScrollView>
      <View style={tw`flex-1 bg-white min-h-full`}>
        <View style={tw`flex-1 justify-center items-center mt-5`}>
          <Text style={tw`text-orange-500 font-bold text-3xl tracking-wide leading-normal`}>App Feedback</Text>
        </View>
        <View style={tw`flex-1 px-8 pt-8 bg-white rounded-t-10`}>
          {
            errorMessage ? <Text style={tw`ml-20 animate-fade-right  text-red-600`} class>{errorMessage}</Text> : null
          }
          <View style={tw`form space-y-2`}>
            <Text style={tw`text-gray-700 ml-4 mb-3`}>Name</Text>
            <TextInput
              style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-5`}
              onChangeText={text => setName(text)}
              value={name}
              placeholder="Enter your name"
            />
            <Text style={tw`text-gray-700 ml-4 mb-3`}>Feedback</Text>
            <TextInput
              style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-5 min-h-24`}
              onChangeText={text => setFeedback(text)}
              value={feedback}
              placeholder="Please let us know Your Feedback "
            />
            <Text style={tw`text-gray-700 ml-4 mb-3`}>Suggestion for improvement</Text>
            <TextInput
              style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-5 min-h-24`}
              onChangeText={text => setSuggestion(text)}
              value={suggestion}
              placeholder="Please give me some suggestions"
            />
            <Text style={tw`text-gray-700 ml-4 mb-3`}>How did you hear this App</Text>
            <CheckBox
              style={tw`text-gray-700 ml-4 mb-3`}
              isChecked={isChecked.socialMedia}
              onClick={() => handleCheckboxChange('socialMedia')}
              rightText='Social Media'
              rightTextStyle={{ color: isChecked.socialMedia ? 'green' : 'black' }}
              checkedCheckBoxColor='green'
              uncheckedCheckBoxColor='red'
            />
            <CheckBox
              style={tw`text-gray-700 ml-4 mb-3`}
              isChecked={isChecked.friends}
              onClick={() => handleCheckboxChange('friends')}
              rightText='Friends'
              rightTextStyle={{ color: isChecked.friends ? 'green' : 'black' }}
              checkedCheckBoxColor='green'
              uncheckedCheckBoxColor='red'
            />
            <CheckBox
              style={tw`text-gray-700 ml-4 mb-3`}
              isChecked={isChecked.searchEngine}
              onClick={() => handleCheckboxChange('searchEngine')}
              rightText='Search Engine(e.g Google)'
              rightTextStyle={{ color: isChecked.searchEngine ? 'green' : 'black' }}
              checkedCheckBoxColor='green'
              uncheckedCheckBoxColor='red'
            />
            <CheckBox
              style={tw`text-gray-700 ml-4 mb-3`}
              isChecked={isChecked.others}
              onClick={() => handleCheckboxChange('others')}
              rightText='Other'
              rightTextStyle={{ color: isChecked.others ? 'green' : 'black' }}
              checkedCheckBoxColor='green'
              uncheckedCheckBoxColor='red'
            />
            <View style={tw`flex-row justify-between`}>
              <TouchableOpacity style={tw`py-3 rounded-full bg-orange-400 mb-10 mt-5 w-24`}
                onPress={() => { sendFeedback() }}>
                <Text style={tw`font-xl font-bold text-center text-white text-base`}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={tw`py-3 mb-10 mt-5 w-24`}>
                <Text style={tw`font-xl text-center text-black underline`}>Clear</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
