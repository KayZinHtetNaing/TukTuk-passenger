import { View, Text, TouchableOpacity, Image ,Alert,ScrollView} from "react-native";
import React,{useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import tw, { create } from "twrnc";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { TextInput } from "react-native";
import axios from "axios";

const tukLogo = require("../assets/images/logo.png");

export default function SignupScreen({route}) {
  const{message} = route.params;
  // console.log(message);
  const navigation = useNavigation();
  const HomeScreen = () => {navigation.navigate("Home")};


  const [name , setName] = useState('');
  const [phoneNumber , setphoneNumber] = useState(message);
  const [password , setPassword] = useState('');
  const [cpassword , setcPassword] = useState('');

 
    // animation: 'myAnim 2s ease 0s 1 normal forwards',
const createAccount = async(contact) => {
  const {data} = await axios.post("http://192.168.43.239:3000/passengers",contact)
}
  
  

  const [errorMessage , setErrorMessage] =useState(null);
  const sendtoBackend = () => {
    // console.log(fdata);
    if(name == "" ||
    
    password =="" ||
    cpassword =="") 
    {
      setErrorMessage("All fields are required");
      return;
    }
    else if(password != cpassword){
      setErrorMessage("Password and Confirm Password must be same");
      return;
    }
    else {
      
     console.log(name , phoneNumber , password ,cpassword);
    const contact ={name, phoneNumber,password,cpassword};
     
      navigation.navigate("Home",{message:contact});
      Alert.alert("လူကြီးမင်း၏ အကောင့်ဝင်ရောက်မှုအောင်မြင်ပါသည် Appကိုအသုံးပြုခြင်းကြောင့်ကျေးဇူးတင်ပါသည်။");
      createAccount(contact);
  


    }
  }

  return (
    <ScrollView>
    <View style={tw`flex-1 bg-orange-400`}>
      <SafeAreaView style={tw`flex`}>
        <View style={tw`flex-row justify-start`}>
          <TouchableOpacity
            style={tw`bg-white p-2 rounded-tr-2xl rounded-bl-2xl ml-4 mt-2`}
            onPress={() => navigation.goBack()}
          >
            <ArrowLeftIcon size="20" color="orange" />
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row justify-center`}>
          <Image source={tukLogo} style={{ width: 150, height: 150 }} />
        </View>
      </SafeAreaView>

     
      <View style={tw`flex-1 px-8 pt-8 mt-15 bg-white rounded-t-10`}>
      {
        errorMessage ? <Text style={tw`ml-20 animate-fade-right  text-red-600`} class>{errorMessage}</Text> : null
      }
        <View style={tw`form space-y-2`}>

          <Text style={tw`text-gray-700 ml-4 mb-3`}>အသုံးပြုသူအမည်</Text>
          <TextInput
            style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-5`}
            
            placeholder="အမည်ရိုက်ထည့်ပါ"
            onChangeText={(text) => setName(text)}
              value={name}
            // onChangeText={(text) => setFdata({...fdata, name:text}) }
          />
           <Text style={tw`text-gray-700 ml-4 mb-3`}>ဖုန်းနံပါတ်</Text>
          <TextInput
            style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-5`}
            
            placeholder="ဖုန်းနံပါတ်ရိုက်ထည့်ပါ"
            editable={false}
            value={message}
            onChange={(e) => {
                  setphoneNumber(e.target.value);
                }}
            // onChangeText={(text) => setFdata({...fdata, name:text}) }
          />

          <Text style={tw`text-gray-700 ml-4 mb-3`}>စကားဝှက်</Text>
          <TextInput
            style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-5`}
            secureTextEntry
          
            placeholder="စကားဝှက်ရိုက်ထည့်ပါ"
            onChangeText={(text) => setPassword(text)}
              value={password}
            // onChangeText={(text) => setFdata({...fdata , password: text})}
          />

          <Text style={tw`text-gray-700 ml-4 mb-3`}>အတည်ပြု စကားဝှက်</Text>
          <TextInput
            style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-10`}
            secureTextEntry
            
            placeholder="စကားဝှက်ကိုပြန်လည်အတည်ပြုပါ"
            onChangeText={(text) => setcPassword(text)}
            value={cpassword}
            // onChangeText = {(text) => setFdata({...fdata, cpassword: text})}
          />

          <TouchableOpacity
            style={tw`py-3 rounded-full bg-orange-400 mb-7`}
            onPress= {() => {
              sendtoBackend();
            }}
          >
            <Text
              style={tw`text-xl font-bold text-center text-white text-base`}
            >
              အကောင့်တည်ဆောက်မည်
            </Text>
          </TouchableOpacity>
        </View>
        {/* <View style={tw`flex-row justify-center mt-5`}>
          <Text style={tw`font-semibold text-grey-700`}>
            Already have an account?
          </Text>
          <TouchableOpacity
            style={tw`font-semibold text-orange-400`}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
    </ScrollView>
  );
}