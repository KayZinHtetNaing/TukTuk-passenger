import { View, Text,TouchableOpacity,Image , Alert,ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { TextInput } from 'react-native';
import axios from 'axios';
//import Icon from 'react-native-vector-icons/Iconics';

const tukLogo=require("../assets/images/logo.png")

export default function LoginScreen() {
  const [contact, setContact] = useState([]);
  const getContact = async () => {
    try {
      const response = await axios.get("http://192.168.43.239:3000/passengers");
      // console.log(response.data.data); // Log the fetched data
      setContact(response.data.data);
    } catch (error) {
      console.error("Error fetching contact:", error);
    }
  }
  
  

  useEffect(() =>{
    getContact();
  },[])

  const navigation = useNavigation();
  // const HomeScreen = () => {
  //   navigation.navigate("Home");
  // };
  

  const [fdata, setFdata] = useState({
    phnumber:"",
    password:"",
  });




  const [errorMessage , setErrorMessage] =useState(null);
  const sendtoBackend = () => {
    if (fdata.phnumber === "" || fdata.password === "") {
      setErrorMessage("All fields are required");
      return;
    } 
    
    let found = false;
    contact.forEach((contact) => {
      if (contact.phoneNumber === fdata.phnumber && contact.password === fdata.password) {
        found = true;
        // Assuming you want to retrieve user-specific data and navigate to the home screen on successful login
        // console.log("Login Successful"); 
        Alert.alert("လူကြီးမင်း၏ အကောင့်ဝင်ရောက်မှုအောင်မြင်ပါသည် Appကိုအသုံးပြုခြင်းကြောင့်ကျေးဇူးတင်ပါသည်။");
        navigation.navigate("Home", { message: contact }); // Passing the user data to the home screen
      }
    });
  
    if (!found) {
      setErrorMessage("Invalid phone number or password");
    }
  };
  
  


  return (
   
<ScrollView>
<View style={tw`flex-1 bg-orange-400`}>
    <SafeAreaView style={tw`flex`}>
        <View style={tw`flex-row justify-start`}>
            <TouchableOpacity style={tw`bg-white p-2 rounded-tr-2xl rounded-bl-2xl ml-4 mt-2`} onPress={() => navigation.goBack()}>
                <ArrowLeftIcon size="20" color="orange" />
            </TouchableOpacity>
        </View>
        <View style={tw`flex-1 justify-center items-center mt-20`}>
            <Image source={tukLogo} style={{width:150,height:150}}/>
            <Text style={tw`text-white font-bold text-4xl tracking-wide leading-normal`}>Tuk-Tuk </Text>
        </View>
    </SafeAreaView>
    <View style={tw`flex-1 px-8 pt-8 mt-20 bg-white rounded-t-10`}>

    {
        errorMessage ? <Text style={tw`ml-20   text-red-600`} class>{errorMessage}</Text> : null
      }
        <View>
 
            <Text style={tw`text-gray-700 ml-4 mb-3`}>ဖုန်းနံပါတ်</Text>

            <TextInput style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-5`} 
             placeholder="ဖုန်းနံပါတ်ရိုက်ထည့်ပါ"
            onChangeText={(text) => setFdata({...fdata, phnumber:text}) }


             />

            <Text style={tw`text-gray-700 ml-4 mb-3`}>စကားဝှက်</Text>
            <TextInput style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-10`} 
            secureTextEntry 
            placeholder="စကားဝှက်ရိုက်ထည့်ပါ"
            
            onChangeText={(text) => setFdata({...fdata, password:text}) }

            />
            
            <TouchableOpacity style={tw`py-3 rounded-full bg-orange-400`} 
            onPress= {() => {
              sendtoBackend();
            }}
            
            >
              <Text style={tw`text-xl font-bold text-center text-white text-base`}>အကောင့်ဝင်ပါ</Text>
            </TouchableOpacity>
        </View>
        <View style={tw`flex-row justify-center mt-5 mb-20`}>
              
              <TouchableOpacity style={tw`font-semibold text-orange-400`} onPress={() => navigation.navigate("InputPh")}><Text>အကောင့်မရှိလျှင် အကောင့်တစ်ခုတည်ဆောက်ရန်</Text></TouchableOpacity>
            </View>
    </View>
  </View>

    </ScrollView>

  )
}